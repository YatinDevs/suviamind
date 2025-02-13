import React, { useState } from "react";
import { Card, Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "How To Get People To Like Industry.",
    category: "Business",
    date: "26 April",
    author: "John Doe",
    content:
      "This blog provides insights on engaging with people in the industrial sector.",
    imageUrl: "src/assets/pipes/img1.png",
  },
  {
    id: 2,
    title: "Why You Should Not Go To Industry.",
    category: "Business",
    date: "26 April",
    author: "John Doe",
    content:
      "Discover the potential pitfalls of venturing into the industrial landscape.",
    imageUrl: "src/assets/pipes/img5.png",
  },
  {
    id: 3,
    title: "The Shocking Revelation of Industry.",
    category: "Modern",
    date: "26 April",
    author: "John Doe",
    content:
      "Unexpected facts about the industry sector revealed in this article.",
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
    <div className="mt-30 p-4 sm:p-8 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Blog Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map((blog) => (
          <Card
            key={blog.id}
            hoverable
            cover={
              <img
                alt={blog.title}
                src={blog.imageUrl}
                className="w-full h-64 object-cover"
              />
            }
            className="shadow-lg h-full flex flex-col justify-between"
          >
            <div>
              <Card.Meta
                title={blog.title}
                description={`Category: ${blog.category} | By: ${blog.author}`}
              />
            </div>
            <button
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 w-full hover:bg-blue-600"
            >
              Read More
            </button>
          </Card>
        ))}
      </div>

      {/* Pagination Slider */}
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
