"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCircleFill } from "react-icons/bs";

export default function HomeHero() {
  const slides = [
    {
      id: 1,
      heading: "Synclink Technologies",
      shortDesc: "Your partner in IT & Software Solutions",
      fullDesc:
        "We provide full-stack development, consultancy, and modern technology solutions tailored to your business needs.",
      buttonText: "Contact Us",
      image:
        "https://img.freepik.com/premium-vector/programming-courses-web-design-concept-with-people-characters-illustration_9209-4586.jpg",
    },
    {
      id: 2,
      heading: "Innovative Solutions",
      shortDesc: "Transforming your ideas into reality",
      fullDesc:
        "Our expert team helps you design, develop, and deploy cutting-edge applications with best practices and modern tech stack.",
      buttonText: "Contact Us",
      image:
        "https://blog.portalpos.com.br/wp-content/uploads/2021/06/o-que-e-internet-das-coisas.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full flex flex-col-reverse md:flex-row overflow-hidden">
      {/* Text Area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-24 bg-linear-to-b md:bg-blue-500 from-blue-700/90 to-blue-500/80 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
          {slide.heading}
        </h1>
        <h2 className="text-lg md:text-2xl font-medium mb-4">{slide.shortDesc}</h2>
        <p className="text-gray-100 text-sm md:text-base mb-6">{slide.fullDesc}</p>

        {/* Contact Button */}
        <div className="flex justify-center md:justify-start">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition w-max"
          >
            {slide.buttonText}
          </Link>
        </div>

        {/* Mobile dots below button */}
        <div className="flex gap-4 justify-center mt-4 md:hidden">
          {slides.map((s, i) => (
            <BsCircleFill
              key={s.id}
              size={currentSlide === i ? 20 : 14}
              className={`cursor-pointer transition-all ${
                currentSlide === i ? "text-white" : "text-white/50"
              }`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 relative aspect-3/2 md:h-screen">
        <Image
          src={slide.image}
          alt={slide.heading}
          fill
          className="object-cover"
        />
        {/* Desktop gradient overlay */}
        <div className="absolute inset-0 hidden md:block bg-linear-to-b from-blue-700/70 via-blue-500/40 to-transparent"></div>
      </div>

      {/* Desktop dots at bottom */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 gap-4 z-10">
        {slides.map((s, i) => (
          <BsCircleFill
            key={s.id}
            size={currentSlide === i ? 6 : 4}
            className={`cursor-pointer transition-all ${
              currentSlide === i ? "text-white" : "text-white/50"
            }`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
