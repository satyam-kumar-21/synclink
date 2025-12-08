"use client";

import React from "react";
import { FaBuilding, FaAward, FaRocket, FaCheckCircle } from "react-icons/fa";

export default function OurHistory() {
  const historyData = [
    {
      year: "2021",
      title: "Company Foundation",
      desc: "Unlink Technologies, a leading provider of innovative IT solutions and services. Founded by experienced IT professionals to provide high-quality IT services and support.",
      icon: <FaBuilding className="text-white w-6 h-6" />,
    },
    {
      year: "2021",
      title: "We Deliver What We Promise",
      desc: "Our work-intensive team craves success and achievement, defining our positive mindset toward any challenge, whether in outsourcing or software development.",
      icon: <FaCheckCircle className="text-white w-6 h-6" />,
    },
    {
      year: "ISO Certified",
      title: "ISO 9001:2015 Certification",
      desc: "Our ISO certification is a testament to our commitment to excellence and delivering the highest level of service to our clients.",
      icon: <FaAward className="text-white w-6 h-6" />,
    },
    {
      year: "Company Growth & Awards",
      title: "Innovation & Recognition",
      desc: "We embrace collaboration and innovation by leveraging emerging tools and technology, promoting growth and recognition.",
      icon: <FaRocket className="text-white w-6 h-6" />,
    },
  ];

  return (
    <section className="w-full bg-gray-50 px-4 md:px-16 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Our History
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">We focus on the company growth.</p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

        {historyData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center w-full mb-8"
            >
              {/* Left content for desktop */}
              <div
                className={`w-full md:w-1/2 p-4 ${isLeft ? "md:text-right md:pr-8" : "md:invisible"} flex flex-col items-center md:items-end`}
              >
                {isLeft && (
                  <>
                    <div className="bg-blue-600 p-3 rounded-full mb-2">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 text-sm text-center md:text-right">{item.desc}</p>
                    <span className="text-blue-600 font-bold mt-1 block">{item.year}</span>
                  </>
                )}
              </div>

              {/* Center dot */}
              <div className="bg-blue-600 w-6 h-6 rounded-full z-10 mx-auto md:mx-0"></div>

              {/* Right content for desktop */}
              <div
                className={`w-full md:w-1/2 p-4 ${!isLeft ? "md:text-left md:pl-8" : "md:invisible"} flex flex-col items-center md:items-start`}
              >
                {!isLeft && (
                  <>
                    <div className="bg-blue-600 p-3 rounded-full mb-2">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 text-sm text-center md:text-left">{item.desc}</p>
                    <span className="text-blue-600 font-bold mt-1 block">{item.year}</span>
                  </>
                )}
              </div>

              {/* Mobile view: show all stacked */}
              <div className="flex flex-col items-center md:hidden mt-4">
                <div className="bg-blue-600 p-3 rounded-full mb-2">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">{item.title}</h3>
                <p className="text-gray-700 text-sm text-center">{item.desc}</p>
                <span className="text-blue-600 font-bold mt-1 block">{item.year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
