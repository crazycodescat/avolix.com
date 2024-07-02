import { Link } from "react-router-dom"; // Import Link from react-router-dom

const GridItem = ({ imageUrl, altText, heading, description, to }) => {
  return (
    <Link to={to} className="group relative overflow-hidden shadow-md block">
      <div>
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transition duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black/50 group-hover:opacity-100 transition duration-300 ease-in-out">
          {/* Vignette */}
        </div>
        <div className="absolute bottom-0 p-2 text-black group-hover:text-gray-800 transition duration-300 ease-in-out w-full bg-white">
          <h3 className="font-bold text-lg">{heading}</h3>
          {/* Added text-sm class */}
          <p className=" font-light text-xs">{description}</p>
          {/* Already has text-sm class */}
        </div>
      </div>
    </Link>
  );
};

const Grid = ({ items }) => {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      {/* Your grid component here */}
      <div className="grid grid-cols-3">
        {items.map((item) => (
          <GridItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
