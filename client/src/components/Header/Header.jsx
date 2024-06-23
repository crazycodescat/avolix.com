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
    <header className="flex flex-col gap-2 bg-neutral-800 pt-4 relative font-Inter">
      <AnimatePresence>
        {open && <MobileNavigation navigationToggler={navigationToggler} />}
      </AnimatePresence>
      <div className="">
        <div className="mx-auto flex justify-between px-3 max-w-[1400px]">
          <div className="flex gap-2">
            <button
              onClick={navigationToggler}
              className="cursor-pointer md:hidden"
            >
              <IoMenu fontSize={24} />
            </button>
            <div className="flex p-3">
              <Link to="/">
                <img
                  className="w-20"
                  src="https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif"
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
      <div className="flex justify-center w-full bg-neutral-400 p-2">
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
              className="flex items-center justify-center bg-red-600 w-16 rounded-tr-md rounded-br-md"
            >
              <FaMagnifyingGlass />
            </button>
          </form>
          {/* Error's */}
          {enterPartNumber && (
            <div className="">
              <p className="text-base text-red-600 font-semibold uppercase underline">
                Enter Any Part Number
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
