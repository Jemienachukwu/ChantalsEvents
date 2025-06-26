"use client";

import Link from "next/link";
import NavBar from "../components/Nav";

const categories = [
  {
    title: "Event Planning",
    desc: "Weddings, birthdays, burials and more.",
    href: "/bookings/event",
    emoji: "🎉",
  },
  {
    title: "Catering",
    desc: "Delicious Nigerian meals for your guests.",
    href: "/bookings/catering",
    emoji: "🍲",
  },
  {
    title: "Cake Orders",
    desc: "Custom cakes baked and designed to delight.",
    href: "/bookings/cake",
    emoji: "🎂",
  },
  {
    title: "Rentals",
    desc: "Chairs, canopies, décor, speakers, and more.",
    href: "/bookings/rentals",
    emoji: "🪑",
  },
];

export default function BookingHub() {
  return (
    <>
      <NavBar />
      <main className="relative bg-[#FAF8F5] min-h-screen">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-[#fff0e6] to-[#ffe6ec] rounded-b-[50%] z-0"></div>

        <section className="relative z-10 max-w-6xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#222] mb-2">
            Start Planning Your Special Day
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Choose a service to begin booking. Whether it’s a wedding, birthday,
            or full event, we’ve got you covered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border"
                key={i}
              >
                <Link href={cat.href} className="block">
                  <div className="text-4xl mb-3">{cat.emoji}</div>
                  <h2 className="text-xl font-semibold text-[#222] mb-1">
                    {cat.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 bg-white py-10 mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#333] mb-4">
            Not sure where to start?
          </h3>
          <p className="text-gray-600 mb-4">
            We can guide you through the process.
          </p>
          <Link
            href="/services"
            className="inline-block bg-[#ff6f61] text-white px-6 py-2 rounded-full hover:bg-[#e35b4f] transition"
          >
            View All Services
          </Link>
        </section>
      </main>
    </>
  );
}
