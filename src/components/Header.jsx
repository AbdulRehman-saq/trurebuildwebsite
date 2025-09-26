import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

// ... (Keep all your imports: React, useState, FaPhone, etc.)

const Header = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileNavOpen(false);
  };

  // --- Start of New Logo Implementation ---
  const Logo = () => (
    // We use a div to contain the logo and name, making the entire area clickable
    <div 
      className="flex items-center space-x-2 cursor-pointer" 
      onClick={() => handleNav("/")}
    >
      {/* This is the placeholder for your new SVG logo (e.g., the Ascending Roofline).
        It is styled to match the color palette: Green for the background, 
        with the Dark Blue/Teal text for the Name, and White for the tagline.
      */}
      <div className="flex flex-col items-start leading-none">
        
        {/* Placeholder for the Logo Mark (SVG goes here) */}
        {/* Replace the 'h-10 w-10' with your actual SVG component */}
        <div className="text-[#163c6e] font-extrabold text-3xl tracking-tighter">
            TRUEBUILD
        </div>
        
        {/* Small Tagline/Solution Text */}
        <div className="text-white text-xs font-medium tracking-widest uppercase -mt-1">
            Property Solution
        </div>
      </div>
      
      {/* Optional: Add a visual indicator for the logo mark if you don't use the text-only approach above */}
      { <div className="h-10 w-10 rounded-lg flex items-center justify-center">
          <span className="text-lg font-bold text-[#4b912b]"><img src={logo} alt="" /></span>
      </div> }
    </div>
  );
  // --- End of New Logo Implementation ---


  return (
    <>
      {/* Top Info Bar (kept as is) */}
      <div className="bg-[#163c6e] text-white p-2 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-2 flex-1 text-sm">
            <FaMapMarkerAlt />
            <span>Charlotte, NC & Surrounding Areas</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>(980) 395-2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@truebuildpropertysolution.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#4b912b] text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Logo - REPLACED THE OLD IMAGE TAG */}
          <Logo />
          {/* The old code:
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav("/")}>
            <img src="./src/assets/logo.png" className="h-20 w-auto"  alt="" />
          </div> 
          */}

          {/* Nav Links (kept as is) */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => handleNav("/")} className="p-2 hover:text-[#163c6e]">Home</button>
            <button onClick={() => handleNav("/services")} className="p-2 hover:text-[#163c6e]">Services</button>
            <button onClick={() => handleNav("/contact")} className="p-2 hover:text-[#163c6e]">Contact Us</button>
          </div>

          {/* Get a Quote Button (kept as is) */}
          <div className="hidden lg:flex items-center">
            <motion.button
              onClick={() => handleNav("/contact")}
              className="px-5 py-2 bg-white text-[#163c6e] font-semibold rounded-full shadow-lg group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="block group-hover:-translate-y-1 transition-transform duration-300">
                Get a Quote
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button (kept as is) */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileNavOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Navigation Drawer (kept as is) */}
      {/* ... (rest of the component remains unchanged) ... */}
      
    </>
  );
};

export default Header;