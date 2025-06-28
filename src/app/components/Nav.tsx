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
          <div className="flex-1 flex justify-end gap-2 items-center">
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                  fill="#323544"
                />
                <path
                  d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                  fill="#323544"
                />
              </svg>
            </Link>
            <Link
              href="/cart"
              className="bg-[#F1F1F1] px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-[#FFEFE3] transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.56641 4C1.56641 3.58579 1.90219 3.25 2.31641 3.25H3.49696C4.61854 3.25 5.56885 4.07602 5.72504 5.18668L5.7862 5.62161H19.7507C21.3714 5.62161 22.4605 7.28344 21.8137 8.76953L19.1464 14.8979C18.789 15.719 17.9788 16.25 17.0833 16.25L7.72179 16.25C6.60021 16.25 5.6499 15.424 5.49371 14.3133L4.23965 5.39556C4.18759 5.02534 3.87082 4.75 3.49696 4.75H2.31641C1.90219 4.75 1.56641 4.41421 1.56641 4ZM5.99714 7.12161L6.9791 14.1044C7.03116 14.4747 7.34793 14.75 7.72179 14.75L17.0833 14.75C17.3818 14.75 17.6519 14.573 17.771 14.2993L20.4383 8.17092C20.6539 7.67556 20.2909 7.12161 19.7507 7.12161H5.99714Z"
                  fill="#323544"
                />
                <path
                  d="M6.03418 19.5C6.03418 18.5335 6.81768 17.75 7.78418 17.75C8.75068 17.75 9.53428 18.5335 9.53428 19.5C9.53428 20.4665 8.75078 21.25 7.78428 21.25C6.81778 21.25 6.03418 20.4665 6.03418 19.5Z"
                  fill="#323544"
                />
                <path
                  d="M16.3203 17.75C15.3538 17.75 14.5703 18.5335 14.5703 19.5C14.5703 20.4665 15.3538 21.25 16.3203 21.25C17.2868 21.25 18.0704 20.4665 18.0704 19.5C18.0704 18.5335 17.2868 17.75 16.3203 17.75Z"
                  fill="#323544"
                />
              </svg>
            </Link>
          </div>
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

            {loggedin ? (
              <div className="flex flex-col gap-2">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
                      fill="#323544"
                    />
                    <path
                      d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z"
                      fill="#323544"
                    />
                  </svg>
                </Link>
                <Link
                  href="/cart"
                  className="bg-[#F1F1F1] px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:bg-[#FFEFE3] transition"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.56641 4C1.56641 3.58579 1.90219 3.25 2.31641 3.25H3.49696C4.61854 3.25 5.56885 4.07602 5.72504 5.18668L5.7862 5.62161H19.7507C21.3714 5.62161 22.4605 7.28344 21.8137 8.76953L19.1464 14.8979C18.789 15.719 17.9788 16.25 17.0833 16.25L7.72179 16.25C6.60021 16.25 5.6499 15.424 5.49371 14.3133L4.23965 5.39556C4.18759 5.02534 3.87082 4.75 3.49696 4.75H2.31641C1.90219 4.75 1.56641 4.41421 1.56641 4ZM5.99714 7.12161L6.9791 14.1044C7.03116 14.4747 7.34793 14.75 7.72179 14.75L17.0833 14.75C17.3818 14.75 17.6519 14.573 17.771 14.2993L20.4383 8.17092C20.6539 7.67556 20.2909 7.12161 19.7507 7.12161H5.99714Z"
                      fill="#323544"
                    />
                    <path
                      d="M6.03418 19.5C6.03418 18.5335 6.81768 17.75 7.78418 17.75C8.75068 17.75 9.53428 18.5335 9.53428 19.5C9.53428 20.4665 8.75078 21.25 7.78428 21.25C6.81778 21.25 6.03418 20.4665 6.03418 19.5Z"
                      fill="#323544"
                    />
                    <path
                      d="M16.3203 17.75C15.3538 17.75 14.5703 18.5335 14.5703 19.5C14.5703 20.4665 15.3538 21.25 16.3203 21.25C17.2868 21.25 18.0704 20.4665 18.0704 19.5C18.0704 18.5335 17.2868 17.75 16.3203 17.75Z"
                      fill="#323544"
                    />
                  </svg>
                </Link>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
