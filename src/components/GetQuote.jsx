import React from 'react';
import backgroundImage from '../assets/bg2.jpg';
import shape1 from '../assets/shape-1.png';
import shape2 from '../assets/shape-2.png';
import { useNavigate } from 'react-router-dom';
export const GetQuote = () => {

  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-[250px] md:min-h-[300px] overflow-hidden flex items-center justify-center p-8 font-['Inter'] mt-5">

      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#163c6e]/70 to-[#163c6e]/90"></div>

      {/* Shapes */}
      <img
        src={shape1}
        alt="Animated shape"
        className="absolute left-[5%] top-[20%] w-[500px] z-20 animate-float-slow"
      />
      <img
        src={shape2}
        alt="Animated shape"
        className="absolute right-[8%] bottom-[5%] w-[500px] z-20 animate-float-fast"
      />

      {/* Content */}
      <div className="relative z-30 w-full max-w-7xl flex flex-col md:flex-row items-center md:items-center justify-between text-white text-center md:text-left gap-10">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Ready to Pull The Trigger?
            <br />
            Get a Quote Today.
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
          onClick={() => handleNav("/contact")}
            className="px-8 py-4 bg-white text-[#163c6e] font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#163c6e]"
          >
            Get A Quote
          </button>
          <button
          onClick={() => handleNav("/services")}
            className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white shadow-lg hover:bg-white hover:text-[#163c6e] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#163c6e]"
          >
            Our Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
