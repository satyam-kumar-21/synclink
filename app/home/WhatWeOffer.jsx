"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCloud,
  FaDatabase,
  FaCog,
  FaLaptopCode,
  FaMobileAlt,
  FaJava,
  FaPython,
  FaPalette,
  FaShieldAlt,
  FaUsersCog,
  FaHandshake,
} from "react-icons/fa";

export default function WhatWeOffer() {
  const services = [
    {
      icon: <FaReact size={40} className="text-blue-600" />,
      title: "Business Intelligence",
      desc: "Transform raw data into actionable insights with interactive dashboards that drive smarter strategic decisions.",
    },
    {
      icon: <FaCloud size={40} className="text-blue-600" />,
      title: "Microsoft Fabric",
      desc: "Centralize your entire data estate with a unified analytics solution designed for the AI era.",
    },
    {
      icon: <FaCog size={40} className="text-blue-600" />,
      title: "Data Engineering",
      desc: "Architect robust data pipelines that ensure your information is accurate, accessible, and ready for analysis.",
    },
    {
      icon: <FaDatabase size={40} className="text-blue-600" />,
      title: "Database Development",
      desc: "Design and deploy secure, high-performance database architectures tailored to your specific operational needs.",
    },
    {
      icon: <FaLaptopCode size={40} className="text-blue-600" />,
      title: "Full Stack Development",
      desc: "Deliver comprehensive, end-to-end web solutions built on modern frameworks for seamless scalability.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-blue-600" />,
      title: "Mobile Application Development",
      desc: "Create intuitive, high-performance mobile experiences optimized for both iOS and Android platforms.",
    },
    {
      icon: <FaJava size={40} className="text-blue-600" />,
      title: "Java Development",
      desc: "Build stable, secure, and scalable enterprise-grade applications with robust cross-platform capabilities.",
    },
    {
      icon: <FaPython size={40} className="text-blue-600" />,
      title: "Python Development",
      desc: "Leverage versatile coding for advanced backend logic, process automation, and machine learning solutions.",
    },
    {
      icon: <FaPalette size={40} className="text-blue-600" />,
      title: "UI/UX Design",
      desc: "Craft user-centric interfaces that blend stunning aesthetics with intuitive functionality to drive engagement.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-600" />,
      title: "Cybersecurity",
      desc: "Safeguard your digital assets with rigorous security protocols and proactive threat defense mechanisms.",
    },
    {
      icon: <FaUsersCog size={40} className="text-blue-600" />,
      title: "HR Consulting",
      desc: "Optimize your human capital through strategic talent acquisition, workforce planning, and organizational development.",
    },
    {
      icon: <FaHandshake size={40} className="text-blue-600" />,
      title: "B2B Services",
      desc: "Drive growth with tailored consulting and partnership models designed for seamless business-to-business integration.",
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
