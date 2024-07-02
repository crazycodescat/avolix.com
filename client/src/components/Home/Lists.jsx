import { useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const listVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hover: {
    scale: 1.05,
  },
};

const Lists = ({ listKey }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div key={listKey} className="max-w-xs mx-auto text-black relative">
      <div
        className="flex justify-between cursor-pointer bg-white p-2 group"
        onClick={toggleVisibility}
      >
        Products
        <MdOutlineChevronLeft
          className={`transform duration-200 ${
            isVisible ? "rotate-180" : ""
          } group-hover:rotate-180`}
        />
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col space-y-1 absolute top-0 left-full ml-2"
          >
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="bg-blue-500 p-2 w-52"
            >
              Sub-item 1
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="bg-blue-400 p-2 w-52"
            >
              Sub-item 2
            </motion.li>
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="bg-blue-300 p-2 w-52"
            >
              Sub-item 3
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lists;
