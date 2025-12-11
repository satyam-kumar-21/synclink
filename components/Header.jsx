"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
      const [menuOpen, setMenuOpen] = useState(false);

      return (
            <>
                  {/* Fixed Header */}
                  <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
                        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4 md:py-5">

                              {/* Logo Section */}
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
                                    <Link href="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
                                    <Link href="/careers" className="text-gray-700 hover:text-blue-500">Careers</Link>
                                    {/* <Link href="/team" className="text-gray-700 hover:text-blue-500">Our Team</Link> */}
                                    <Link href="/technology" className="text-gray-700 hover:text-blue-500">Technologies</Link>

                                    <Link
                                          href="/contact"
                                          className="border border-blue-400 text-blue-400 px-5 py-2 rounded-full hover:bg-blue-50 transition"
                                    >
                                          Contact Us
                                    </Link>
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
                        {menuOpen && (
                              <div className="md:hidden bg-white shadow-md w-full px-6 py-4 absolute top-full left-0">
                                    <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-500">About Us</Link>
                                    <Link href="/careers" className="block py-2 text-gray-700 hover:text-blue-500">Careers</Link>
                                    {/* <Link href="/team" className="block py-2 text-gray-700 hover:text-blue-500">Our Team</Link> */}
                                    <Link href="/technology" className="block py-2 text-gray-700 hover:text-blue-500">Technology</Link>
                                    <Link
                                          href="/contact"
                                          className="block py-2 border border-blue-400 text-blue-400 rounded-full text-center mt-2 hover:bg-blue-50 transition"
                                    >
                                          Contact Us
                                    </Link>
                              </div>
                        )}
                  </header>

                  {/* Push content below header */}
                  <div className="h-20 md:h-21"></div>
            </>
      );
}

export default Header;
