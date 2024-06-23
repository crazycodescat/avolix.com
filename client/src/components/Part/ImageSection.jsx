const ImageSection = ({ products }) => {
  return (
    <div className="flex flex-col gap-8 font-Inter max-w-[250px] min-w-[100px]">
      <img
        src={
          (products &&
            products[0] &&
            products[0].parts &&
            products[0].parts.length > 0 &&
            products[0].parts[0].PhotoUrl !== null &&
            products[0].parts[0].PhotoUrl) ||
          (products &&
            products[1] &&
            products[1].parts &&
            products[1].parts.length > 0 &&
            products[1].parts[0].ImagePath !== '' &&
            products[1].parts[0].ImagePath) ||
          'https://res.cloudinary.com/ddx7todbr/image/upload/v1716801432/electronics%20parts%20selling%20website/eljxbzpf9tzvpqta305v.webp'
        }
        alt=""
      />
      <p className="text-xs text-neutral-400 text-center">
        Image shown is a representation only. Exact specifications should be
        obtained from the product data sheet.
      </p>
    </div>
  );
};

export default ImageSection;
