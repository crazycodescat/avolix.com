const ShimmerEffect = () => {
  return (
    <div className="flex flex-col gap-12 items-center bg-white py-6 px-4 shadow-xl md:rounded-2xl 2xl:flex-row xl:w-[800px] h-fit">
      {/* IMAGE */}
      <div className="w-[250px] flex flex-col gap-4">
        <div className="w-[250px] h-[250px] animate-pulse bg-gray-200"></div>
        <div className="w-full h-14 bg-gray-200 animate-pulse"></div>
      </div>

      {/* MOBILE DESCRIPTION */}
      <div className="flex flex-col gap-8 w-full md:hidden">
        <div className="h-6 w-52 animate-pulse bg-gray-200"></div>
        <div className="flex flex-col gap-4">
          <div className="animate-pulse w-40 bg-gray-200 h-10"></div>
          <div className="animate-pulse w-40 bg-gray-200 h-10"></div>
          <div className="animate-pulse w-40 bg-gray-200 h-10"></div>
          <div className="animate-pulse w-40 bg-gray-200 h-10"></div>
          <div className="animate-pulse w-40 bg-gray-200 h-10"></div>
        </div>
      </div>
      {/* DESKTOP DESCRIPTION */}
      <div className="w-full hidden md:block">
        <div className="flex flex-col gap-8 max-w-[658px] mx-auto">
          <div className="h-6 w-52 animate-pulse bg-gray-200"></div>
          <table className="">
            <tbody className="flex flex-col gap-2">
              <tr className="flex gap-4">
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
              </tr>
              <tr className="flex gap-4">
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
              </tr>
              <tr className="flex gap-4">
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
              </tr>
              <tr className="flex gap-4">
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
              </tr>
              <tr className="flex gap-4">
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
                <td className="animate-pulse bg-gray-200 w-full h-6"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShimmerEffect;
