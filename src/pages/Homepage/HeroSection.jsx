import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [background, setBackground] = useState(
    "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  useEffect(() => {
    // Simulating dynamic background change
    const images = [
      "https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackground(randomImage);
  }, []);

  return (
    <div className="relative mt-20 w-full h-[500px] md:h-[700px] flex items-center justify-center text-white">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-98 blur-md"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/100"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide">
          SUVIAM INFRA{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            PRIVATE LIMITED
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-300">
          Welcome to Suviam, a leading name in construction and manufacturing.
          We specialize in delivering innovative solutions for irrigation
          projects and producing high-quality RCC pipes and cement articles.
        </p>

        {/* Download Button */}
        <div className="mt-8">
          <a
            href="/assets/Suviam_Infra_Company_Profile.pdf"
            download="Suviam_Profile.pdf"
            className="bg-gradient-to-r from-blue-400 to-blue-600 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            DOWNLOAD PROFILE
          </a>
        </div>
      </div>

      {/* Video Section */}
    </div>
  );
};

export default HeroSection;
