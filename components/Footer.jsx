import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-linear-to-r from-indigo-700 to-indigo-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Left Section */}
        <div className="flex-1 pr-0 md:pr-6 border-r md:border-white/30">
          <h2 className="text-2xl font-semibold mb-4">Synclink Technologies</h2>
          <p className="mb-2">📍 123 Tech Park, Noida, India</p>
          <p className="mb-2">📞 +91 98765 43210</p>
          <p className="mb-2">📧 info@synclinktech.com</p>
        </div>

        {/* Middle Section */}
        <div className="flex-1 px-0 md:px-6 border-r md:border-white/30">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
            <Link href="#" className="hover:underline">About Us</Link>
            <Link href="#" className="hover:underline">Careers</Link>
            <Link href="#" className="hover:underline">Services</Link>
            <Link href="#" className="hover:underline">Projects</Link>
            <Link href="#" className="hover:underline">Contact</Link>
            <Link href="#" className="hover:underline">Support</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 pl-0 md:pl-6 mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-3">Subscribe to get latest updates.</p>

          <div className="flex mb-4 items-center w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 bg-white text-black rounded-l-md outline-none w-full"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md border border-blue-500 flex items-center justify-center hover:bg-blue-700 transition">
              <FiSend size={20} />
            </button>
          </div>

          {/* Social Icons with Links */}
          <div className="flex gap-4 text-2xl mt-2">
            <a href="https://www.facebook.com/synclinktech" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-gray-300 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/synclinktech" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/synclinktech" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
            </a>
            <a href="https://twitter.com/synclinktech" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Synclink Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
