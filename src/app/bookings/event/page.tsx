"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/Nav";

const predefinedEvents = [
  "Birthday",
  "Wedding",
  "Burial",
  "Conference Meeting",
  "Naming Ceremony",
  "Housewarming",
];

const optionalServices = [
  { name: "Catering", price: 50000 },
  { name: "Custom Cake", price: 30000 },
  { name: "Decoration", price: 40000 },
  { name: "MC / Host", price: 25000 },
  { name: "Photography", price: 35000 },
];

export default function BookEvent() {
  const router = useRouter();

  const [eventType, setEventType] = useState("Birthday");
  const [attendees, setAttendees] = useState(50);
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const calculateTotal = () => {
    const base = 10000; // base booking fee
    const serviceCost = selectedServices.reduce((acc, service) => {
      const s = optionalServices.find((s) => s.name === service);
      return acc + (s ? s.price : 0);
    }, 0);
    return base + serviceCost + attendees * 200; // charge 200 per guest
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      eventType,
      attendees,
      eventDate,
      location,
      selectedServices,
      notes,
      totalBill: calculateTotal(),
    };
    console.log("Event Booking Submitted:", payload);
    alert("Booking submitted successfully!");
  };

  return (
    <>
      <Nav />
      <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
        <button
          className="inline-block mb-8 text-[#C49A6C] hover:underline cursor-pointer"
          onClick={() => router.back()}
        >
          ← go back
        </button>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#3E2F21] mb-2">
            🎉 Book an Event
          </h1>
          <p className="text-[#5C3B1E] mb-6">
            Choose your event type, customize what you need, and we will handle
            the rest.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Type */}
            <div>
              <label className="block text-sm font-semibold text-[#3E2F21] mb-2">
                Select Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-[#3E2F21]"
              >
                {predefinedEvents.map((event) => (
                  <option key={event} value={event}>
                    {event}
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Services */}
            <div>
              <label className="block text-sm font-semibold text-[#3E2F21] mb-2">
                Additional Services
              </label>
              <ul className="space-y-2">
                {optionalServices.map((service) => (
                  <li
                    key={service.name}
                    className="flex justify-between items-center bg-[#FFF3E5] rounded-lg px-3 py-2 text-sm text-[#5C3B1E]"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.name)}
                        onChange={() => toggleService(service.name)}
                      />
                      {service.name}
                    </div>
                    <span>₦{service.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attendees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Number of Attendees
                </label>
                <input
                  type="number"
                  value={attendees}
                  onChange={(e) => setAttendees(Number(e.target.value))}
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                  min={1}
                  max={2000}
                />
              </div>

              {/* Event Date */}
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
            </div>

            {/* Location */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Event Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Owerri, Imo State"
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
              />
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
                placeholder="Themes, allergies, cultural specifics, etc."
                className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Cost summary */}
            <div className="mt-4 bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">
                Estimated Total:{" "}
                <span className="text-[#ff6f61]">
                  Estimated Total: ₦{calculateTotal().toLocaleString()}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Based on total services selected.
              </p>
            </div>
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="mt-6 w-full bg-[#ff6f61] text-white py-3 rounded-xl font-semibold hover:bg-[#e35b4f] transition"
              >
                Confirm Events Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
