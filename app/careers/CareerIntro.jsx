"use client";

import React from "react";
import Image from "next/image";

export default function CareerIntro() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-10 md:py-0 md:h-[60vh] px-4 md:px-16 bg-blue-500 text-white">
      {/* Left Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:pr-8 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Let&apos;s Collaborate..
        </h2>
        <p className="text-white text-base md:text-lg">
          Partner with us to engineer high-impact software that accelerates growth and turns complex concepts into market-ready reality.
        </p>
        <p className="text-white text-base md:text-lg">
          We deliver world-class digital products to a global audience, every single day.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-60 md:h-80 relative mt-6 md:mt-0">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxojhhA6i6TLgYlzhHvEr2yKgNIHJNGJ7zA&s"
          alt="Build Impactful Software"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
