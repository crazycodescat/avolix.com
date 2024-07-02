import { useState } from "react";
import Lists from "../../components/Home/Lists";
import Carousel from "../../components/Carousel";
import Grid from "../../components/Grid";
import VerticalList from "../../components/VerticalList";
import { useAccessToken } from "../../hooks/useAccessToken";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { accessToken } = useAccessToken();
  console.log(accessToken);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const listArr = [
    {
      name: "list1",
    },
    {
      name: "list1",
    },
    {
      name: "list1",
    },
    {
      name: "list1",
    },
    {
      name: "list1",
    },
  ];

  // const items = [
  //   {
  //     id: "1",
  //     imageUrl:
  //       "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/1244/AFP0RE16RS.jpg",
  //     altText: "altText",
  //     heading: "Automation & Control",
  //     description:
  //       "Description Description Description Description Description Description Description Description",
  //     to: "/details/1", // Link to a specific detail page
  //   },
  //   {
  //     id: "2",
  //     imageUrl:
  //       "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     altText: "altText",
  //     heading: "Cables, Wires",
  //     description:
  //       "Description Description Description Description Description Description Description Description",
  //     to: "/details/1", // Link to a specific detail page
  //   },
  //   {
  //     id: "3",
  //     imageUrl:
  //       "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     altText: "altText",
  //     heading: "Connectors",
  //     description:
  //       "Description Description Description Description Description Description Description Description",
  //     to: "/details/1", // Link to a specific detail page
  //   },
  //   {
  //     id: "4",
  //     imageUrl:
  //       "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     altText: "altText",
  //     heading: "Enclosures, Hardware, Office",
  //     description:
  //       "Description Description Description Description Description Description Description Description",
  //     to: "/details/1", // Link to a specific detail page
  //   },
  //   {
  //     id: "5",
  //     imageUrl:
  //       "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     altText: "altText",
  //     heading: "Resonators",
  //     description:
  //       "Description Description Description Description Description Description Description Description",
  //     to: "/details/1", // Link to a specific detail page
  //   },
  //   {
  //     id: "6",
  //     imageUrl:
  //       "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     altText: "altText",
  //     heading: "Heading",
  //     description:
  //       "Description Description Description Description Description Description Description Description",
  //     to: "/details/1", // Link to a specific detail page
  //   },
  // ];
  const items = [
    {
      img: "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "High-Quality Electronic Components",
      description:
        "Top-tier components from leading distributors for hobbyists and professionals.",
    },
    {
      img: "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Trusted Distributors, Reliable Parts",
      description:
        "Reliable parts from trusted distributors with rigorous quality checks.",
    },
    {
      img: "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Comprehensive Inventory for Every Need",
      description:
        "Extensive inventory covering all electronic component needs.",
    },
    {
      img: "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Fast Shipping and Excellent Support",
      description:
        "Fast shipping with dedicated support for a smooth shopping experience.",
    },
    {
      img: "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Competitive Prices and Special Offers",
      description:
        "Competitive prices with special offers for high-quality parts.",
    },
    {
      img: "https://images.pexels.com/photos/2136243/pexels-photo-2136243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Expert Advice and Detailed Resources",
      description:
        "Expert advice and resources for informed component selection.",
    },
  ];

  const listItems = [
    { label: "Item 1", subItems: ["Sub-item 1.1", "Sub-item 1.2"] },
    {
      label: "Item 2",
      subItems: ["Sub-item 3.1", "Sub-item 3.2", "Sub-item 3.3"],
    },
    {
      label: "Item 3",
      subItems: ["Sub-item 3.1", "Sub-item 4.2", "Sub-item 4.3"],
    },
  ];
  return (
    <>
      <div className="p-4">
        <Carousel items={items} navButtons={false} />
      </div>
    </>
  );
};

export default HomePage;
