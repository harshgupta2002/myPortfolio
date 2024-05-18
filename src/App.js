import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
