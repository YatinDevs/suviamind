import React from "react";
import { useParams } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "How To Get People To Like Industry.",
    content:
      "This blog provides insights on engaging with people in the industrial sector.",
  },
  {
    id: 2,
    title: "Why You Should Not Go To Industry.",
    content:
      "Discover the potential pitfalls of venturing into the industrial landscape.",
  },
  {
    id: 3,
    title: "The Shocking Revelation of Industry.",
    content:
      "Unexpected facts about the industry sector revealed in this article.",
  },
];

function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <h1>Blog not found!</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
