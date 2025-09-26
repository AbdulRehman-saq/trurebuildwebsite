import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// import your local service images
import service1 from "../assets/services/service1.jpg";
import service2 from "../assets/services/service2.jpg";
import service3 from "../assets/services/service3.jpg";
import service4 from "../assets/services/service4.jpg";

const services = [
  {
    title: "Kitchens & Bathrooms",
    image: service1,
    description:
      "Upgrade your home with custom kitchen and bathroom renovations including cabinets, tiles, lighting, and fixtures.",
    alt: "Kitchens and Bathrooms",
  },
  {
    title: "Flooring, Painting & Drywall",
    image: service2,
    description:
      "Enhance your space with professional flooring installations, painting services, and drywall finishing.",
    alt: "Flooring, Painting and Drywall",
  },
  {
    title: "Decks & Outdoor",
    image: service3,
    description:
      "Expand your living space with custom-built decks, patios, and outdoor living Solution.",
    alt: "Decks and Outdoor",
  },
  {
    title: "Tenant Improvements",
    image: service4,
    description:
      "We provide complete tenant improvement services to optimize your commercial or residential property.",
    alt: "Tenant Improvements",
  },
];

const ServicesSection = () => {

    const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-blue-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 text-2xl font-bold">
            We specialize in a wide range of construction services, including
            residential, commercial, and industrial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-2xl shadow-xl group"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

              {/* Title (initial) */}
              <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-300 group-hover:translate-y-10 group-hover:opacity-0">
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 mx-auto">
  <motion.button
    onClick={() => handleNav("/services")}
    className="px-6 sm:px-8 py-3 sm:py-4 bg-[#163c6e] text-[#ffffff] font-semibold rounded-full shadow-lg relative overflow-hidden group"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <span className="block transition-transform duration-300 group-hover:-translate-y-1">
      View All Services
    </span>
  </motion.button>
</div>

      </div>
    </div>
  );
};

export default ServicesSection;
