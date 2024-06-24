const AddToCart = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="uppercase font-semibold">
        in-stock: <span>3,271</span>
      </h2>

      <div className="flex flex-col gap-6">
        {/* QUANTITY SECTION */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-sm">QUANTITY</h2>
          <input
            className="h-10 rounded-md p-2 outline-dashed outline-1 outline-red-600 placeholder:text-xs"
            type="number"
            pattern=""
            placeholder="Enter Quantity"
          />
        </div>
        {/* SUMMARY LIST */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-neutral-600">
            <div className="flex justify-between items-center">
              <p className="text-sm text-black font-bold">PACKAGING</p>
              <p className="font-medium">BULK</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-black font-bold">QUANTITY</p>
              <p className="font-medium">12</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-black font-bold">UNIT PRICE</p>
              <p className="font-medium">$17.73900</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-black font-bold">EXT PRICE</p>
              <p className="font-medium">$212.87</p>
            </div>
          </div>

          {/* GRAND TOTAL */}
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">GRAND TOTAL</h1>
            <h1 className="text-end text-xl font-bold">$212.87</h1>
          </div>
        </div>
        {/* ADD TO CART BUTTON */}
        <div className="">
          <button className="p-4 bg-black text-white font-semibold rounded-full w-full">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
