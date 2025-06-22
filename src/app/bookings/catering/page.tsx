"use client";

import Nav from "@/app/components/Nav";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const [guestCount, setGuestCount] = useState<number>(50);
  const [menu, setMenu] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const menuOptions = [
    "Jollof Rice",
    "Fried Rice",
    "Egusi Soup",
    "Ofada & Sauce",
    "Grilled Chicken",
    "Small Chops",
    "Moi Moi",
    "Amala & Ewedu",
    "Drinks & Juice",
  ];

  const toggleMenu = (item: string) => {
    setMenu((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const estimate = guestCount * (menu.length ? 2500 : 0); // ₦2500 per guest if menu is selected

  return (
    <>
      <Nav />
      <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
        <button
          className="inline-block mb-8 text-[#C49A6C] hover:underline"
          onClick={() => router.back()}
        >
          ← go back
        </button>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#3E2F21] mb-2">
            🍲 Book Catering Service
          </h1>
          <p className="text-[#5C3B1E] mb-6">
            Choose your event type, customize your menu, and we will handle the
            rest.
          </p>
          <form className="grid gap-6">
            {/* Event type */}
            <div>
              <label className="block text-sm font-semibold text-[#3E2F21] mb-2">
                Select Event Type
              </label>
              <select
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-[#3E2F21]"
                defaultValue="Wedding"
              >
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Burial</option>
                <option>Corporate</option>
                <option>Others</option>
              </select>
            </div>

            {/* Guest count */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Number of Attendees
              </label>
              <input
                type="number"
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                min={10}
              />
            </div>

            {/* Menu selection */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Menu Selection
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {menuOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleMenu(item)}
                    className={`p-3 rounded-xl border text-sm cursor-pointer ${
                      menu.includes(item)
                        ? "bg-[#ff6f61] text-white border-[#ff6f61]"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & time */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Delivery Date
                </label>
                <input
                  type="date"
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Delivery Time
                </label>
                <input
                  type="time"
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Delivery Address
              </label>
              <textarea
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                placeholder="Street, city, landmark..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Special Instructions
              </label>
              <textarea
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                placeholder="Anything we should know?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Cost summary */}
            <div className="mt-4 bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">
                Estimated Total:{" "}
                <span className="text-[#ff6f61]">
                  ₦{estimate.toLocaleString()}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Based on ₦2500 per guest and selected menu.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full bg-[#ff6f61] text-white py-3 rounded-xl font-semibold hover:bg-[#e35b4f] transition"
            >
              Confirm Catering Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
