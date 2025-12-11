"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileLinks = [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/technologies", label: "Technologies" },
    { href: "/contact", label: "Contact Us", isButton: true },
  ];

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 md:py-5">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/fulllogo.png"
                alt="Synclink Technologies"
                width={210}
                height={80}
                className="w-auto h-12 cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.isButton
                    ? "border border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-50 transition"
                    : "text-gray-700 hover:text-blue-500"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
          }`}
        >
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)} // close after navigation
              className={`block text-center py-2 mx-6 rounded-lg transition-colors ${
                link.isButton
                  ? "border border-blue-400 text-blue-400 hover:bg-blue-50"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>

      {/* Push content below header */}
      <div className="h-20 md:h-21"></div>
    </>
  );
}

export default Header;
