"use client";

import React from "react";
import Image from "next/image";

const funFactsData = [
  "Community Focused: We actively organize and encourage community events.",
  "Culture of Celebration: We take every opportunity to celebrate our milestones together.",
  "Collaborative Growth: We learn, experiment, and evolve as a team.",
  "Lasting Memories: We are dedicated to creating shared experiences that last a lifetime.",
  "Gaming Enthusiasts: We have a serious passion for Counter-Strike.",
  "Adventure Seekers: From rafting to outdoor excursions, we love a good adventure.",

];

export default function FunFactsSection() {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 md:px-16">
      {/* Centered Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Fun Facts
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mt-2">
          Life at Synclink Technologies
        </p>
      </div>

      {/* Content Section: Left Text, Right Image */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Text */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <p className="text-gray-700 text-base md:text-lg">
           At Synclink, we believe career advancement and personal enjoyment should go hand in hand. We foster a dynamic environment that balances professional development with a vibrant, fun-filled culture.           </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {funFactsData.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
          <Image
            src="https://images.unsplash.com/photo-1591696205602-6442a8e12334?auto=format&fit=crop&w=800&q=80"
            alt="Fun at work"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
