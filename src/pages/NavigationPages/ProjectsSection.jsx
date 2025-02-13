import React from "react";
import { Card } from "antd";
import { FaWater, FaHardHat, FaRoad } from "react-icons/fa";

const projects = [
  {
    title: "Irrigation Canal Construction in Nashik",
    description:
      "Successfully installed 3.014 km RCC pipelines to improve water distribution.",
    image: "https://source.unsplash.com/500x300/?construction,pipe",
    icon: <FaWater />,
  },
  {
    title: "RCC Pipeline Installation for Water Management",
    description:
      "Implemented high-efficiency water supply networks for industrial clients.",
    image: "https://source.unsplash.com/500x300/?water,pipeline",
    icon: <FaHardHat />,
  },
  {
    title: "Government Collaboration for Rural Infrastructure",
    description:
      "Partnering with state authorities to develop sustainable drainage systems.",
    image: "https://source.unsplash.com/500x300/?infrastructure,drainage",
    icon: <FaRoad />,
  },
];

const ProjectsSection = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 py-16 px-6 md:px-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Latest Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            hoverable
            className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 relative"
          >
            {/* Image Section with Overlay */}
            <div className="relative">
              <img
                alt={project.title}
                src={project.image}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className=" inset-0 bg-[#f4f4f4] p-4 rounded-xl flex justify-center items-center">
              {/* Icon */}
              <div className="text-white text-3xl border border-white rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-white hover:text-[#FFC107] w-16 h-16">
                {project.icon}
              </div>{" "}
            </div>
            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>

              {/* Custom High-Contrast Gradient Button */}
              <button className="mt-4 w-full py-2 rounded-lg text-gray-900 font-semibold bg-gradient-to-r from-blue-500 via-300 to-blue-200 transition-all duration-300 hover:shadow-lg hover:opacity-90">
                Read More
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
