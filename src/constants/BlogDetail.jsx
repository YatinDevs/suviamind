import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "How RCC Pipes are Revolutionizing Water Management",
    content:
      "RCC pipes are transforming water management by providing durability, strength, and cost-effectiveness for large-scale projects.",
  },
  {
    id: 2,
    title: "The Future of Infrastructure Development in India",
    content:
      "With rapid urbanization, India's infrastructure sector is evolving with smart cities, sustainable construction, and modern RCC technologies.",
  },
  {
    id: 3,
    title: "Why Quality Matters: Choosing the Best RCC Pipes for Your Project",
    content:
      "Selecting high-quality RCC pipes ensures long-term performance, safety, and compliance with industry standards.",
  },
];

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h1 className="text-center text-2xl font-bold">Blog not found!</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-800">{blog.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{blog.content}</p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-2 text-white font-semibold rounded-lg 
                   bg-gradient-to-r from-blue-500 to-purple-500 
                   hover:from-purple-500 hover:to-blue-500 transition-all"
      >
        Go Back
      </button>
    </div>
  );
}

export default BlogDetail;
