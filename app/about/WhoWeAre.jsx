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

       Synclink Technologies is a unified IT Service and HR Consulting firm established to provide holistic solutions for businesses navigating the demands of the modern global market. We specialize in driving measurable digital and organizational transformation. Our approach transcends the traditional vendor model; we position ourselves as strategic partners who deploy highly specialized expertise across both technological enablement and human capital optimization. Our core mission is to convert complex operational challenges into innovative, scalable solutions that maximize efficiency, build resilient technological foundations, and foster high-performing workforces, ensuring a maximized return on investment.      </p>
      <p className="text-gray-700 text-base md:text-lg mb-4">
       Our competitive advantage is defined by the integration of our expert teams. We comprise deeply experienced and certified professionals including software architects, cloud engineers, data specialists, and seasoned HR consultants all operating with a culture of continuous learning and rigorous quality standards.      </p>
      <p className="text-gray-700 text-base md:text-lg mb-4">
       By leveraging agile methodologies across both IT development and HR strategy execution, we ensure transparent collaboration, rapid iterative progress, and absolute alignment with our clients' long-term business objectives.      </p>
      <p className="text-gray-700 text-base md:text-lg mb-6">
       This unique, client-centric approach allows us to deliver high - performance, secure IT ecosystems alongside optimized human resource strategies, providing a powerful, sustainable competitive edge in today's rapidly evolving business landscape.      </p>

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
