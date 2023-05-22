import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import PLatextProjects from "./components/PLatextProjects";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import FormValidation from "./components/FormValidation";
import Contact from "./components/Contact";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          
        </Routes>
      </Main>
    </>
  );
};

export default App;
