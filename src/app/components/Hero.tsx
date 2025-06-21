"use client";
import Lottie from "lottie-react";
import gif from "./lottie/Animation - 1750285171861.json";

const Hero = () => {
  return (
    <section className="relative bg-[#FFF8F3] text-[#3E2F21] h-[90vh] rounded-b-[3rem] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Confetti Animation Left */}
      <div className="absolute top-[30%] left-[10%] w-[180px] opacity-30 z-0 pointer-events-none">
        <Lottie animationData={gif} loop />
      </div>

      {/* Confetti Animation Right */}
      <div className="absolute top-[30%] right-[10%] w-[180px] opacity-30 z-0 pointer-events-none">
        <Lottie animationData={gif} loop />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <p className="text-sm uppercase tracking-wide font-semibold text-[#C49A6C] mb-3">
          Cakes • Catering • Celebrations
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          We <span className="text-[#C49A6C]">Bring Your Celebrations to</span>{" "}
          life
          <br />
          <span className="text-[#E85D75]">Memories.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#5C3B1E] max-w-2xl mx-auto mb-10">
          From delicious cakes to unforgettable décor and catering, we handle it
          all so you can enjoy the moment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/services"
            className="bg-[#C49A6C] text-white px-6 py-3 rounded-full shadow hover:bg-[#b68654] transition font-semibold"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="bg-white border border-[#E85D75] text-[#E85D75] px-6 py-3 rounded-full shadow hover:bg-[#ffe5ec] transition font-semibold"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
