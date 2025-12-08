"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCloud,
  FaMobileAlt,
  FaProjectDiagram,
  FaBitcoin,
} from "react-icons/fa";

export default function WhatWeOffer() {
  const services = [
    {
      icon: <FaReact size={40} className="text-blue-600" />,
      title: "Business Solution",
      desc: "Collaboratively reintermediate holistic markets restore strategic sources the world.",
    },
    {
      icon: <FaCloud size={40} className="text-blue-600" />,
      title: "Managed Cloud Services",
      desc: "Develop scalable and resilient software products that maximize cloud efficiency and reduce your IT cost.",
    },
    {
      icon: <FaNodeJs size={40} className="text-blue-600" />,
      title: "FinTech Solutions",
      desc: "Keep your software in line with latest technology, feature, and performance standards.",
    },
    {
      icon: <FaProjectDiagram size={40} className="text-blue-600" />,
      title: "IT Consulting",
      desc: "Helping organizations design and deliver innovative software solutions with speed and scale.",
    },
    {
      icon: <FaBitcoin size={40} className="text-blue-600" />,
      title: "Blockchain Technologies",
      desc: "Secure your network with advanced decentralized blockchain technology.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-blue-600" />,
      title: "Mobile & Web App Development",
      desc: "Robust and scalable development services for better user experience across various platforms.",
    },
  ];

  return (
    <div className="w-full py-16 px-6 md:px-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-sm font-bold text-blue-600 tracking-widest mb-2">
          WHAT WE OFFER
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Professional Services
        </h3>
      </motion.div>

      {/* Grid Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer border border-gray-200"
          >
            <div className="mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
