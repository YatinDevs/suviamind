import React from "react";
import video3 from "../../assets/video3.mp4"; // Ensure correct path

function VideoSection() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center mt-20 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
        Experience Innovation in Action
      </h2>
      <p className="text-gray-600 mb-6 md:text-lg max-w-2xl">
        Watch how we bring groundbreaking projects to life with cutting-edge
        technology.
      </p>

      {/* Video Container with Controls */}
      <div className="relative w-full max-w-4xl">
        <video
          autoPlay
          loop
          muted
          controls
          className="w-full h-auto rounded-lg shadow-lg"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoSection;
