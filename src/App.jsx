import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
//import Whatsapppop from "./components/Popup/Whatsapppop";

import Layout from "./Layout/Layout";
import Gallery from "./pages/NavigationPages/Gallery";
import About from "./pages/NavigationPages/About";
import Product from "./pages/NavigationPages/Product";
import Contact from "./pages/NavigationPages/Contact";
import Blog from "./pages/NavigationPages/Blog";
import ProjectsSection from "./pages/NavigationPages/ProjectsSection";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="aboutus" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="projects" element={<ProjectsSection />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactus" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

{
  /* <div className="relative">
  <Homepage />
  <div className="z-50 fixed bottom-10 right-0  ">
    <Whatsapppop />
  </div>
</div>; */
}
