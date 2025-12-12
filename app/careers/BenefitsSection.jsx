"use client";

import React from "react";
import {
  FaClock,
  FaUmbrellaBeach,
  FaCoffee,
  FaBirthdayCake,
  FaFutbol,
} from "react-icons/fa";

export default function BenefitsSection() {
  const benefits = [
    {
      id: 1,
      title: "Remote-First Culture",
      description: "Work from where you are most productive. Our infrastructure supports seamless worldwide connectivity, giving you true location flexibility.",
      icon: <FaClock className="text-blue-600 text-5xl mb-3" />,
    },
    {
      id: 2,
      title: "Accelerated Career Growth",
      description: "We don't just scale businesses; we scale careers. Access continuous learning opportunities to level up your professional benchmarks.",
      icon: <FaUmbrellaBeach className="text-green-500 text-5xl mb-3" />,
    },
    {
      id: 3,
      title: "Inclusive Environment",
      description: "Thrive in a workplace built on togetherness, open communication, and equal opportunities for every team member.",
      icon: <FaCoffee className="text-yellow-500 text-5xl mb-3" />,
    },
    {
      id: 4,
      title: "Global Impact",
      description: "Work on high-stakes projects that matter. contribute to digital products shipped to a global audience every single day.",
      icon: <FaBirthdayCake className="text-pink-500 text-5xl mb-3" />,
    },
    {
      id: 5,
      title: "Work-Life Harmony",
      description: "We focus on output, not hours. Our balanced approach ensures you can deliver high-quality work without compromising your personal well-being.",
      icon: <FaFutbol className="text-red-500 text-5xl mb-3" />,
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-14 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 text-gray-800">
          Perks & Benefits
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          We value every member of our team. Our benefits are designed to enhance
          your comfort, boost productivity, and ensure an ideal work-life
          balance. At Synclink, we create an environment where growth, health,
          and happiness are prioritized.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-200 hover:-translate-y-2 hover:bg-gradient-to-b from-white to-gray-50"
          >
            {benefit.icon}
            <h3 className="mt-2 text-lg font-semibold text-gray-800">
              {benefit.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
