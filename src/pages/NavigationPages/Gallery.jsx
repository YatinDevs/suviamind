import React from "react";

const PipeGallery = () => {
  const images = [
    {
      src: "src/assets/pipes/img1.png",
      alt: "Installation Process",
      description: "Installation of RCC Pipes at Site",
    },
    {
      src: "src/assets/pipes/img2.png",
      alt: "Canal Sectioning",
      description: "Precision Canal Sectioning with RCC Pipes",
    },
    {
      src: "src/assets/pipes/img3.png",
      alt: "Quality Check",
      description: "Rigorous Quality Checks on Pipes",
    },
    {
      src: "src/assets/pipes/img4.png",
      alt: "Pipe Storage",
      description: "Storage and Handling of RCC Pipes",
    },
    {
      src: "src/assets/pipes/img5.png",
      alt: "Pipe Manufacturing",
      description: "High-Quality RCC Pipe Manufacturing Process",
    },
    {
      src: "src/assets/pipes/img6.png",
      alt: "Pipe Transportation",
      description: "Safe and Efficient Transportation of Pipes",
    },
  ];

  return (
    <div className="mt-30 bg-gray-100 p-8">
      <h1 className="text-4xl text-blue-700 font-bold text-center mb-6">
        RCC Pipe Gallery
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover the different stages of RCC pipe manufacturing, installation,
        and usage. Our gallery showcases the expertise and precision in our
        pipeline solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white shadow-xs rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipeGallery;
