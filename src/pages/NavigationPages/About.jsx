import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { FaRegBuilding } from "react-icons/fa";
import { SiRenovate } from "react-icons/si";
import { FaPersonDigging } from "react-icons/fa6";
import { AiOutlinePicture } from "react-icons/ai";
import { Crown, Lightbulb, Globe, Users } from "lucide-react";

import VisionaryLeaders from "../../components/Aboutus/VisionaryLeaders";

// Sample images for the slider
const sliderImages = [
  "src/assets/pipes/img1.png",
  "src/assets/pipes/img2.png",
  "src/assets/pipes/img3.png",
];
const AboutUs = {
  title: "Suviam",
  description: "Learn more about our company.",
  companyInfo: {
    title: "About Us",
    description_para1:
      "SUVIAM INFRA PRIVATE LIMITED is a leading construction company specializing in irrigation projects that enhance water management through canals and dams.",
    description_para2:
      "Established in 2023, we have built a strong reputation for delivering innovative and sustainable solutions tailored to meet the unique needs of our clients (Water Resource Department, Govt. of Maharashtra).",
  },
  productRange: {
    title: "Product Range",
    description: "We offer a comprehensive range of RCC pipes, including:",
    products: [
      {
        title: "Plain And Socket Type RCC Pipes",
        description:
          "Suitable for various cross drainage and sewerage applications.",
      },
      {
        title: "Reinforced RCC Pipes (NP3 & NP4 Class)",
        description: "Designed for high-pressure applications and heavy loads.",
      },
    ],
  },
};
const iconData = [
  {
    icon: <FaRegBuilding />,
    text: "Manufacturing high-quality NP3 & NP4 class RCC pipes for irrigation, drainage, and sewerage applications.",
  },
  {
    icon: <SiRenovate />,
    text: "Expertise in canal construction, RCC pipeline installations, and large-scale infrastructure projects.",
  },
  {
    icon: <FaPersonDigging />,
    text: "Providing sustainable, cost-effective, and innovative engineering solutions.",
  },
  {
    icon: <AiOutlinePicture />,
    text: "Trusted partner for government and private sector projects across multiple industries.",
  },
];

const leadersData = [
  {
    name: "Punam Jagdish Marathe",
    title: "Directors",
    icon: <Crown className="w-10 h-10 text-blue-500" />,
    image: "https://via.placeholder.com/150",
    description:
      "Punam leads Suviam with strategic vision, ensuring long-term growth and innovation.",
  },
  {
    name: "Priyanka Mukund Kale",
    title: "Directors",
    icon: <Lightbulb className="w-10 h-10 text-blue-500" />,
    image: "https://via.placeholder.com/150",
    description:
      "Priyanka drives Suviam’s creative initiatives, crafting innovative solutions and brand storytelling.",
  },
  {
    name: "Ajinkya Prakash Patil",
    title: "CEO",
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    image: "https://via.placeholder.com/150",
    description:
      "Ajinkya steers Suviam’s operations and strategy, ensuring sustainable business growth.",
  },
  {
    name: "Mayur Prakash Patil",
    title: "Technical and Accounts Advisor",
    icon: <Users className="w-10 h-10 text-blue-500" />,
    image: "https://via.placeholder.com/150",
    description:
      "Mayur oversees technical and financial strategies, ensuring efficiency and accuracy.",
  },
  {
    name: "Lalchand Shankar Pawar",
    title: "Manager",
    icon: <Users className="w-10 h-10 text-blue-500" />,
    image: "https://via.placeholder.com/150",
    description:
      "Lalchand ensures seamless daily operations, managing resources and team performance.",
  },
];
function About() {
  return (
    <div className="mt-30 flex flex-col lg:flex-col justify-center items-center p-8 rounded-2xl">
      {/* Image Section */}
      <div className="max-w-[1440px] flex flex-col lg:flex-row justify-center items-center">
        {/* Image Slider */}
        {/* Image Slider */}
        <div className="flex-1 p-2 flex justify-center items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true} // Enables infinite looping
            autoplay={{
              delay: 2000, // Time between transitions (in milliseconds)
              disableOnInteraction: false, // Keeps autoplay running after user interaction
            }}
            speed={1000} // Speed of slide transition
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full  md:h-[400px]"
          >
            {sliderImages.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="rounded-xl shadow-lg h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* About Us Content */}
        <div className="flex-1 w-full">
          <h1 className="text-3xl text-blue-600 font-bold text-center mb-6">
            About Us
          </h1>
          <div className="text-md mt-2 p-2 text-gray-700">
            {AboutUs?.companyInfo?.description_para1}
          </div>
          <div className="text-md p-2 text-gray-700">
            {AboutUs?.companyInfo?.description_para2}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {iconData.map((item, index) => (
              <div
                key={index}
                className="shadow-md py-8 p-4 rounded-lg flex items-center"
              >
                <div className="text-[#00afe9] text-3xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 mr-4 transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                  {item.icon}
                </div>
                <div className="text-md text-gray-700">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visionary Leaders Section */}
      <div className="mt-20">
        <VisionaryLeaders leadersData={leadersData} />
      </div>
    </div>
  );
}

export default About;
