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
      title: "Service Excellence",
      desc: "We are committed to surpassing client standards by delivering superior quality and maintaining the highest level of professional integrity.",
      img: "/services/assured.png",
    },
    {
      icon: <FaGlobe size={35} className="text-blue-600" />,
      title: "Global Accessibility",
      desc: "Our infrastructure enables seamless remote collaboration, allowing us to serve clients worldwide, regardless of time zone or location.",
      img: "/services/connectivity.png",
    },
    {
      icon: <FaCogs size={35} className="text-blue-600" />,
      title: "24/7 Technical Assurance",
      desc: "Our expert support team is available around the clock to ensure your business operations maintain continuous uptime and efficiency.",
      img: "/services/technology.png",
    },
    {
      icon: <FaLightbulb size={35} className="text-blue-600" />,
      title: "Innovative Expertise",
      desc: "We approach every challenge with passion and creativity, leveraging top-tier skills to deliver fresh, forward-thinking solutions.",
      img: "/services/idea.png",
    },
    {
      icon: <FaClock size={35} className="text-blue-600" />,
      title: "Reliable Timelines",
      desc: "We prioritize punctuality, ensuring high-quality deliverables are completed strictly within agreed deadlines—no exceptions.",
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
            Why Join Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Synclink Technologies, we cultivate a culture where innovation directly impacts lives. We are seeking visionaries eager to contribute to a shared future. We champion an environment defined by transparency, collaboration, and equal opportunity. As we continue to expand,
             we are searching for dynamic talent ready to grow with us—elevating not just our company benchmarks, but your own professional standards.
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
