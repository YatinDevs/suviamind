import React, { useState } from "react";
import { Card, Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: "https://hub.countymaterials.com/news/16-reasons-to-choose-reinforced-concrete-pipes-for-storm-water-management",
    title: "How RCC Pipes are Revolutionizing Water Management",
    category: "Infrastructure",
    date: "5 Sep",
    author: "Admin",
    content:
      "RCC pipes are transforming water management by providing durability, strength, and cost-effectiveness for large-scale projects.",
    imageUrl: "src/assets/pipes/img1.png",
  },
  {
    id: "https://www.investindia.gov.in/team-india-blogs/infrastructure-development-india",
    title: "The Future of Infrastructure Development in India",
    category: "Development",
    date: "5 Sep",
    author: "Admin",
    content:
      "With rapid urbanization, India's infrastructure sector is evolving with smart cities, sustainable construction, and modern RCC technologies.",
    imageUrl: "src/assets/pipes/img2.png",
  },
  {
    id: "https://hub.countymaterials.com/news/16-reasons-to-choose-reinforced-concrete-pipes-for-storm-water-management",
    title: "Why Quality Matters: Choosing the Best RCC Pipes for Your Project",
    category: "Construction",
    date: "5 Sep",
    author: "Admin",
    content:
      "Selecting high-quality RCC pipes ensures long-term performance, safety, and compliance with industry standards.",
    imageUrl: "src/assets/pipes/img3.png",
  },
];

const itemsPerPage = 3;

function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-25 p-6 sm:p-10 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
        Latest Blog Updates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map((blog, index) => (
          <Card
            key={blog?.index}
            hoverable
            cover={
              <img
                alt={blog.title}
                src={blog.imageUrl}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            }
            className="shadow-lg rounded-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-sm text-gray-500">
                {blog.date} | {blog.category} | By {blog.author}
              </p>
            </div>
            <a
              href={blog.id}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-blue-300 to-blue-500 
             !text-white py-2 px-4 w-full rounded-md font-semibold 
             hover:from-purple-500 hover:to-blue-500 
             transition-all text-center block"
            >
              Read More
            </a>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          total={blogData.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Blog;
