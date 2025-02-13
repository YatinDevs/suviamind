import React from "react";
import { useState } from "react";
import { Collapse } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const { Panel } = Collapse;

const faqData = [
  {
    question: "What is SUVIAM INFRA PRIVATE LIMITED?",
    answer:
      "SUVIAM INFRA PRIVATE LIMITED is a leading manufacturer of Reinforced Cement Concrete (RCC) pipes and a construction company specializing in irrigation projects. Established in 2023, the company is dedicated to delivering high-quality products and services.",
  },
  {
    question: "What products does SUVIAM offer?",
    answer:
      "We offer a comprehensive range of RCC pipes, including plain and socket type pipes, reinforced pipes for high-pressure applications (NP3 and NP4 classes), and custom-designed precast cement articles.",
  },
  {
    question: "What industries does SUVIAM serve?",
    answer:
      "We serve government agencies, construction firms, and civil engineering contractors, primarily across the North Maharashtra region.",
  },
  {
    question: "What makes SUVIAM unique in the market?",
    answer:
      "SUVIAM is one of the few private limited companies that manufactures RCC pipes and consumes them in-house for construction projects. This provides a competitive advantage in project efficiency and cost management.",
  },
  {
    question: "What is SUVIAM's commitment to sustainability?",
    answer:
      "We prioritize eco-friendly manufacturing practices and produce RCC pipes designed to minimize environmental impact while maximizing performance and longevity.",
  },
  {
    question: "How can I contact SUVIAM INFRA PRIVATE LIMITED?",
    answer:
      "You can reach us at Gat No. 211, At post: Savaki(Lo), Tal-Deola, Dist-Nashik, or call us at 9403455116 / 9403455280. You can also email us at suviaminfra@gmail.com.",
  },
];

const AccordianItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 w-full text-xs md:text-lg">
      <button
        className="w-full flex cursor-pointer justify-between items-center text-left p-4 bg-gray-600 text-white font-medium hover:bg-gray-800 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 text-[#fff]">{faq.answer}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <section
      className=" py-10 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-700
"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3
          className="font-palanquin text-center text-[#fff] text-xl 
         md:text-4xl font-bold p-6"
        >
          Frequently{" "}
          <span className="mr-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {" "}
            Asked{" "}
          </span>{" "}
          Questions
        </h3>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <AccordianItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
