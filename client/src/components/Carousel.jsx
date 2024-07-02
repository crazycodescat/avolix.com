import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "../index.css"; // Import the CSS file

const Carousel = ({ items, navButtons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={item.img}
                className="carousel-image"
                alt={item.heading}
              />
              <div className="carousel-overlay">
                <div className="carousel-heading&DescriptionWrapper">
                  <h1 className="carousel-heading">{item.heading}</h1>
                  <p className="carousel-description">{item.description}</p>
                </div>
                <button className="carousel-overlay-button">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {navButtons ? (
        <>
          <button
            className="carousel-button carousel-button-left"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="carousel-button carousel-button-right"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        </>
      ) : null}

      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              currentIndex === index
                ? "carousel-dot-active"
                : "carousel-dot-inactive"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
