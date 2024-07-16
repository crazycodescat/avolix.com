import { IoMenu } from 'react-icons/io5';
import { FaRegUser, FaCartPlus } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [enterPartNumber, setEnterPartNumber] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const navigationToggler = () => setOpen((prev) => !prev);

  const submitPartNumber = (e) => {
    e.preventDefault();
    if (ref.current.value.length > 0) {
      setEnterPartNumber(false);
      const partNumber = ref.current.value;
      const encodedPartNumber = encodeURIComponent(partNumber);
      navigate(`/api/part/${encodedPartNumber}`);
    } else {
      setEnterPartNumber(true);
      return;
    }
  };
  return (
    <header className="flex flex-col gap-2 bg-black pt-4 relative font-Inter">
      <AnimatePresence>
        {open && <MobileNavigation navigationToggler={navigationToggler} />}
      </AnimatePresence>
      <div className="">
        <div className="mx-auto flex justify-between px-3 max-w-[1000px]">
          <div className="flex gap-2">
            <button
              onClick={navigationToggler}
              className="cursor-pointer md:hidden"
            >
              <IoMenu fontSize={24} />
            </button>
            <div className="flex">
              <Link to="/">
                <img
                  className="max-w-14 border border-primary01 border-solid shadow-md shadow-primary01"
                  src="https://res.cloudinary.com/ddx7todbr/image/upload/v1719227095/Electronics%20Parts%20Listing%20Website/azjar0db1ukk0wxya6ci.png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Link className="p-3">
              <FaRegUser fontSize={22} />
            </Link>
            <Link className="p-3">
              <FaCartPlus fontSize={22} />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center w-full p-2">
        <div className="flex flex-col gap-1">
          <form
            onSubmit={submitPartNumber}
            className="flex justify-between rounded-lg"
          >
            <input
              ref={ref}
              className="text-neutral-900 p-4 w-full rounded-tl-md rounded-bl-md focus:outline-none"
              type="search"
              name="part number"
              id=""
              placeholder="Enter Mfr. Part Number"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-black w-16 rounded-tr-md rounded-br-md"
            >
              <FaMagnifyingGlass />
            </button>
          </form>
          Error's
          {enterPartNumber && (
            <div className="">
              <p className="text-base text-red-600 font-semibold uppercase underline">
                Enter Part Number
              </p>
            </div>
          )}
        </div>
      </div> */}

      {/* Address section */}
      <div className="max-w-[1000px] w-full mx-auto px-3">
        <div className="flex flex-col items-end">
          <span className="text-primary01 font-semibold text-xs">
            72 Shelton St, London WC2H 9JQ,
          </span>
          <span className="text-primary01 font-semibold text-xs">
            United Kingdom
          </span>
        </div>
      </div>

      <hr className="border border-solid border-primary01 mt-4" />
    </header>
  );
};

export default Header;
