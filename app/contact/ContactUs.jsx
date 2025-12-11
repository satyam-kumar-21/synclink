"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full px-4 md:px-12 py-16 space-y-14 bg-blue-50">

      {/* HEADER */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-base text-gray-600">
          Have questions or want to work with us? We’d love to hear from you!
        </p>
      </div>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* CONTACT INFO */}
        <div className="p-6 bg-white shadow-lg rounded-2xl border border-gray-100 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Get in Touch</h2>
          <p className="text-sm text-gray-600">
            Feel free to reach out to us through any of the following methods.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaPhoneAlt size={24} className="text-blue-600" />
              <div>
                <h3 className="text-sm font-semibold">Phone</h3>
                <p className="text-sm text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope size={24} className="text-red-500" />
              <div>
                <h3 className="text-sm font-semibold">Email</h3>
                <p className="text-sm text-gray-600">info@yourcompany.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={24} className="text-green-600" />
              <div>
                <h3 className="text-sm font-semibold">Address</h3>
                <p className="text-sm text-gray-600">
                  21 Business Street, Sector 10, Noida, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="lg:col-span-2 p-6 shadow-lg rounded-2xl bg-white border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Send Us a Message
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 p-3 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="mt-1 p-3 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="mt-1 p-3 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="mt-1 p-3 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* MAP SECTION */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <iframe
          className="w-full h-64 md:h-96 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28033.31904897517!2d77.320955!3d28.572644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d2b955!2sSector%2010%2C%20Noida!5e0!3m2!1sen!2sin!4v0000000000"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}
