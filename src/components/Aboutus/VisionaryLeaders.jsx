import React from "react";

const VisionaryLeaders = ({ leadersData }) => {
  return (
    <div className="bg-gray-100 rounded-xl py-16 px-4 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text mb-12">
          Visionary Leaders
        </h1>

        {/* Leaders Grid */}
        <div className="flex justify-center items-center flex-wrap gap-6 ">
          {leadersData.map((leader, index) => (
            <div
              key={index}
              className="bg-white w-96 h-72 rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-95 hover:shadow-md"
            >
              {/* Leader Image */}
              <img
                alt={leader.name}
                src={leader.image}
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-500"
              />

              {/* Leader Name & Icon */}
              <div className="flex items-center justify-center mb-2">
                {leader.icon}
                <h2 className="text-xl font-semibold ml-2 text-gray-800">
                  {leader.name}
                </h2>
              </div>

              {/* Title */}
              <p className="text-sm text-gray-500 mb-2">{leader.title}</p>

              {/* Description */}
              <p className="text-md text-gray-700">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionaryLeaders;
