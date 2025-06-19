"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const nav = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Events", link: "/events" },
    { name: "Bakery", link: "/bakery" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <nav className="w-full bg-white px-5 md:px-20 py-2 relative">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex-1">logo</div>
        <div className="flex gap-4 absolute left-1/2 transform -translate-x-1/2">
          {nav.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="cursor-pointer flex items-center gap-1"
            >
              <button
                className={`transition border-b-2 border-b-transparent hover:border-b-[#f94200] cursor-pointer
                  ${
                    pathname === item.link
                      ? "border-b-[#f94200] font-bold text-[#f94200]"
                      : ""
                  }
                `}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end gap-2 items-cente ">
          <Link
            href="/login"
            className="text-[#f94200] font-medium hover:underline px-3 py-1 rounded transition"
          >
            Login
          </Link>
          <Link href="/signup">
            <button className="bg-[#f94200] text-white font-semibold px-4 py-1.5 rounded-full shadow hover:bg-[#d63700] transition">
              Signup
            </button>
          </Link>
        </div>
      </div>

      {/* Hamburger for Mobile */}
      <div className="flex md:hidden items-center justify-between w-full">
        <div>logo</div>
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          &#9776;
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-opacity-40 backdrop-blur-xs flex"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end text-2xl mb-4"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            {nav.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`py-2 px-2 rounded transition ${
                  pathname === item.link
                    ? "bg-[#f94200] text-white font-bold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/login"
                className="text-[#f94200] font-medium hover:underline px-3 py-1 rounded transition"
              >
                Login
              </Link>
              <Link href="/signup">
                <button className="bg-[#f94200] text-white font-semibold px-4 py-1.5 rounded-full shadow hover:bg-[#d63700] transition w-full">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
