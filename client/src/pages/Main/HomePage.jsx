import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lists from '../../components/Home/Lists';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid';
import VerticalList from '../../components/VerticalList';
import { useAccessToken } from '../../hooks/useAccessToken';
import { IoSearch } from 'react-icons/io5';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Categories from '../../components/Home/Categories';

const HomePage = () => {
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
  const [isVisible, setIsVisible] = useState(false);
  const { accessToken } = useAccessToken();
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const listArr = [
    {
      name: 'list1',
    },
    {
      name: 'list1',
    },
    {
      name: 'list1',
    },
    {
      name: 'list1',
    },
    {
      name: 'list1',
    },
  ];

  const items = [
    {
      img: 'https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      heading: 'High-Quality Electronic Components',
      description:
        'Top-tier components from leading distributors for hobbyists and professionals.',
    },
    {
      img: 'https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      heading: 'Trusted Distributors, Reliable Parts',
      description:
        'Reliable parts from trusted distributors with rigorous quality checks.',
    },
    {
      img: 'https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      heading: 'Comprehensive Inventory for Every Need',
      description:
        'Extensive inventory covering all electronic component needs.',
    },
    {
      img: 'https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      heading: 'Fast Shipping and Excellent Support',
      description:
        'Fast shipping with dedicated support for a smooth shopping experience.',
    },
    {
      img: 'https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      heading: 'Competitive Prices and Special Offers',
      description:
        'Competitive prices with special offers for high-quality parts.',
    },
    {
      img: 'https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      heading: 'Expert Advice and Detailed Resources',
      description:
        'Expert advice and resources for informed component selection.',
    },
  ];

  const listItems = [
    { label: 'Item 1', subItems: ['Sub-item 1.1', 'Sub-item 1.2'] },
    {
      label: 'Item 2',
      subItems: ['Sub-item 3.1', 'Sub-item 3.2', 'Sub-item 3.3'],
    },
    {
      label: 'Item 3',
      subItems: ['Sub-item 3.1', 'Sub-item 4.2', 'Sub-item 4.3'],
    },
  ];
  return (
    <>
      <div className="h-screen font-Merriweather flex flex-col gap-20 mt-12">
        <div className="flex flex-col gap-4 items-center p-3 max-w-[400px] mx-auto">
          <div className="">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.4 },
              }}
              className="text-2xl text-center md:text-3xl xl:text-4xl"
            >
              One Stop shop for all components
            </motion.h1>
          </div>
          <div className="">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.4 },
              }}
              className="text-xs font-thin text-center"
            >
              Find A Gigantic collection of the electronic components you need,
              delivered fast, with AVOLIX.
            </motion.p>
          </div>
        </div>

        <div className="font-Inter flex flex-col gap-2 items-center justify-center">
          <form onSubmit={submitPartNumber}>
            <div className="flex justify-between h-10">
              <input
                ref={ref}
                type="search"
                className="w-full text-xs text-black rounded-l-lg px-3 placeholder:text-[10px] focus:outline-none"
                placeholder="Enter mfr. Part Number"
                name="part number"
                id=""
              />
              <button
                className="flex justify-center rounded-r-lg items-center bg-primary01 p-4"
                type="submit"
              >
                <IoSearch className="text-black text-xl" />
              </button>
            </div>
          </form>
          <p className="text-[10px] font-Merriweather font-extralight">
            10M+ Available stocks
          </p>
          {enterPartNumber && (
            <div className="">
              <p className="text-xs text-white font-semibold uppercase underline">
                Enter Part Number
              </p>
            </div>
          )}
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
            {enterPartNumber && (
              <div className="">
                <p className="text-base text-red-600 font-semibold uppercase underline">
                  Enter Part Number
                </p>
              </div>
            )}
          </div>
        </div> */}

        {/* fast tracking parts */}
        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-xl max-w-[200px]">Fast-tracking parts</h1>
            <p className="text-xs font-extralight max-w-[140px] text-center">
              Your urgent source for scarce components
            </p>
          </div>
          <div className="max-w-[50px] mx-auto flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/ddx7todbr/image/upload/v1719936951/electronics%20parts%20selling%20website/inaeigq7jlttg3eymvzj.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/ddx7todbr/image/upload/v1719936951/electronics%20parts%20selling%20website/fksgt4t7zhrjlfogghuo.svg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/ddx7todbr/image/upload/v1719936951/electronics%20parts%20selling%20website/sg0zdiwwttmbwcjasl6n.svg"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <div className="max-w-[600px] mx-auto">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.4 },
              }}
              viewport={{ once: true }}
              className="text-xl text-center md:text-2xl xl:text-4xl"
            >
              Browse Electronic Parts by Category
            </motion.h1>
          </div>
          <Categories />
        </div>
      </div>
    </>
  );
};

export default HomePage;
