// COMPONENTS
import { BsBoxSeam, BsGraphDownArrow } from 'react-icons/bs';

const LowestPriceBox = () => {
  return (
    <div className="bg-white shadow-xl">
      {/* Price Box Header */}
      <div className="flex justify-between p-4 px-2 border border-solid border-[#B4B4B4] border-b-0">
        {/* BULK TEXT AND ICON */}
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-base">LOWEST PRICE</p>
          <BsGraphDownArrow className="text-green-800 text-xl" />
        </div>
      </div>

      {/* PRICE TABLE */}
      <table className="w-full">
        <thead>
          <tr className="text-xs">
            <th className="p-2 font-bold border-solid border-[#B4B4B4] border">
              QUANTITY
            </th>
            <th className="p-2 font-bold border-solid border-[#B4B4B4] border">
              UNIT PRICE
            </th>
            <th className="p-2 font-bold border-solid border-[#B4B4B4] border">
              EXT PRICE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              <div className="flex gap-2 items-center">
                <BsBoxSeam className="text-sm text-red-600" />
                <p>1</p>
              </div>
            </td>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              $20.45
            </td>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              $20.45
            </td>
          </tr>
          <tr>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              <p>10</p>
            </td>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              $17.73
            </td>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              $177.30
            </td>
          </tr>
          <tr>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              <p>100</p>
            </td>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              $15.20
            </td>
            <td className="text-xs border-solid border-[#B4B4B4] border p-2">
              $1,520.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LowestPriceBox;
