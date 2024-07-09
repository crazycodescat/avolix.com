import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

const SubCategories = ({
  subCategories,
  setShowCategories,
  setShowSubCategories,
}) => {
  const cat_subCategoryToggler = () => {
    setShowCategories(true);
    setShowSubCategories(false);
  };
  console.log(subCategories);
  return (
    <motion.div className="flex flex-col gap-2 mb-12 mt-20 border-y border-dashed border-red-500 border-opacity-50 p-2">
      <div className="flex flex-col gap-2">
        <div className="flex justify-end px-4">
          <button
            onClick={cat_subCategoryToggler}
            className="flex justify-center items-center w-8 h-8 bg-black rounded-full"
          >
            <IoClose className="text-primary01 text-5xl" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 justify-between w-full">
        <motion.div
          initial={{ y: -100, x: -100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1, transition: { duration: 1 } }}
          className="min-w-[100px] max-w-[200px]"
        >
          <img src={subCategories[0].imageUrl} />
        </motion.div>
        <span className="mt-6">{subCategories[0].Name}</span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 h-fit w-full">
          {subCategories[0].Children.map((subCategory, idx) => {
            return (
              <>
                <motion.div
                  key={subCategory.CategoryId} // Ensure each item has a unique key
                  initial={{ y: -50, x: -50, opacity: 0 }}
                  animate={{
                    y: 0,
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: idx * 0.1 },
                  }}
                  exit={{
                    y: -50,
                    x: -50,
                    opacity: 0,
                    transition: { duration: 0.5, delay: idx * 0.02 },
                  }}
                  viewport={{ once: true }}
                  className="min-w-[200px] w-full animated_div flex flex-col gap-2 justify-center items-center px-2 py-2 ring-1 ring-primary01 hover:shadow-md transition-shadow duration-200 hover:shadow-primary01 cursor-pointer"
                >
                  <h4 className="text-xs text-center">{subCategory.Name}</h4>
                  <p className="text-[8px] text-center">
                    {subCategory.ProductCount}
                  </p>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default SubCategories;
