"use client";

import React from "react";
import Image from "next/image";
import { FaUsers, FaLaptopCode, FaClock, FaChartLine } from "react-icons/fa";

export default function TeamSection() {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-16">
      {/* Top section: Image left (desktop only), text right */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Image - hidden on mobile */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] relative hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1581091012184-2d7b1a2d4a3d?auto=format&fit=crop&w=800&q=80"
            alt="Team Image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Join us?
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
           At Synclink Technologies, we cultivate a culture where innovation directly impacts lives. We are seeking visionaries eager to contribute to a shared future. We champion an environment defined by transparency, collaboration, and equal opportunity.       </p>
          <p className="text-gray-700 text-base md:text-lg">
          As we continue to expand, we are searching for dynamic talent ready to grow with us elevating not just our company benchmarks, but your own professional standards.          </p>
        </div>
      </div>

      {/* Stats Cards: single row */}
      {/* <div className="mt-12 flex flex-wrap justify-between gap-6 text-center"> */}
        {/* Card 1 */}
        {/* <div className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaUsers className="mx-auto text-blue-600 text-5xl mb-3" />
          <p className="text-lg font-semibold text-gray-600">Engineers and designers</p>
          <p className="text-3xl font-bold my-1 text-gray-600">50+</p>
          <p className="text-gray-600">Engineers and designers</p>
        </div> */}

        {/* Card 2 */}
        {/* <div className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaLaptopCode className="mx-auto text-green-600 text-5xl mb-3" />
          <p className="text-lg font-semibold text-gray-600">Web and Mobile application built</p>
          <p className="text-3xl font-bold my-1 text-gray-600">30+</p>
          <p className="text-gray-600">Web and Mobile application built</p>
        </div> */}

        {/* Card 3 */}
        {/* <div className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaClock className="mx-auto text-yellow-500 text-5xl mb-3" />
          <p className="text-lg font-semibold text-gray-600">Years of building software products</p>
          <p className="text-3xl font-bold my-1 text-gray-600">3+</p>
          <p className="text-gray-600">Years of building software products</p>
        </div> */}

        {/* Card 4 */}
        {/* <div className="flex-1 min-w-[200px] bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <FaChartLine className="mx-auto text-red-500 text-5xl mb-3" />
          <p className="text-lg font-semibold text-gray-600">Year-on-year organization growth</p>
          <p className="text-3xl font-bold my-1 text-gray-600">100%</p>
          <p className="text-gray-600">Year-on-year organization growth</p>
        </div> */}
      {/* </div> */}
    </section>
  );
}
