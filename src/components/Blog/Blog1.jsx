// import React from "react";
// import { useParams } from 'react-router-dom';

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";

// export default function Blog1() {
//   const { id } = useParams();

//   const [articles, setArticles] = useState([
//     {
//       title: "Introduction to React",
//       content:
//         "React is a JavaScript library for building user interfaces. Learn how it works and why it's popular.",
//     },
//     {
//       title: "Getting Started with Tailwind CSS",
//       content:
//         "Tailwind CSS is a utility-first CSS framework. Discover how to use it to rapidly build custom designs.",
//     },
//   ]);

//   const [newArticle, setNewArticle] = useState({ title: "", content: "" });

//   const handleAddArticle = () => {
//     if (newArticle.title && newArticle.content) {
//       setArticles([...articles, newArticle]);
//       setNewArticle({ title: "", content: "" });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-bold mb-6">Blog Articles</h1>

//       {/* New Article Form */}
//       <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
//         <h2 className="text-xl font-semibold mb-4">Add a New Article</h2>
//         <div className="grid gap-4 mb-4">
//           <Input
//             placeholder="Article Title"
//             value={newArticle.title}
//             onChange={(e) =>
//               setNewArticle({ ...newArticle, title: e.target.value })
//             }
//           />
//           <textarea
//             placeholder="Article Content"
//             value={newArticle.content}
//             onChange={(e) =>
//               setNewArticle({ ...newArticle, content: e.target.value })
//             }
//             className="w-full p-3 border rounded-md"
//             rows="4"
//           ></textarea>
//         </div>
//         <Button
//           onClick={handleAddArticle}
//           className="bg-blue-500 hover:bg-blue-600 text-white"
//         >
//           Add Article
//         </Button>
//       </div>

//       {/* Articles List */}
//       <div className="grid gap-6">
//         {articles.map((article, index) => (
//           <Card key={index} className="bg-white rounded-2xl shadow-md">
//             <CardHeader>
//               <CardTitle>{article.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>{article.content}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";

const Blog1 = () => {
  const { b1 } = useParams();

  const blogData = {
    1: { title: "Post One", content: "Full content for the first post." },
    2: { title: "Post Two", content: "Full content for the second post." },
  };

  const post = blogData[b1];

  if (!post) return <h1>Blog post not found!</h1>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <p>Hi</p>
    </div>
  );
};

export default Blog1;
