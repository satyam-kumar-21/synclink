"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-10 md:py-0 md:h-[60vh] px-4 md:px-16 bg-blue-500 from-blue-700/90 to-blue-500/80 text-white">
      {/* Left Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:pr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-snug">
          We Deliver What We Promise
        </h2>
        <p className="text-white text-base md:text-lg mb-6">
          At Synclink Technologies, we pride ourselves on delivering what we
          promise. Our team is committed to providing high-quality solutions
          that meet the needs of our clients.
        </p>
        <Link
          href="/contact"
          className="w-max px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-full  md:w-1/2 h-60 md:h-80 relative mt-6 md:mt-0">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxojhhA6i6TLgYlzhHvEr2yKgNIHJNGJ7zA&s"
          alt="We Deliver"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
