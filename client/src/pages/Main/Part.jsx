import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import ImageSection from "../../components/Part/ImageSection";
import Description from "../../components/Part/Description";
import PriceBox from "../../components/Part/PriceBox";
// import LowestPriceBox from "../../components/Part/LowestPriceBox";
import AddToCart from "../../components/Part/AddToCart";
import { useAccessToken } from "../../hooks/useAccessToken";
import { useGetParts } from "../../hooks/useGetParts";
// import ProductDetails from '../../components/Part/ProductDetails'
import ShimmerEffect from "../../components/ShimmerEffect";
import RfqForm from "../../components/Part/RfqForm";

const Part = () => {
  const { accessToken } = useAccessToken();
  const { fetchParts, loading, setLoading } = useGetParts();
  const [products, setProducts] = useState(null);
  const { partnumber } = useParams();

  useEffect(() => {
    const loadParts = async () => {
      if (accessToken && partnumber) {
        setLoading(true);
        const parts = await fetchParts(partnumber, 1);
        setProducts(parts);
        setLoading(false);
      }
    };
    loadParts();
  }, [accessToken, partnumber, fetchParts, setLoading]);

  return (
    <div className="h-full">
      <div className="flex flex-col gap-8 text-black px-3 pt-3 xl:flex-row lg:justify-center max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6">
          {/* UPPER SECTION --> IMAGE AND DESCRIPTION */}
          {loading ? (
            <ShimmerEffect />
          ) : (
            <div className="h-fit flex flex-col gap-12 items-center px-4 bg-white shadow-xl py-4 xl:max-w-[800px] md:rounded-2xl 2xl:flex-row">
              <ImageSection products={products} />
              <Description products={products} />
            </div>
          )}

          {/* RFQ Section */}
          <RfqForm />
        </div>

        <div className="flex flex-col gap-4 flex-grow xl:max-w-[350px]">
          {/* ADD TO CART SECTION */}
          <div className="bg-white p-3">
            <AddToCart />
          </div>

          {/* LOWER SECTION --> BULK PRICES AND DIFFERENT DISTRIBUTORS */}
          {products &&
            products.map((product, productIndex) => {
              return (
                <div key={productIndex} className="flex flex-col gap-4">
                  <PriceBox
                    // distributorName={
                    //   product.parts[1].distributor ===
                    //   import.meta.env.VITE_DIGIKEY
                    //     ? import.meta.env.VITE_DIGIKEY
                    //     : product.parts[1].distributor ===
                    //       import.meta.env.VITE_MOUSER
                    //     ? import.meta.env.VITE_MOUSER
                    //     : null
                    // }
                    distributorName={
                      product.parts[1].distributor ===
                      import.meta.env.VITE_DIGIKEY
                        ? import.meta.env.VITE_DIGIKEY
                        : product.parts[1].distributor ===
                          import.meta.env.VITE_MOUSER
                        ? import.meta.env.VITE_MOUSER
                        : null
                    }
                    // img={
                    //   product.parts[1].distributor ===
                    //   import.meta.env.VITE_DIGIKEY
                    //     ? "https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif"
                    //     : product.parts[1].distributor ===
                    //       import.meta.env.VITE_MOUSER
                    //     ? "https://res.cloudinary.com/ddx7todbr/image/upload/v1713606671/Electronics%20Parts%20Listing%20Website/c4nldcp1kyvyyzy08f2j.webp"
                    //     : null
                    // }
                    parts={product.parts}
                  />
                </div>
              );
            })}

          {/* LOWEST PRICE SECTION */}
          {/* <div>
            <LowestPriceBox />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Part;
