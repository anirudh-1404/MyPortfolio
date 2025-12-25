import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
