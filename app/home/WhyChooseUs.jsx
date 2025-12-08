"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaGlobe,
  FaCogs,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";
import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserShield size={35} className="text-blue-600" />,
      title: "Assured Services",
      desc: "We consistently strive to exceed our clients’ expectations with unmatched professionalism and quality.",
      img: "/services/assured.png",
    },
    {
      icon: <FaGlobe size={35} className="text-blue-600" />,
      title: "Worldwide Remote Connectivity",
      desc: "We can connect and work remotely with clients across the globe — anytime, anywhere.",
      img: "/services/connectivity.png",
    },
    {
      icon: <FaCogs size={35} className="text-blue-600" />,
      title: "It's all about technology",
      desc: "24×7 expert technical support to keep your business running smoothly.",
      img: "/services/technology.png",
    },
    {
      icon: <FaLightbulb size={35} className="text-blue-600" />,
      title: "Creative Ideas with Passion",
      desc: "We bring fresh and innovative ideas to the table every time with top-tier expertise.",
      img: "/services/idea.png",
    },
    {
      icon: <FaClock size={35} className="text-blue-600" />,
      title: "On-time Every Time",
      desc: "We deliver high-quality work without compromise — always within deadlines.",
      img: "/services/time.png",
    },
  ];

  return (
    <div className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-blue-600 font-semibold tracking-widest mb-2">
            WE ARE DIFFERENT
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team takes a balanced, customized approach to each project —
            from discovery all the way to launch and beyond.
          </p>

          {/* FEATURES LIST */}
          <div className="mt-8 space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="bg-blue-100 p-3 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901775.jpg"
            alt="Why Choose Us"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
