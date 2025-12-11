
import Image from "next/image";

export default function TechnologiesIntro() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-10 md:py-0 md:h-[60vh] px-4 md:px-16 bg-blue-500 text-white">
      {/* Left Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left md:pr-8 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Technologies We Work With
        </h2>
        <p className="text-white text-base md:text-lg">
          We build scalable, secure and high-performance digital solutions using 
          modern technologies trusted worldwide.
        </p>
        <p className="text-white text-base md:text-lg">
          From mobile apps to cloud platforms, we use the best tools to deliver 
          innovation at every step.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-60 md:h-80 relative mt-6 md:mt-0">
        <Image
          src="https://img.freepik.com/free-vector/gradient-api-illustration_23-2149378580.jpg"
          alt="Technologies Illustration"
          fill
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
