/* eslint-disable react/prop-types */
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa6";

const Description = ({ products }) => {
  const copyToClipboard = async (text) => {
    try {
      if (!navigator.clipboard) {
        console.log("clipboard API is not available");
        return;
      }

      const textToCopy = text.trim();
      const permissionStatus = await navigator.permissions.query({
        name: "clipboard-write",
      });
      if (permissionStatus.state === "denied") {
        console.log("Clipboard permission denied. please add https connection");
        return;
      }
      //write the text to the clipboard
      await navigator.clipboard.writeText(textToCopy);
      // console.log('Text copied to clipboard successfully');
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-2 items-center group">
            <h1 className="text-xl font-black">
              {(products &&
                products[0] &&
                products[0].parts &&
                products[0].parts[0].ManufacturerProductNumber) ||
                (products &&
                  products[1] &&
                  products[1].parts &&
                  products[1].parts[0].ManufacturerPartNumber)}
            </h1>
            <FaRegCopy
              onClick={() =>
                copyToClipboard(
                  (products &&
                    products &&
                    products[0] &&
                    products[0].parts &&
                    products[0].parts[0].ManufacturerProductNumber) ||
                    (products &&
                      products &&
                      products[1] &&
                      products[1].parts &&
                      products[1].parts[0].ManufacturerPartNumber)
                )
              }
              className="text-blue-800 cursor-pointer hidden group-hover:block"
            />
          </div>
          {/* WRAPPER */}
          <div className="flex gap-4">
            <div className="w-[400px]">
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Part Number</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Manufacturer</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Manufacturer Product Number</h3>
              </div>
              <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="text-end">Description</h3>
              </div>
              {/* {products &&
                products &&
                products[0] &&
                products[0].parts &&
                products[0].parts[0] &&
                products[0].parts[0].Description.DetailedDescription && (
                  <div className="p-2 pl-0 text-xs font-Inter font-semibold">
                    <h3 className="text-end">Detailed Description</h3>
                  </div>
                )} */}
              <div className="flex justify-end items-center gap-2 p-2 pl-0 text-xs font-Inter font-semibold">
                <h3 className="">Datasheet</h3>
              </div>
            </div>
            <div className="w-full">
              <div className="relative flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                <h3>
                  {(products &&
                    products &&
                    products[0] &&
                    products[0].parts &&
                    products[0].parts[0].ManufacturerProductNumber) ||
                    (products &&
                      products &&
                      products[1] &&
                      products[1].parts &&
                      products[1].parts[0].ManufacturerPartNumber)}
                </h3>
                <FaRegCopy
                  onClick={() =>
                    copyToClipboard(
                      (products &&
                        products &&
                        products[0] &&
                        products[0].parts &&
                        products[0].parts[0].ManufacturerProductNumber) ||
                        (products &&
                          products &&
                          products[1] &&
                          products[1].parts &&
                          products[1].parts[0].ManufacturerPartNumber)
                    )
                  }
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-800 cursor-pointer hidden group-hover:block"
                />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group relative">
                <h3
                  onClick={copyToClipboard}
                  className="text-blue-700 hover:underline cursor-pointer"
                >
                  {(products &&
                    products &&
                    products[0] &&
                    products[0].parts &&
                    products[0].parts[0].Manufacturer?.Name) ||
                    (products &&
                      products &&
                      products[1] &&
                      products[1].parts &&
                      products[1].parts[0].Manufacturer)}
                </h3>
                <FaRegCopy
                  onClick={() =>
                    copyToClipboard(
                      (products &&
                        products &&
                        products[0] &&
                        products[0].parts &&
                        products[0].parts[0].Manufacturer?.Name) ||
                        (products &&
                          products &&
                          products[1] &&
                          products[1].parts &&
                          products[1].parts[0].Manufacturer)
                    )
                  }
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-800 cursor-pointer hidden group-hover:block"
                />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group relative">
                <h3>
                  {(products &&
                    products &&
                    products[0] &&
                    products[0].parts &&
                    products[0].parts[0].ManufacturerProductNumber) ||
                    (products &&
                      products &&
                      products[1] &&
                      products[1].parts &&
                      products[1].parts[0].ManufacturerPartNumber)}
                </h3>
                <FaRegCopy
                  onClick={() =>
                    copyToClipboard(
                      (products &&
                        products &&
                        products[0] &&
                        products[0].parts &&
                        products[0].parts[0].ManufacturerProductNumber) ||
                        (products &&
                          products &&
                          products[1] &&
                          products[1].parts &&
                          products[1].parts[0].ManufacturerPartNumber)
                    )
                  }
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-800 cursor-pointer hidden group-hover:block"
                />
              </div>
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group relative">
                <h3>
                  {(products &&
                    products &&
                    products[0] &&
                    products[0].parts &&
                    products[0].parts[0].Description?.ProductDescription) ||
                    (products &&
                      products &&
                      products[1] &&
                      products[1].parts &&
                      products[1].parts[0].Description)}
                </h3>
                <FaRegCopy
                  onClick={() =>
                    copyToClipboard(
                      (products &&
                        products &&
                        products[0] &&
                        products[0].parts &&
                        products[0].parts[0].Description?.ProductDescription) ||
                        (products &&
                          products &&
                          products[1] &&
                          products[1].parts &&
                          products[1].parts[0].Description)
                    )
                  }
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-800 cursor-pointer hidden group-hover:block"
                />
              </div>
              {/* {products &&
                products &&
                products[0] &&
                products[0].parts &&
                products[0].parts[0] &&
                products[0].parts[0].Description.DetailedDescription && (
                  <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group">
                    <h3>
                      {products[0].parts[0].Description.DetailedDescription}
                    </h3>
                    <FaRegCopy className="text-blue-800 cursor-pointer hidden group-hover:block" />
                  </div>
                )} */}
              <div className="flex items-center justify-between p-2 text-xs font-Inter font-medium text-neutral-600 group relative">
                <div className="flex gap-2 items-center">
                  <a
                    target="_blank"
                    href={
                      (products &&
                      products &&
                      products[0] &&
                      products[0].parts &&
                      products[0].parts[0].DatasheetUrl !== null
                        ? products[0].parts[0].DatasheetUrl
                        : "/") ||
                      (products &&
                      products &&
                      products[1] &&
                      products[1].parts &&
                      products[1].parts[0].DataSheetUrl !== ""
                        ? products[1].parts[0].DataSheetUrl
                        : "/")
                    }
                  >
                    <h3 className="text-blue-700 cursor-pointer hover:underline">
                      {products &&
                      products &&
                      products[0] &&
                      products[0].parts &&
                      products[0].parts[0].DatasheetUrl === null
                        ? "DataSheet Not Available"
                        : products &&
                          products &&
                          products[0] &&
                          products[0].parts &&
                          products[0].parts[0].DataSheetUrl === ""
                        ? "DataSheet Not Available"
                        : "DataSheet"}
                    </h3>
                  </a>
                  <BsFileEarmarkPdfFill className="text-red-600 text-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full font-Inter md:hidden">
        <div className="flex gap-2 group items-center">
          <h1 className="text-xl font-black">
            {(products &&
              products &&
              products[0] &&
              products[0].parts &&
              products[0].parts[0].ManufacturerProductNumber) ||
              (products &&
                products &&
                products[1] &&
                products[1].parts &&
                products[1].parts[0].ManufacturerPartNumber)}
          </h1>
          <FaRegCopy
            onClick={() =>
              copyToClipboard(
                (products &&
                  products &&
                  products[0] &&
                  products[0].parts &&
                  products[0].parts[0].ManufacturerProductNumber) ||
                  (products &&
                    products &&
                    products[1] &&
                    products[1].parts &&
                    products[1].parts[0].ManufacturerPartNumber)
              )
            }
            className="text-blue-800 cursor-pointer group-hover:block hidden"
          />
        </div>
        <div className="flex flex-col gap-6 mt-8 font-medium">
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Part Number</h6>
              <h6 className="text-desc-color">
                {(products &&
                  products &&
                  products[0] &&
                  products[0].parts &&
                  products[0].parts[0].ManufacturerProductNumber) ||
                  (products &&
                    products &&
                    products[1] &&
                    products[1].parts &&
                    products[1].parts[0].ManufacturerPartNumber)}
              </h6>
            </div>
            <div className="">
              <FaRegCopy
                onClick={() =>
                  copyToClipboard(
                    (products &&
                      products &&
                      products[0] &&
                      products[0].parts &&
                      products[0].parts[0].ManufacturerProductNumber) ||
                      (products &&
                        products &&
                        products[1] &&
                        products[1].parts &&
                        products[1].parts[0].ManufacturerPartNumber)
                  )
                }
                className="text-blue-800 hidden group-hover:block cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Manufacturer</h6>
              <h6 className="text-blue-700 hover:underline cursor-pointer">
                {(products &&
                  products &&
                  products[0] &&
                  products[0].parts &&
                  products[0].parts[0].Manufacturer?.Name) ||
                  (products &&
                    products &&
                    products[1] &&
                    products[1].parts &&
                    products[1].parts[0].Manufacturer)}
              </h6>
            </div>
            <div className="">
              <FaRegCopy
                onClick={() =>
                  copyToClipboard(
                    (products &&
                      products &&
                      products[0] &&
                      products[0].parts &&
                      products[0].parts[0].Manufacturer?.Name) ||
                      (products &&
                        products &&
                        products[1] &&
                        products[1].parts &&
                        products[1].parts[0].Manufacturer)
                  )
                }
                className="text-blue-800 hidden group-hover:block cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">
                Manufacturer Product Number
              </h6>
              <h6 className="text-desc-color">
                {(products &&
                  products &&
                  products[0] &&
                  products[0].parts &&
                  products[0].parts[0].ManufacturerProductNumber) ||
                  (products &&
                    products &&
                    products[1] &&
                    products[1].parts &&
                    products[1].parts[0].ManufacturerPartNumber)}
              </h6>
            </div>
            <div className="">
              <FaRegCopy
                onClick={() =>
                  copyToClipboard(
                    (products &&
                      products &&
                      products[0] &&
                      products[0].parts &&
                      products[0].parts[0].ManufacturerProductNumber) ||
                      (products &&
                        products &&
                        products[1] &&
                        products[1].parts &&
                        products[1].parts[0].ManufacturerPartNumber)
                  )
                }
                className="text-blue-800 hidden group-hover:block cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center group">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Description</h6>
              <h6 className="text-desc-color">
                {(products &&
                  products &&
                  products[0] &&
                  products[0].parts &&
                  products[0].parts[0].Description?.ProductDescription) ||
                  (products &&
                    products &&
                    products[1] &&
                    products[1].parts &&
                    products[1].parts[0].Description)}
              </h6>
            </div>
            <div className="">
              <FaRegCopy
                onClick={() =>
                  copyToClipboard(
                    (products &&
                      products &&
                      products[0] &&
                      products[0].parts &&
                      products[0].parts[0].Description?.ProductDescription) ||
                      (products &&
                        products &&
                        products[1] &&
                        products[1].parts &&
                        products[1].parts[0].Description)
                  )
                }
                className="text-blue-800 hidden group-hover:block cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex flex-col text-black text-xs">
              <h6 className="font-semibold text-sm">Datasheet</h6>
              <div className="flex items-center gap-1">
                <BsFileEarmarkPdfFill className="text-red-600" />
                <a
                  target="_blank"
                  href={
                    (products &&
                    products &&
                    products[0] &&
                    products[0].parts &&
                    products[0].parts[0].DatasheetUrl !== null
                      ? products[0].parts[0].DatasheetUrl
                      : "/") ||
                    (products &&
                    products &&
                    products[1] &&
                    products[1].parts &&
                    products[1].parts[0].DataSheetUrl !== ""
                      ? products[1].parts[0].DataSheetUrl
                      : "/")
                  }
                >
                  <h3 className="text-blue-700 cursor-pointer hover:underline">
                    {products &&
                    products &&
                    products[0] &&
                    products[0].parts &&
                    products[0].parts[0].DatasheetUrl === null
                      ? "DataSheet Not Available"
                      : products &&
                        products &&
                        products[0] &&
                        products[0].parts &&
                        products[0].parts[0].DataSheetUrl === ""
                      ? "DataSheet Not Available"
                      : "DataSheet"}
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;

// Description.propTypes = {
//   products:propTypes.
// };
