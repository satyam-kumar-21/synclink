"use client";

import React from "react";
import { FaClock, FaUmbrellaBeach, FaCoffee, FaBirthdayCake, FaFutbol, FaAward, FaMoneyBillWave, FaChalkboardTeacher, FaLaptopHouse, FaHome } from "react-icons/fa";

export default function BenefitsSection() {
  // Array of benefits/perks
  const benefits = [
    { id: 1, title: "Flexible Timings", icon: <FaClock className="text-blue-600 text-4xl mb-2" /> },
    { id: 2, title: "Paid Leave Policy", icon: <FaUmbrellaBeach className="text-green-500 text-4xl mb-2" /> },
    { id: 3, title: "Beverages", icon: <FaCoffee className="text-yellow-500 text-4xl mb-2" /> },
    { id: 4, title: "Birthday Celebration", icon: <FaBirthdayCake className="text-pink-500 text-4xl mb-2" /> },
    { id: 5, title: "Sports Activity", icon: <FaFutbol className="text-red-500 text-4xl mb-2" /> },
    { id: 6, title: "Work Anniversary", icon: <FaAward className="text-purple-500 text-4xl mb-2" /> },
    { id: 7, title: "Awards and Recognition", icon: <FaAward className="text-yellow-600 text-4xl mb-2" /> },
    { id: 8, title: "Advance Salary", icon: <FaMoneyBillWave className="text-green-600 text-4xl mb-2" /> },
    { id: 9, title: "Training and Certifications", icon: <FaChalkboardTeacher className="text-blue-500 text-4xl mb-2" /> },
    { id: 10, title: "Training Fund", icon: <FaChalkboardTeacher className="text-indigo-500 text-4xl mb-2" /> },
    { id: 11, title: "Work From Home", icon: <FaHome className="text-gray-600 text-4xl mb-2" /> },
    { id: 12, title: "Performance-based Bonuses", icon: <FaMoneyBillWave className="text-green-400 text-4xl mb-2" /> },
    { id: 13, title: "Paid Internships", icon: <FaLaptopHouse className="text-blue-700 text-4xl mb-2" /> },
    { id: 14, title: "Team and Company-Wide Dinners", icon: <FaFutbol className="text-red-500 text-4xl mb-2" /> },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Handful Benefits & Perks</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We care for every individual associated with us. Numerous perks and facilities of necessities help maintain comfort and work-life balance. Coordination of Health and Work is maintained while working in Synclink.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center"
          >
            {benefit.icon}
            <p className="mt-2 font-semibold text-gray-700 text-center">{benefit.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
