/* eslint-disable react/prop-types */
// COMPONENTS
import { FaShapes, FaSearchDollar } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

const PriceBox = ({ parts, img }) => {
  function removeRupeeSign(price) {
    const numberString = price.replace(/[^0-9.]/g, "");
    return parseFloat(numberString);
  }

  function formatPriceWithCommas(price) {
    const number = Number(price);
    if (isNaN(number)) {
      return price;
    }
    const formattedPrice = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(number);
    return formattedPrice;
  }
  return (
    <div className="shadow-xl">
      <div className="flex flex-col gap-2 w-full">
        {parts &&
        parts[1]?.distributor &&
        parts[1]?.distributor === import.meta.env.VITE_DIGIKEY
          ? parts[0]?.ProductVariations &&
            parts[0]?.ProductVariations.map((variation, variationIndex) => {
              if (
                (parts &&
                  parts[0]?.ProductVariations.length - 1 === variationIndex &&
                  variation.PackageType.Name === "Cut Tape (CT)") ||
                variation.PackageType.Name === "Digi-Reel®"
              ) {
                return;
              }
              return (
                <div key={variationIndex} className="bg-white">
                  <div className="flex justify-between gap-2 items-center py-4 px-2">
                    <p className="font-semibold text-base">
                      {/* {`${variation.PackageType.Name}`} */}
                      {`${
                        variation.PackageType.Name === "Cut Tape (CT)" ||
                        variation.PackageType.Name === "Digi-Reel®"
                          ? "Cut Tape (CT) & Digi-Reel®"
                          : variation.PackageType.Name
                      }`}
                    </p>
                    <div className="max-w-[60px]">
                      <img src={`${img}`} alt="" />
                    </div>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs font-bold">
                        <td className="text-start p-2 border-solid border-[#B4B4B4] border border-t border-t-1 border-b border-l-0 border-r border-r-1">
                          QUANTITY
                        </td>
                        <td className="text-start p-2 border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0">
                          UNIT PRICE
                        </td>
                        <td className="text-end p-2 border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0">
                          EXT PRICE
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {variation.StandardPricing.map(
                        (pricing, pricingIndex) => {
                          return (
                            <tr key={pricingIndex} className="text-xs">
                              <td className="text-start p-2 font-semibold border-solid border-[#B4B4B4] border border-t border-t-1 border-b border-l-0 border-r border-r-1">
                                <p>
                                  {new Intl.NumberFormat("en-US", {}).format(
                                    pricing.BreakQuantity
                                  )}
                                </p>
                              </td>
                              <td className="text-start p-2 font-medium border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0">
                                {formatPriceWithCommas(pricing.UnitPrice)}
                              </td>
                              <td className="text-end p-2 font-medium border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0 ">
                                {formatPriceWithCommas(pricing.TotalPrice)}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              );
            })
          : parts &&
            parts[1]?.distributor &&
            parts[1]?.distributor === import.meta.env.VITE_MOUSER
          ? parts[0]?.PriceBreaks && (
              <div className="bg-white">
                <div className="flex justify-between gap-2 items-center py-4 px-2">
                  <div className="max-w-[60px]">
                    <img src={img} alt="" />
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-semibold">
                      <td className="text-start p-2 font-bold border-solid border-[#B4B4B4] border border-t border-t-1 border-b border-l-0 border-r border-r-1">
                        QUANTITY
                      </td>
                      <td className="text-start p-2 font-bold border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0">
                        UNIT PRICE
                      </td>
                      <td className="text-end p-2 font-bold border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0">
                        EXT PRICE
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {parts[0].PriceBreaks.map((prcBreaks, prcIndex) => {
                      return (
                        <tr key={prcIndex}>
                          <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                            <div className="flex gap-2 items-center">
                              {/* {prcIndex === 0 && (
                            <BsBoxSeam className="text-sm text-red-600" />
                          )} */}
                              <p>
                                {new Intl.NumberFormat("en-US", {}).format(
                                  prcBreaks.Quantity
                                )}
                              </p>
                            </div>
                          </td>
                          <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                            {formatPriceWithCommas(
                              removeRupeeSign(prcBreaks.Price)
                            )}
                          </td>
                          <td className="text-xs text-end border-solid border-[#B4B4B4] border p-2">
                            {formatPriceWithCommas(
                              prcBreaks.Quantity *
                                removeRupeeSign(prcBreaks.Price)
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) &&
            parts[0]?.PriceBreaks.map((prcBreaks, prcIndex) => {
              return (
                <div key={prcIndex} className="bg-white">
                  <div className="flex justify-between gap-2 items-center py-4 px-2">
                    <div className="max-w-[60px]">
                      <img src={`${prcIndex === 0 && img}`} alt="" />
                    </div>
                  </div>
                  <table className="w-full">
                    {prcIndex === 0 ? (
                      <thead>
                        <tr className="text-xs font-semibold">
                          <td className="text-start p-2 font-bold border-solid border-[#B4B4B4] border border-t border-t-1 border-b border-l-0 border-r border-r-1">
                            QUANTITY
                          </td>
                          <td className="text-start p-2 font-bold border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0">
                            UNIT PRICE
                          </td>
                          <td className="text-end p-2 font-bold border-solid border-[#B4B4B4] border border-t border-b border-l-0 border-r-0">
                            EXT PRICE
                          </td>
                        </tr>
                      </thead>
                    ) : null}
                    <tbody>
                      <tr>
                        <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                          <div className="flex gap-2 items-center">
                            {prcIndex === 0 && (
                              <BsBoxSeam className="text-sm text-red-600" />
                            )}
                            <p>
                              {new Intl.NumberFormat("en-US", {}).format(
                                prcBreaks.Quantity
                              )}
                            </p>
                          </div>
                        </td>
                        <td className="text-xs border-solid border-[#B4B4B4] border p-2">
                          {formatPriceWithCommas(
                            removeRupeeSign(prcBreaks.Price)
                          )}
                        </td>
                        <td className="text-xs text-end border-solid border-[#B4B4B4] border p-2">
                          {formatPriceWithCommas(
                            prcBreaks.Quantity *
                              removeRupeeSign(prcBreaks.Price)
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default PriceBox;
