"use client";

import React from "react";
import Image from "next/image";
import { FaCloud, FaMobileAlt, FaCoins, FaCheckCircle, FaHeadset } from "react-icons/fa";

export default function OurStrategy() {
  const strategyData = [
    {
      title: "Expertise and Experience",
      desc: "Fintech Solutions, Cloud Services, Mobile/Web Development & much more",
      icon: <FaCloud size={30} className="text-blue-600" />,
    },
    {
      title: "Customized Solutions",
      desc: "Client satisfaction is our top most priority",
      icon: <FaCoins size={30} className="text-green-500" />,
    },
    {
      title: "Timely Delivery",
      desc: "Track record of delivering projects on time",
      icon: <FaCheckCircle size={30} className="text-yellow-500" />,
    },
    {
      title: "Quality Assurance",
      desc: "Reliable and bug-free applications",
      icon: <FaHeadset size={30} className="text-purple-500" />,
    },
    {
      title: "Competitive Pricing",
      desc: "Best Value for money Services",
      icon: <FaCoins size={30} className="text-red-500" />,
    },
    {
      title: "Customer Support",
      desc: "Throughout the project",
      icon: <FaMobileAlt size={30} className="text-pink-500" />,
    },
  ];

  return (
    <section className="w-full px-4 md:px-16 py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          OUR STRATEGY
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Why Choose Us?
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        {/* Center image */}
        <div className="hidden md:flex flex-col items-center justify-center relative w-80 h-80">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
            alt="Strategy"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Strategy Sections */}
        <div className="flex flex-col gap-8">
          {strategyData.map((item, index) => (
            <div key={index} className="flex items-start gap-4 md:gap-6">
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view image below */}
      <div className="md:hidden mt-10 relative w-72 h-72 mx-auto">
        <Image
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
          alt="Strategy"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
