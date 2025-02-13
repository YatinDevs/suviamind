import React from "react";
import { Input, Button, Form, Card } from "antd";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const contactDetails = [
    {
      icon: <PhoneOutlined className="text-blue-600 text-2xl mr-4" />,
      info: "+91 9403455116",
    },
    {
      icon: <MailOutlined className="text-blue-600 text-2xl mr-4" />,
      info: "suviaminfra@gmail.com",
    },
    {
      icon: <EnvironmentOutlined className="text-blue-600 text-2xl mr-4" />,
      info: "Gat No. 211, At post: Savaki(Lo), Tal-Deola, Dist-Nashik.",
    },
  ];

  const navbarData = { caEmailid: "demo@gmail.com" };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 mt-30">
      <div className="p-4 md:p-8 w-full">
        <h1 className="text-3xl text-blue-600 font-bold text-center mb-6">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Location and Contact Details */}
          <div className="flex flex-col w-full">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
              <div className="w-full">
                <iframe
                  title="Google Map"
                  className="w-full h-72 text-2xl rounded-md border border-gray-300 shadow-sm"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.679075699913!2d-0.13307128395952705!3d51.51185047963559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2974982f4d%3A0x4b31dfb22f8fc8b1!2s62%20Dean%20St%2C%20London%20W1D%204QF%2C%20UK!5e0!3m2!1sen!2sus!4v1637930634813!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              {/* Dynamic Contact Details */}
              <div className="grid gap-4 w-full">
                {contactDetails.map((detail, index) => (
                  <Card key={index} className="shadow-md flex items-center p-4">
                    {detail.icon}
                    <span>{detail.info}</span>
                  </Card>
                ))}
              </div>
            </div>
            <br />

            <div className="w-full bg-blue-400 flex flex-col gap-3 justify-center items-start text-xs md:flex-row md:justify-around md:items-center p-2 py-4 rounded-2xl text-transparent bg-clip-text">
              <div className="flex space-x-4 ">
                <div className="text-[#00afe9] text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                  <IoCallOutline />
                </div>
                <div>
                  <p className="text-[#274584] text-md md:text-lg">
                    Call Us On
                  </p>
                  <p className="text-gray-700">9403455116 | 9403455280</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="text-[#00afe9] text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                  <TfiEmail />
                </div>
                <div>
                  <p className="text-[#274584] text-md md:text-lg">
                    Leave a message
                  </p>
                  <p className="text-gray-700">{navbarData?.caEmailid}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <Card className="shadow-md">
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: "Please enter your message!" },
                  ]}
                >
                  <TextArea rows={4} placeholder="Write your message here..." />
                </Form.Item>

                <div className="flex justify-between">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="reset" danger>
                    Reset
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
