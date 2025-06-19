"use client";

import React from "react";
import gif from "./lottie/Animation - 1750331004708.json";
import Lottie from "lottie-react";

const SubHero = () => {
  return (
    <div>
      {" "}
      <section className="bg-[#FFEFE3] py-20 px-6">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-around gap-12">
          {/* Circle Button (Video Play) */}
          <div className="flex-shrink-0">
            <div className="w-[400px]">
              <Lottie animationData={gif} loop={true} />
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#3E2F21] mb-6 leading-tight">
              We Plan. We Bake. We Cook. You Celebrate.
            </h1>
            <p className="text-lg text-[#5C3B1E] mb-8">
              From weddings and birthdays to burials and naming ceremonies — we
              deliver delicious food, beautiful cakes, and unforgettable decor
              for every celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/booking"
                className="bg-[#C49A6C] text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-[#b98d56] transition"
              >
                Book an Event
              </a>
              <a
                href="/services"
                className="text-[#3E2F21] text-sm font-medium inline-flex items-center hover:underline"
              >
                View Services →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubHero;
