import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/ServicesSection";
import ServicesBanner from "../components/ServicesBanner";
import GetQuote from "../components/GetQuote";

const Home = () => {
  

  return (
    <>
    <Hero/>  
    <About/>
    <ServicesBanner/>
    <Services/>
    <GetQuote/>
    </>
  );
};

export default Home;