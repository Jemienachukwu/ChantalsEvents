"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dropdown from "./assets/down-arrow-5-svgrepo-com.svg";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Booking", href: "/bookings", hasDropdown: true },
  { name: "Store", href: "/store" },
  { name: "Contact", href: "/contact" },
];

const BookingDropdown = [
  { title: "Event Planning", href: "/bookings/event" },
  { title: "Catering", href: "/bookings/catering" },
  { title: "Cake Orders", href: "/bookings/cake" },
  { title: "Rentals", href: "/bookings/rentals" },
];

const loggedin = true;

export default function NavBar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBookingDropdown, setShowBookingDropdown] = useState(false);

  return (
    <nav className="w-full bg-white px-5 md:px-20 py-2 relative justify-center items-center z-50">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="text-xl font-bold text-[#E85D75]">Chantals</div>

        {/* nav links */}
        <div className="flex gap-8 absolute left-1/2 transform -translate-x-1/2 ">
          {navLinks.map((item, i) =>
            item.hasDropdown ? (
              <div className="relative group" key={i}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition ${
                    pathname === item.href ? "text-[#E85D75] font-semibold" : ""
                  } hover:text-[#E85D75]`}
                >
                  {item.name}{" "}
                  <span className="text-xs">
                    <Image
                      src={dropdown}
                      alt="Dropdown Icon"
                      width={16}
                      height={16}
                    />
                  </span>
                </Link>

                <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {BookingDropdown.map((service, j) => (
                    <Link
                      key={j}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E85D75] hover:text-white transition"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={i}
                href={item.href}
                className={`transition hover:text-[#E85D75] ${
                  pathname === item.href ? "text-[#E85D75] font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
        {/* signup links */}
        {loggedin ? (
          <Link
            href="/user-dashboard"
            className="bg-[#F1F1F1] px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-[#FFEFE3] transition"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                fill="#323544"
              />
              <path
                d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                fill="#323544"
              />
            </svg>
          </Link>
        ) : (
          <div className="flex-1 flex justify-end gap-2 items-center ">
            <Link
              href="/sign-in"
              className="text-[#E85D75] hover:underline font-medium"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="bg-[#E85D75] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#d94e66] transition"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
      {/* ham */}
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
            {/* {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`py-2 px-2 rounded transition ${
                  pathname === item.href
                    ? "bg-[#c4986c] text-white font-bold"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {item.name}
              </Link>
            ))} */}
            {navLinks.map((item, i) =>
              item.hasDropdown ? (
                <div className="relative group" key={i}>
                  <div className="flex justify-between w-full rounded ">
                    <Link
                      href={item.href}
                      className={`flex justify-between w-full rounded transition ${
                        pathname === item.href
                          ? "text-[#E85D75] font-semibold"
                          : ""
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}{" "}
                    </Link>
                    <Image
                      src={dropdown}
                      alt="Dropdown Icon"
                      onClick={() => setShowBookingDropdown((show) => !show)}
                      width={16}
                      height={16}
                    />
                  </div>
                  {showBookingDropdown && (
                    <div className="p-2">
                      {BookingDropdown.map((service, j) => (
                        <Link
                          key={j}
                          href={service.href}
                          className="block p-2  text-sm text-gray-700 hover:bg-[#E85D75] hover:text-white transition"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  href={item.href}
                  className={`transition hover:text-[#E85D75] ${
                    pathname === item.href ? "text-[#E85D75] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/sign-in"
                className="text-[#E85D75] font-medium hover:underline px-3 py-1 rounded transition"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="bg-[#c4986c] text-white font-semibold px-4 py-1.5 rounded-full shadow hover:bg-[#E85D75] transition w-full"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
