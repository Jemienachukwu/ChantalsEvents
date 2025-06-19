"use client";
import Lottie from "lottie-react";
import React from "react";
import gif from "./lottie/Animation - 1750285171861.json";

const Hero = () => {
  return (
    <div>
      <section className="relative  text-[#3a353e] h-[85vh] rounded-b-[3rem] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute top-[32%] left-[20%] w-[250px] opacity-40 z-0 pointer-events-none">
          <Lottie animationData={gif} loop={true} />
        </div>

        <div className="absolute top-[32%] right-[20%] w-[250px] opacity-40 z-0 pointer-events-none">
          <Lottie animationData={gif} loop={true} />
        </div>

        {/* Optional Background Shape */}
        {/* <div
        className="absolute -top-20 left-1/2 w-[500px] h-[500px] rounded-full opacity-10 transform -translate-x-1/2 z-0"
        style={{
          backgroundColor: "#E85D75",
          backgroundImage:
            "linear-gradient(white 3px, transparent 3px), linear-gradient(90deg, white 3px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      /> */}

        <div className="max-w-5xl mx-auto text-center z-10">
          {/* Small tagline */}
          <div className="text-sm uppercase tracking-wider font-semibold text-[#f94200] mb-3">
            🎉 Events | Cakes | Catering
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight relative">
            <span className="relative inline-block">
              <span className="text-[#f94200]">We</span> Bring Your Celebrations
              to <span className="text-[#f94200]">Life.</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            From delicious cakes to unforgettable décor and catering, we handle
            it all so you can enjoy the moment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/services"
              className="bg-[#f94200] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#f94200df] transition"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="bg-[#FFF] border border-[#f94200] text-[#E85D75] px-6 py-3 rounded-2xl shadow hover:bg-[#ffe3e8] transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
