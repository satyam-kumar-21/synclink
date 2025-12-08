"use client";

import React from "react";
import Link from "next/link";

export default function JoinUsHero() {
  return (
    <div className="w-full flex justify-center bg-white pb-5">
      {/* Section with background image */}
      <section
        className="w-[90%] md:w-[80%] px-4 md:px-8 py-[10vh] text-center bg-cover bg-center relative flex flex-col justify-center rounded-3xl md:rounded-[50px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-3xl md:rounded-[50px]"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Want to Join Synclink Technologies?
          </h2>
          <p className="text-base md:text-xl mb-6">
            Here is the list of open positions that we are currently hiring.
          </p>
          <Link
            href="/careers"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
