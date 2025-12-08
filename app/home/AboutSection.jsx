"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="w-full py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-widest mb-2">
            ABOUT US
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            We Provide Professional IT Solutions For Your Business
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-blue-700">Synclink Technologies</span>,
            we focus on delivering modern, scalable, and innovative digital
            solutions. We continuously upgrade our skills, follow latest tech
            trends, and apply industry best practices to deliver cutting-edge
            results that match every client&#39;s unique needs.
          </p>

          {/* Vision */}
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Vision
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to become a global leader in advanced technology
              solutions that empower businesses, solve real-world challenges,
              and improve people&#39;s lives with digital innovation.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
              Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower businesses through innovative, scalable,
              and smart digital solutions that streamline operations, enhance
              productivity, and drive long-term growth.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGES (CLEAN DESIGN) */}
        <motion.div
          className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* BACK BIG IMAGE */}
          <div className="w-64 h-80 md:w-80 md:h-[360px] rounded-2xl overflow-hidden shadow-xl opacity-90">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMWn3-9_7Bp62VWcjowdpnGRbZkxgbiG9nw&s"
              alt="IT Solutions"
              fill
              className="object-cover"
            />
          </div>

          {/* FRONT SMALL IMAGE */}
          <div className="absolute bottom-6 right-6 w-40 h-52 md:w-52 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Developers Team"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
