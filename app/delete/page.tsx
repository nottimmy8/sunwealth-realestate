"use client";
import Navbar from "@/components/nav-bar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { data } from "@/public/lib/data";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your logic to send data to your school database here
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      {/* Section with Background Image */}
      <section className=" relative h-screen w-full bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat px-6 py-10">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full flex-col">
          <Navbar />

          <div className=" mx-auto flex flex-col h-full items-center justify-center px-6 text-white">
            <div className=" text-center">
              <h1 className="mb-4 text-3xl md:text-5xl font-bold leading-tight">
                Your Trusted Real Estate Partner in Lagos.
              </h1>
              <p className="text-3xl md:text-5xl text-[#999999] font-bold ">
                Luxury properties. Expert advice.
              </p>
            </div>
            <div className="flex items-center mt-8 gap-4">
              <button className="bg-black  text-white px-4 py-2 rounded-full text-sm">
                View Listings
              </button>
              <button className="bg-transparent border border-white  text-white px-4 py-2 rounded-full text-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-12 md:py-20 md:px-0 px-6 flex flex-col items-center justify-center  ">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-xl md:text-4xl font-semibold">
              Sunwealth Ltd — RC: 1739523.
            </h1>
            <h2 className="text-xl md:text-4xl font-bold text-[#999999] ">
              Building trust and delivering modern real{" "}
            </h2>
            <h2 className="text-xl md:text-4xl font-bold text-[#999999] ">
              estate solutions for Lagos’ finest clientele.
            </h2>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-12 md:py-20 md:px-0 px-6 border-b-2 border-gray-200   ">
          {data.map((item) => {
            const isRight = item.align === "right";
            return (
              <div
                key={item.id}
                className={`max-w-6xl mx-auto gap-10  flex  md:flex-row-reverse items-center  justify-between space-y-4  ${isRight ? "flex-col" : "flex-col-reverse"}`}
              >
                {isRight && (
                  <div className="md:w-[580px] w-full h-[580px] rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className=" w-full h-full object-fill rounded-xl "
                    />
                  </div>
                )}
                <div className="max-w-xs ">
                  <h2 className="md:text-[32px] text-2xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-[#999999] text-2xl font-semibold ">
                    {item.description}
                  </p>
                </div>
                {!isRight && (
                  <div className="md:w-[580px] w-full h-[580px] rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className=" w-full h-full object-fill rounded-xl "
                    />
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-12 md:py-20 md:px-0 px-6   ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="md:text-[32px] text-2xl font-bold">
              Let’s find your dream property.
            </h2>
            <p className="text-[#999999] text-2xl font-medium ">
              Contact Sunwealth Ltd today <br /> for professional, trustworthy
              service.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 font-sans">
          {/* Header Section */}
          <div className="text-center mb-8  py-2 w-full max-w-lg">
            <h1 className="text-3xl font-bold text-black mb-1">Get in touch</h1>
            <p className="text-2xl font-semibold text-[#999999] ">
              We respond within 1 business day.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-300 text-gray-700"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-300 text-gray-700"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                // rows="5"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-300 text-gray-700 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </ScrollReveal>
      <footer className="bg-black h-[400px] ">
        <div></div>
      </footer>
    </div>
  );
};

export default Page;
