"use client";

import React from "react";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="w-full flex flex-col items-start justify-center px-4 md:px-16 py-12 md:py-20 bg-gray-50">
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Who We Are
      </h2>

      {/* Section Content */}
      <p className="text-gray-700 text-base md:text-lg mb-4">
        Synclink Technologies comprises a team of dedicated and passionate professionals committed to helping clients achieve success in the digital world. We firmly believe that technology has the power to transform businesses and make a positive impact on society.
      </p>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        Our team consists of experts from various domains, and we value transparency, open communication, and collaboration. We work closely with our clients to understand their unique needs and objectives, ensuring effective and innovative solutions.
      </p>
      <p className="text-gray-700 text-base md:text-lg mb-4">
        At Synclink Technologies, we approach each project as an opportunity to create something remarkable. We are devoted to delivering high-quality work that exceeds our clients’ expectations, and we take pride in being problem solvers, innovators, and partners to our clients.
      </p>
      <p className="text-gray-700 text-base md:text-lg mb-6">
        Contact us today to see how we can help bring your ideas to life.
      </p>

      {/* Contact Us Button */}
      <Link
        href="/contact"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
