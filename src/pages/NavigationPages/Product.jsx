import React from "react";
import { Carousel } from "antd";

const products = [
  {
    title: "Plain And Socket Type RCC Pipes",
    description:
      "Suitable for various cross drainage and sewerage applications.",
    imageUrl: "src/assets/pipes/img6.png",
  },
  {
    title: "Reinforced RCC Pipes Various Classes",
    description: "Designed for high-pressure applications and heavy loads.",
    imageUrl: "src/assets/pipes/img6.png",
  },
  {
    title: "Specialized Articles",
    description: `Custom-designed solutions for unique project requirements including Box Culverts, Ready to Install Manhole Chambers, U-Shape drains, etc.`,
    imageUrl: "src/assets/pipes/img6.png",
  },
  {
    title: "U-Shape Drains",
    description: "Top-tier product with premium features.",
    imageUrl: "src/assets/pipes/img6.png",
  },
];

const Product = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 py-16 px-6 md:px-12 text-white">
      {/* Title Section */}
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Our Products</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We offer a comprehensive range of RCC pipes, tailored for various
          applications.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product List */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4"
              >
                <h3 className="text-lg font-bold text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Carousel */}
        <div className="bg-white p-2 rounded-2xl shadow-lg">
          <Carousel autoplay autoplaySpeed={3000} effect="fade">
            {products.map((product, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-72 md:h-110 object-cover rounded-xl"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Product;
