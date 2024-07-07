// /* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import { useState, useMemo } from 'react';

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Memoize the fetch function
  const fetch = useMemo(
    () => async (config) => {
      console.log(import.meta.env.VITE_DIGIKEY_CATEGORIES);
      try {
        const res = await axios.request(config);
        return res;
      } catch (error) {
        setError(error);
      }
    },
    []
  ); // Empty dependency array means it will only create the function once

  return { fetch, loading, error, setLoading };
};

export default useFetch;
