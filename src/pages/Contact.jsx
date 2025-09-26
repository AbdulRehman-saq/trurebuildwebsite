import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail } from "lucide-react";
import * as EmailJS from "@emailjs/browser";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    const templateParams = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    EmailJS.send(
      "", //service
      "", //template
      templateParams,
      "" //public key
    )
    .then(
      () => {
        setIsModalOpen(true);
        reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again later.");
      }
    );
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left side */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">We’d love to hear about your project. Reach out anytime.</p>
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <MapPin className="text-[#163c6e] mb-2" size={40} />
              <h4 className="text-2xl font-semibold">Our Address</h4>
              <p>Charlotte, NC & Surrounding Areas</p>
            </div>
            <div className="flex flex-col items-start">
              <Phone className="text-[#163c6e] mb-2" size={40} />
              <h4 className="text-xl font-semibold">Phone Number</h4>
              <p>(980) 395-2025</p>
            </div>
            <div className="flex flex-col items-start">
              <Mail className="text-[#163c6e] mb-2" size={40} />
              <h4 className="text-xl font-semibold">Email Address</h4>
              <p>info@truebuildpropertysolution.com</p>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="bg-white p-8 md:p-12 w-full lg:w-1/2 rounded-xl shadow-2xl">
          <h3 className="text-4xl font-bold mb-8">Need Construction Help?</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: "Full name is required" })}
              className={`w-full px-4 py-3 bg-gray-100 rounded-lg border ${errors.fullName ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-4 py-3 bg-gray-100 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input
              type="tel"
              placeholder="(+1) (XXX) (XXX) (XXXX)"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+1\d{10}$/,
                  message: "Phone number must be +1 followed by 10 digits"
                }
              })}
              className={`w-full px-4 py-3 bg-gray-100 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

            <textarea
              placeholder="Message"
              rows="5"
              {...register("message", { required: "Message is required" })}
              className={`w-full px-4 py-3 bg-gray-100 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-200"}`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#163c6e] text-white font-semibold rounded-lg shadow-lg hover:bg-[#163c6e]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Success!</h2>
            <p className="mb-6">Your message has been sent successfully. We will get back to you soon.</p>
            <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 bg-[#163c6e] text-white rounded-lg hover:bg-[#c05621]">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
