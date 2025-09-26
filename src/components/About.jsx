import React from 'react'
import aboutImage from "../assets/about.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-gray-100 font-sans p-6 md:p-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
    
    {/* Left Column: Image (40%) */}
    <div className="md:w-2/5 w-full flex justify-center">
      <img
        src={aboutImage}
        alt="Two construction workers smiling"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Right Column: Text Content (60%) */}
    <div className="md:w-3/5 w-full flex flex-col justify-center space-y-6 text-center md:text-left px-4 md:px-0">
      
      {/* Section Label */}
      <p className="text-[#163c6e] text-sm sm:text-base font-bold tracking-widest uppercase flex items-center justify-center md:justify-start">
        <span className="h-2 w-2 bg-[#163c6e] rounded-full mr-2"></span>
        About Us
      </p>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
        Crafting Structures That Last a Lifetime
      </h1>

      {/* Paragraph */}
      <p className="text-gray-600 text-m sm:text-base md:text-lg leading-relaxed max-w-prose mx-auto md:mx-0">
      Locally owned in Charlotte, we specialize in reliable residential remodels and commercial buildouts—from quick repairs to full-scale projects. Our approach blends advanced materials, resilient design, and sustainable practices, ensuring structures that endure. Licensed and insured, we provide free, detailed estimates and deliver excellence in every project.
      </p>

      {/* Feature List */}
      <div className="bg-blue-50 p-4 sm:p-6 rounded-xl flex flex-col space-y-4">
        {[
          "Comprehensive Services",
          "Advanced Technology",
          "Transparent Communication",
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <motion.div
              className="relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id={`blueGradient${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#163c6e" />
                    <stop offset="100%" stopColor="#4990ec" />
                  </linearGradient>
                </defs>
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke={`url(#blueGradient${idx})`}
                  strokeWidth="4"
                />
              </svg>
            </motion.div>
            <span className="text-gray-800 font-bold text-sm sm:text-base lg:text-lg text-left">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons & Support Info */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 mt-6">
        
        {/* Quote Button */}
        <motion.button
         onClick={() => handleNav("/contact")}
          className="px-6 py-3 sm:px-9 sm:py-4 bg-[#163c6e] text-white font-semibold rounded-full shadow-lg relative overflow-hidden group w-full md:w-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-1">
            Take a Quote
          </span>
        </motion.button>

        {/* Support Info */}
        <div className="flex items-center space-x-2 text-gray-600">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 16.42a1 1 0 01-.15.83l-2.07 2.07a2 2 0 01-2.83 0L12 15.83a2 2 0 01-2.83-2.83l2.07-2.07a1 1 0 01.83-.15c.6.08 1.15.34 1.63.76L17.5 12.5c.42.48.68 1.03.76 1.63a1 1 0 01-.15.83zM13.5 10l.707-.707a.5.5 0 000-.707L13.5 8a.5.5 0 00-.707 0L12 8.793a.5.5 0 000 .707l.793.793a.5.5 0 00.707 0zm-4-4l-1 1a.5.5 0 000 .707l1 1a.5.5 0 00.707 0l1-1a.5.5 0 000-.707l-1-1a.5.5 0 00-.707 0zM12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zM21 12a1 1 0 01-1 1h-2a1 1 0 010-2h2a1 1 0 011 1zM3 12a1 1 0 01-1 1H1a1 1 0 010-2h1a1 1 0 011 1zM12 21a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1z" />
          </svg>
          <div className="text-center md:text-left">
            <span className="text-sm sm:text-base block">Call Support Center 24x7</span>
            <span className="font-bold text-lg block text-gray-900">      
                (980) 395‑2025
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default About