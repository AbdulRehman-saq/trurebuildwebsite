import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import bgBanner from "../assets/banner-2.png"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    // Make THREE available globally
    window.THREE = THREE;

    const timeoutId = setTimeout(() => {
      if (!vantaEffectRef.current && vantaRef.current) {
        vantaEffectRef.current = WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1a1a1b,
          shininess: 14.0,
          waveHeight: 16.5,
          waveSpeed: 0.4,
          zoom: 1,
        });
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-screen flex items-center justify-start text-white overflow-hidden">

      {/* Vanta Waves Background (Layer 0) */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-10 vanta-container opacity-40"
      ></div>

      {/* Banner Image Overlay (Layer 1) */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
      ></div>
<div
  className="absolute inset-0 z-20"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
  }}
></div>
      

      {/* Content (Layer 3) */}
      <div className="relative z-30 p-6 sm:p-12 text-left max-w-full lg:max-w-4xl">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Subtitle */}
          <p className="text-[#163c6e] text-sm sm:text-base font-semibold mb-2 tracking-widest uppercase flex items-center">
            <span className="h-2 w-2 bg-[#163c6e] rounded-full mr-2"></span>
            TrueBuild Property Solution
          </p>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We Provide Effective <br />
            Construction <span className="text-[#163c6e]">&</span> <br />
            Renovations Services
          </h1>

          {/* Button */}
          <div className="flex mt-8">
            <motion.button
              onClick={() => handleNav("/contact")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#163c6e] text-[#ffffff] font-semibold rounded-full shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-1">
                Take Our Service
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
