import { useState, useRef } from "react";

const ListItem = ({ label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(null);

  const handleHover = () => setIsOpen(true);
  const handleLeave = (e) => {
    // Check if mouse leaves the button or sub-list itself
    if (!listRef.current || !listRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="group" onMouseLeave={handleLeave}>
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-left focus:ring-offset-2 bg-white text-black focus:ring-blue-500"
        onMouseEnter={handleHover}
      >
        <span>{label}</span>
        {subItems && (
          <svg
            className="h-5 w-5 transition transform duration-300 group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        )}
      </button>
      {subItems && (
        <ul
          className={`transition duration-300 ease-in-out ${
            isOpen ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          } transform origin-top`}
          ref={listRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {subItems.map((item) => (
            <li key={item} className="px-4 py-2 text-sm ">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const VerticalList = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <ListItem
          key={item.label}
          label={item.label}
          subItems={item.subItems}
        />
      ))}
    </div>
  );
};

export default VerticalList;
