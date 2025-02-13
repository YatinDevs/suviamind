import { CheckCircle2 } from "lucide-react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const coreServices = [
  {
    title: "RCC Pipe Manufacturing",
    description:
      "High-quality NP3 & NP4 class RCC pipes for irrigation, drainage, and sewerage applications.",
  },
  {
    title: "Infrastructure Development",
    description:
      "Expertise in canal construction, RCC pipeline installations, and large-scale construction projects.",
  },
  {
    title: "Sustainable & Innovative Solutions",
    description:
      "Eco-friendly, cost-effective, and future-ready engineering solutions.",
  },
];

const CoreServices = () => {
  return (
    <ContentWrapper>
      <div className="mt-20 text-gray-700">
        <h3 className="font-palanquin text-center text-4xl font-bold ">
          Our
          <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Core
          </span>
          Services
        </h3>
        <div className="flex flex-col">
          {coreServices.map((service, index) => (
            <div key={index} className="w-full  p-4">
              <div className="p-6 shadow-md border-neutral-700 rounded-xl text-center">
                <CheckCircle2 className="text-orange-500 w-10 h-10 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CoreServices;
