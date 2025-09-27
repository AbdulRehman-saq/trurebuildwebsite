import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileNavOpen(false);
  };

  const Logo = () => (
    <div 
      className="flex items-center space-x-2 cursor-pointer" 
      onClick={() => handleNav("/")}
    >
      <div className="flex flex-col items-start leading-none">
        <div className="text-[#163c6e] font-extrabold text-3xl tracking-tighter">
          TRUEBUILD
        </div>
        <div className="text-white text-xs font-medium tracking-widest uppercase -mt-1">
          Property Solution
        </div>
      </div>
      <div className="h-10 w-10 rounded-lg flex items-center justify-center">
        <span className="text-lg font-bold text-[#4b912b]">
          <img src={logo} alt="logo" />
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Top Info Bar */}
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
          <Logo />

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => handleNav("/")} className="p-2 hover:text-[#163c6e]">Home</button>
            <button onClick={() => handleNav("/services")} className="p-2 hover:text-[#163c6e]">Services</button>
            <button onClick={() => handleNav("/contact")} className="p-2 hover:text-[#163c6e]">Contact Us</button>
          </div>

          {/* Desktop Quote Button */}
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileNavOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Navigation Drawer */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="bg-[#163c6e] w-3/4 h-full p-6 text-white flex flex-col space-y-6"
          >
            <div className="flex justify-between items-center">
              <Logo />
              <button onClick={() => setIsMobileNavOpen(false)}>
                <FaTimes size={24} />
              </button>
            </div>

            <button onClick={() => handleNav("/")} className="p-2 text-left">Home</button>
            <button onClick={() => handleNav("/services")} className="p-2 text-left">Services</button>
            <button onClick={() => handleNav("/contact")} className="p-2 text-left">Contact Us</button>

            <motion.button
              onClick={() => handleNav("/contact")}
              className="px-5 py-2 bg-white text-[#163c6e] font-semibold rounded-full shadow-lg mt-4"
              whileHover={{ scale: 1.05 }}
            >
              Get a Quote
            </motion.button>
          </motion.div>

          {/* Clicking outside closes menu */}
          <div 
            className="flex-1" 
            onClick={() => setIsMobileNavOpen(false)} 
          />
        </div>
      )}
    </>
  );
};

export default Header;
