/* eslint-disable react/prop-types */
import { IoCloseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const MobileNavigation = ({ navigationToggler }) => {
  return (
    <motion.div
      // variants={slider}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { type: 'just' } }}
      exit={{ x: -100, opacity: 0, transition: { type: 'just' } }}
      className="absolute top-0 bg-neutral-700 h-screen w-1/2"
    >
      <div className="flex justify-between py-4 px-2 bg-black">
        <div className="flex">
          <img
            className="w-20"
            src="https://res.cloudinary.com/ddx7todbr/image/upload/v1713606629/Electronics%20Parts%20Listing%20Website/s0l9tr2tn1qdzdbupymp.avif"
            alt=""
          />
        </div>
        <button onClick={navigationToggler}>
          <IoCloseOutline fontSize={24} />
        </button>
      </div>
      <div>
        <div className="flex flex-col text-sm divide-y-[1px] divide-neutral-400 divide-solid">
          <a href="#" className="p-2">
            Products
          </a>
          <a href="#" className="p-2">
            Manufacturers
          </a>
          <a href="#" className="p-2">
            Resources
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavigation;
