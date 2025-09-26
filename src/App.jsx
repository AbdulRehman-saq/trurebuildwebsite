import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  // Effect to handle scroll animations for all sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
          } else {
            entry.target.classList.remove('animate-in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f4f7f9;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .card-hover-effect:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 10px 20px rgba(255, 126, 48, 0.4),
                        0 4px 6px rgba(255, 126, 48, 0.2);
          }

          .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .animate-on-scroll.animate-in-view {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes animateContactBg {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }

          .animated-contact-bg {
            animation: animateContactBg 20s linear infinite alternate;
          }
        `}
      </style>

      <Header />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
