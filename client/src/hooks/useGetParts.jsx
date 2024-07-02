import axios from 'axios';
import { useAccessToken } from './useAccessToken';
import { useMemo, useState } from 'react';

const formatResponse = (data) => {
  if (data?.Products) {
    return data.ProductsCount !== 0
      ? [
          ...data.Products,
          {
            distributor: import.meta.env.VITE_DIGIKEY,
            result: true,
            img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif',
          },
        ]
      : [
          [],
          {
            distributor: import.meta.env.VITE_DIGIKEY,
            result: false,
            img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif',
          },
        ];
  } else if (data?.SearchResults?.Parts) {
    return data.SearchResults.NumberOfResult !== 0
      ? [
          ...data.SearchResults.Parts,
          {
            distributor: import.meta.env.VITE_MOUSER,
            result: true,
            img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606671/Electronics%20Parts%20Listing%20Website/c4nldcp1kyvyyzy08f2j.webp',
          },
        ]
      : [
          [],
          {
            distributor: import.meta.env.VITE_MOUSER,
            result: false,
            img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606671/Electronics%20Parts%20Listing%20Website/c4nldcp1kyvyyzy08f2j.webp',
          },
        ];
  } else {
    return '';
  }
};

const useGetParts = () => {
  const { accessToken } = useAccessToken();
  const [loading, setLoading] = useState(true);
  
  const fetchParts = useMemo(
    () =>
      async (partNumber, limit = 20) => {
        const distributorsRequestConfig = [
          {
            url: import.meta.env.VITE_DIGIKEY_SEARCH_URL,
            method: 'post',
            data: {
              Keywords: partNumber,
              Limit: limit,
              offset: 0,
              FilterOptionsRequest: {
                // Specify any filters you want to apply
              },
              SortOptions: {
                Field: 'None',
                SortOrder: 'Ascending',
              },
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'X-DIGIKEY-Client-Id': import.meta.env
                .VITE_DIGIKEY_PROD_CLIENT_ID,
              'X-DIGIKEY-Locale-Site': 'IN',
              'X-DIGIKEY-Locale-Currency': 'INR',
              'Content-Type': 'application/json',
            },
          },
          {
            url: import.meta.env.VITE_MOUSER_SEARCH_URL,
            method: 'post',
            data: {
              SearchByKeywordRequest: {
                keyword: partNumber,
                records: limit,
                startingRecord: 0,
                searchOptions: 'string',
                searchWithYourSignUpLanguage: 'string',
              },
            },
            params: {
              apiKey: import.meta.env.VITE_MOUSER_SEARCH_API_KEY,
            },
          },
        ];

        const products = [];
        try {
          for (let i = 0; i < distributorsRequestConfig.length; i++) {
            const response = await axios.request(distributorsRequestConfig[i]);
            // console.log(response);
            // sortArr(response);
            products.push({
              parts: formatResponse(response.data),
            });
          }
          return products;
        } catch (error) {
          console.error('ERROR: While Fetching Parts', error);
          throw error;
        }
      },
    [accessToken]
  );

  return { fetchParts, loading, setLoading };
};

export { useGetParts };

// import axios from 'axios';

// // import { useAuth } from './useAuth';
// import { useAccessToken } from './useAccessToken';
// import { useState, useMemo } from 'react';

// const useGetParts = () => {
//   const { accessToken } = useAccessToken();
//   const products = [];

//   const fetchParts = useMemo(() => async (partNumber, limit = 20) => {
//     const distributorsRequestConfig = [
//       {
//         url: import.meta.env.VITE_DIGIKEY_SEARCH_URL,
//         method: 'post',
//         data: {
//           Keywords: partNumber,
//           Limit: limit,
//           offset: 0,
//           FilterOptionsRequest: {
//             //Specify any filters you want to  apply
//           },
//           SortOptions: {
//             Field: 'None',
//             SortOrder: 'Ascending',
//           },
//         },
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           'X-DIGIKEY-Client-Id': import.meta.env.VITE_DIGIKEY_PROD_CLIENT_ID,
//           'X-DIGIKEY-Locale-Site': 'IN',
//           'X-DIGIKEY-Locale-Currency': 'INR',
//           'Content-Type': 'application/json',
//         },
//       },
//       {
//         url: import.meta.env.VITE_MOUSER_SEARCH_URL,
//         method: 'post',
//         data: {
//           SearchByKeywordRequest: {
//             keyword: partNumber,
//             records: limit,
//             startingRecord: 0,
//             searchOptions: 'string',
//             searchWithYourSignUpLanguage: 'string',
//           },
//         },
//         params: {
//           apiKey: import.meta.env.VITE_MOUSER_SEARCH_API_KEY,
//         },
//       },
//     ];
//     products.length = 0;

//     try {
//       for (let i = 0; i < distributorsRequestConfig.length; i++) {
//         const response = await axios.request(distributorsRequestConfig[i]);
//         console.log(response);

//         products.push({
//           parts: formatResponse(response.data),
//         });
//       }

//       return products;
//     } catch (error) {
//       console.log('ERROR: While Fetching Parts', error);
//       console.log(error);
//     }
//   });
//   return { fetchParts };
// };

// export { useGetParts };

// const formatResponse = (data) => {
//   return data?.Products && data.ProductsCount !== 0
//     ? [
//         ...data.Products,
//         {
//           distributor: import.meta.env.VITE_DIGIKEY,
//           result: true,
//           img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif',
//         },
//       ]
//     : data?.Products && data.ProductsCount === 0
//     ? [
//         [],
//         {
//           distributor: import.meta.env.VITE_DIGIKEY,
//           result: false,
//           img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif',
//         },
//       ]
//     : data?.SearchResults?.NumberOfResult !== 0
//     ? [
//         ...data.SearchResults.Parts,
//         {
//           distributor: import.meta.env.VITE_MOUSER,
//           result: true,
//           img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606671/Electronics%20Parts%20Listing%20Website/c4nldcp1kyvyyzy08f2j.webp',
//         },
//       ]
//     : data?.SearchResults?.NumberOfResult === 0
//     ? [
//         [],
//         {
//           distributor: import.meta.env.VITE_MOUSER,
//           result: false,
//           img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1713606671/Electronics%20Parts%20Listing%20Website/c4nldcp1kyvyyzy08f2j.webp',
//         },
//       ]
//     : '';
// };
