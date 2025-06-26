"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/components/Nav";

const rentalItems = [
  { name: "Canopies", unitPrice: 5000 },
  { name: "Chairs", unitPrice: 200 },
  { name: "Tables", unitPrice: 1000 },
  { name: "Sound System", unitPrice: 15000 },
  { name: "Lighting", unitPrice: 8000 },
  { name: "Coolers / Warmers", unitPrice: 2500 },
];

export default function BookRentals() {
  const router = useRouter();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleQuantityChange = (item: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [item]: qty }));
  };

  const calculateTotal = () => {
    return rentalItems.reduce((acc, item) => {
      const qty = quantities[item.name] || 0;
      return acc + qty * item.unitPrice;
    }, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = rentalItems
      .filter((item) => quantities[item.name] > 0)
      .map((item) => ({
        item: item.name,
        qty: quantities[item.name],
        subtotal: quantities[item.name] * item.unitPrice,
      }));

    const payload = {
      rentals: selected,
      eventDate,
      location,
      notes,
      total: calculateTotal(),
    };

    console.log("Rental Booking Submitted:", payload);
    alert("Rental booking submitted successfully!");
  };

  return (
    <>
      <NavBar />
      <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
        <button
          className="inline-block mb-8 text-[#C49A6C] hover:underline cursor-pointer"
          onClick={() => router.back()}
        >
          ← go back
        </button>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#3E2F21] mb-2">
            🪑 Book Rentals
          </h1>
          <p className="text-[#5C3B1E] mb-6">
            Select rental items you need for your event. We’ll handle delivery
            and setup.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rental Items */}
            <div>
              <label className="block text-sm font-semibold text-[#3E2F21] mb-2">
                Select Items & Quantity
              </label>
              <ul className="space-y-3">
                {rentalItems.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center bg-[#FFF3E5] rounded-lg px-3 py-2 text-sm text-[#5C3B1E]"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-[#9b7750]">
                        ₦{item.unitPrice.toLocaleString()} / unit
                      </span>
                    </div>
                    <input
                      type="number"
                      min={0}
                      value={quantities[item.name] || ""}
                      onChange={(e) =>
                        handleQuantityChange(item.name, Number(e.target.value))
                      }
                      className="w-20 border border-[#C49A6C] rounded-md px-2 py-1 text-sm text-center"
                      placeholder="0"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Date & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Delivery Address
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Plot 9, Wetheral Road, Owerri"
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Time of delivery, setup details, etc."
                className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Estimate */}
            <div className="mt-4 bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">
                Estimated Total:{" "}
                <span className="text-[#ff6f61]">
                  ₦{calculateTotal().toLocaleString()}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Based on item quantity × unit price.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="mt-6 w-full bg-[#ff6f61] text-white py-3 rounded-xl font-semibold hover:bg-[#e35b4f] transition"
              >
                Confirm Rental Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
