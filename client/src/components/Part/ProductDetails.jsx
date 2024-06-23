import { FaRegCopy } from 'react-icons/fa6';

const ProductDetails = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="flex justify-between items-center xs:flex-col sm:flex-row">
        <img
          src="https://www.omron.com/ec/products/images/EE-1006.png"
          alt="Product Image"
          className="w-24 h-24 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
        />
        <h2 className="text-2xl font-bold xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          EE-1006
        </h2>
      </div>
      <div className="mt-4 xs:mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
        <table className="w-full table-auto xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <tbody>
            <tr className='group relative'>
              <td className="font-semibold">Part Number</td>
              <td>OR559-ND</td>
              <FaRegCopy className='absolute top-1/2 transform -translate-y-1/2 right-0 text-xl hidden group-hover:block' />
            </tr>
            <tr>
              <td className="font-semibold">Manufacturer</td>
              <td>OMRON AUTOMATION AND SAFETY</td>
            </tr>
            <tr>
              <td className="font-semibold">Manufacturer Product Number</td>
              <td>EE-1006</td>
            </tr>
            <tr>
              <td className="font-semibold">Description</td>
              <td>CONNECTOR W/2M CABLE FOR OPTO</td>
            </tr>
            <tr>
              <td className="font-semibold">Datasheet</td>
              <td>
                <a href="#" className="text-blue-500 hover:underline">
                  DATASHEET
                </a>
              </td>
            </tr>
            <tr>
              <td className="font-semibold">EDA/CAD Models</td>
              <td>
                <a href="#" className="text-blue-500 hover:underline">
                  EE-1006 MODELS
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-gray-600 text-sm xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        Image shown is a representation only. Exact specifications should be
        obtained from the product data sheet.
      </p>
    </div>
  );
};

export default ProductDetails;
