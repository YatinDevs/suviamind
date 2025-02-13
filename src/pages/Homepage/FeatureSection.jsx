import {
  MdOutlineHighQuality,
  MdOutlineFactory,
  MdOutlineAccessTime,
  MdOutlineEco,
  MdVerified,
  MdEngineering,
} from "react-icons/md";
import { FaRegHandshake, FaTruckMoving } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const features = [
  {
    icon: <MdOutlineHighQuality />,
    text: "10+ Years of Expertise",
    description:
      "A decade of delivering high-quality infrastructure solutions with excellence and reliability.",
  },
  {
    icon: <MdOutlineFactory />,
    text: "State-of-the-Art Manufacturing",
    description:
      "Ensuring precision, compliance, and high standards with cutting-edge facilities.",
  },
  {
    icon: <MdOutlineAccessTime />,
    text: "On-Time & Cost-Effective Delivery",
    description:
      "Meeting deadlines efficiently while maintaining top-tier quality.",
  },
  {
    icon: <MdOutlineEco />,
    text: "Sustainability & Innovation",
    description:
      "Using advanced technology and eco-friendly materials for a greener future.",
  },
  {
    icon: <FaRegHandshake />,
    text: "Trusted by Government & Private Clients",
    description:
      "Successfully executing projects across various industries with integrity.",
  },
  {
    icon: <MdVerified />,
    text: "Certified & Compliant",
    description:
      "Adhering to industry regulations and safety standards for every project.",
  },
  {
    icon: <MdEngineering />,
    text: "Expert Engineering Team",
    description:
      "A highly skilled workforce dedicated to delivering superior infrastructure solutions.",
  },
  {
    icon: <RiBuilding2Line />,
    text: "Robust Infrastructure Solutions",
    description:
      "Providing durable and long-lasting infrastructure to meet the toughest challenges.",
  },
  {
    icon: <FaTruckMoving />,
    text: "Seamless Logistics Support",
    description:
      "Efficient supply chain and logistics ensuring smooth project execution.",
  },
];

const FeatureSection = () => {
  return (
    <div className="relative my-20 min-h-[700px] text-gray-700">
      <ContentWrapper>
        <div className="text-center">
          <h3 className="font-palanquin text-center text-4xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Suviam Infra ?
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-6 mt-10 lg:mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full shadow-md px-6 rounded-2xl py-6 active:scale-95"
            >
              <div className="flex flex-col justify-center items-center text-center">
                <div className="text-[#00afe9] text-3xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                  {feature.icon}
                </div>
                <h5 className="mt-3 mb-2 text-lg font-semibold">
                  {feature.text}
                </h5>
                <p className="text-sm text-neutral-600 px-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default FeatureSection;
