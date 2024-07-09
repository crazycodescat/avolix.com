import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/scrollbar.css';
import '../../styles/categorycard.css';
import SubCategories from './SubCategories.jsx';
import images from '../../../categoryImages.js';

// HOOKS
import useFetch from '../../hooks/useFetch.jsx';
import { useAccessToken } from '../../hooks/useAccessToken.jsx';

const addImagesToCategories = (categoriesData) => {
  const catWithImages = categoriesData.Categories.map((category, idx) => {
    return { ...category, imageUrl: images[idx] };
  });
  return catWithImages;
};

const Categories = () => {
  const { accessToken } = useAccessToken();
  const { loading, fetch, error, setLoading } = useFetch();
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const subCategorieFilter = (catId) => {
    const subCategoriesData = categories.filter((cat) => {
      return cat.CategoryId === catId
        ? [...cat.Children, { catName: cat.Name, imageUrl: cat.imageUrl }]
        : null;
    });

    console.log(subCategoriesData)

    // const imageAddedSubCat = [
    //   ...subCategoriesData,
    //   {
    //     imageUrl:
    //       'https://res.cloudinary.com/ddx7todbr/image/upload/v1720357450/Electronics%20Parts%20Listing%20Website/categories/tnxqjrnnlwtqa6dr2spg.webp',
    //   },
    // ];
    setSubCategories(subCategoriesData);
    setShowCategories(false);
    setShowSubCategories(true);
  };

  useEffect(() => {
    setLoading(true);
    setShowSubCategories(false);
    setShowCategories(false);
    const loadCategories = async () => {
      const config = {
        url: import.meta.env.VITE_DIGIKEY_CATEGORIES,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'X-DIGIKEY-Client-Id': import.meta.env.VITE_DIGIKEY_PROD_CLIENT_ID,
        },
      };

      if (accessToken) {
        try {
          const res = await fetch(config);
          if (res.status === 200) {
            const categoryWithImages = addImagesToCategories(res.data);
            console.log(categoryWithImages);
            setCategories(categoryWithImages);
            setShowCategories(true);
          }
          setLoading(false);
        } catch (error) {
          console.error(error.message);
        }
      }
    };

    loadCategories();
  }, [accessToken]);

  return (
    <div>
      {loading && (
        <div className="mt-8 flex flex-col items-center gap-3 w-full h-full">
          <p className="text-xs text-center max-w-[600px]">
            Carefully curated categories universally utilized by industry
            professionals provide deeper insights into identifying your precise
            electronic component requirements.
          </p>
          <div className="flex gap-3">
            <span className="animate-class1 w-[10px] h-[10px] bg-primary01 rounded-full motion-safe:animate-bounce"></span>
            <span className="animate-class2 w-[10px] h-[10px] bg-primary01 rounded-full motion-safe:animate-bounce"></span>
            <span className="animate-class3 w-[10px] h-[10px] bg-primary01 rounded-full motion-safe:animate-bounce"></span>
          </div>
        </div>
      )}
      {showSubCategories && (
        <SubCategories
          setShowCategories={setShowCategories}
          setShowSubCategories={setShowSubCategories}
          subCategories={subCategories}
        />
      )}
      {showCategories && (
        <div
          className={`grid  grid-cols-2 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto my-6 px-4 overflow-y-scroll h-96 py-2  border-y border-dashed border-red-500 border-opacity-50 p-2 `}
        >
          <AnimatePresence>
            {showCategories &&
              categories.length > 0 &&
              categories.map((cat, idx) => (
                <motion.div
                  key={cat.CategoryId} // Ensure each item has a unique key
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
                  onClick={() => subCategorieFilter(cat.CategoryId)}
                  // onHoverEnd={setShowCategories((prev) => !prev)}
                  className="animated_div flex flex-col gap-2 items-center px-2 py-2 ring-1 ring-primary01 hover:shadow-md transition-shadow duration-200 hover:shadow-primary01 cursor-pointer"
                >
                  <h4 className="text-xs text-center">{cat.Name}</h4>
                  <p className="text-[8px] text-center">{cat.ProductCount}</p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Categories;
