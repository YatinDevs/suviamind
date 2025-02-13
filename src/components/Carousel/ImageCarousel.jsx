import React from "react";
import { useState } from "react";

// Image Carousel Component
const ImageCarousel = () => {
  // Sample images for the carousel
  const images = [
    "https://via.placeholder.com/600x400/FF5733/fff?text=Image+1",
    "https://via.placeholder.com/600x400/33FF57/fff?text=Image+2",
    "https://via.placeholder.com/600x400/3357FF/fff?text=Image+3",
    "https://via.placeholder.com/600x400/FF33A1/fff?text=Image+4",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next image
  const nextImage = () => {
    ``;
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto mt-12">
      {/* Image */}
      <img
        src="/src/assets/pipe.png"
        alt={`Carousel ${currentIndex}`}
        className="w-full h-auto rounded-lg"
      />

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &#8594;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
