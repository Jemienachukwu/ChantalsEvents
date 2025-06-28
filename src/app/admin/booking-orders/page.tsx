"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const mockBookings = [
  {
    id: "BK-001",
    type: "Birthday Combo",
    packageName: "Birthday Bash",
    items: ["Cake", "Balloons", "Drinks", "Party Hats"],
    attendees: 50,
    eventDate: "2025-07-20",
    location: "Owerri, Imo State",
    notes: "Theme: Blue & White",
    status: "Pending",
  },
  {
    id: "BK-002",
    type: "Custom Wedding Booking",
    packageName: "Wedding Classic",
    items: ["3-tier Cake", "Champagne", "Flowers", "DJ"],
    attendees: 150,
    eventDate: "2025-08-10",
    location: "Enugu, Nigeria",
    notes: "Bride allergic to peanuts",
    status: "Confirmed",
  },
];

export default function AdminBookingOrders() {
  const router = useRouter();
  const [bookings, setBookings] = useState(mockBookings);

  const handleStatusUpdate = (id: string, newStatus: string) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: newStatus } : b
    );
    setBookings(updated);
  };

  return (
    <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
      <button
        className="inline-block mb-8 text-[#C49A6C] hover:underline cursor-pointer"
        onClick={() => router.back()}
      >
        ← go back
      </button>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#3E2F21] mb-10 text-center">
          🗂️ Booking Orders
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-2xl shadow-lg p-6 border border-[#E7C9A9] hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#C49A6C]">
                    {booking.type}
                  </h2>
                  <p className="text-sm text-[#3E2F21]">
                    {booking.packageName}
                  </p>
                </div>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    booking.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : booking.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "Completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <ul className="text-sm text-[#3E2F21] mb-4 space-y-1">
                <li>
                  <strong>Order ID:</strong> {booking.id}
                </li>
                <li>
                  <strong>Date:</strong> {booking.eventDate}
                </li>
                <li>
                  <strong>Location:</strong> {booking.location}
                </li>
                <li>
                  <strong>Attendees:</strong> {booking.attendees}
                </li>
                <li>
                  <strong>Items:</strong> {booking.items.join(", ")}
                </li>
                <li>
                  <strong>Notes:</strong> {booking.notes}
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold">Update Status:</label>
                <select
                  value={booking.status}
                  onChange={(e) =>
                    handleStatusUpdate(booking.id, e.target.value)
                  }
                  className="border border-[#C49A6C] rounded-lg px-3 py-1 text-sm"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
