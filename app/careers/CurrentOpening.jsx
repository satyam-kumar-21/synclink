"use client";

import React from "react";

export default function CurrentOpening() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Noida, India",
      type: "Full Time",
    },
    {
      title: "Backend Developer (Node.js)",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "UI/UX Designer",
      location: "Gurgaon, India",
      type: "Part Time",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-16">
      {/* Center Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Current Openings
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mt-2">
          Join Our Team & Grow With Us
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {job.title}
            </h3>

            <p className="text-gray-600 mt-2">{job.location}</p>
            <p className="text-gray-600">{job.type}</p>

            <button className="mt-5 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
