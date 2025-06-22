"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/Nav";

const cakeFlavors = [
  "Vanilla",
  "Chocolate",
  "Red Velvet",
  "Strawberry",
  "Coconut",
];
const cakeSizes = [
  { name: "Small", price: 10000 },
  { name: "Medium", price: 15000 },
  { name: "Large", price: 20000 },
];

export default function BookCake() {
  const router = useRouter();

  const [occasion, setOccasion] = useState("Birthday");
  const [flavor, setFlavor] = useState("Vanilla");
  const [size, setSize] = useState("Medium");
  const [tiers, setTiers] = useState(1);
  const [message, setMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [address, setAddress] = useState("");
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [imageLink, setImageLink] = useState("");

  //   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setReferenceImage(e.target.files?.[0] || null);
  //   };

  const calculateTotal = () => {
    const selectedSize = cakeSizes.find((s) => s.name === size);
    return (selectedSize?.price || 0) * tiers;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      occasion,
      flavor,
      size,
      tiers,
      message,
      deliveryDate,
      address,
      referenceImage,
      total: calculateTotal(),
    };
    console.log("Cake Booking Submitted:", payload);
    alert("Cake booking submitted successfully!");
  };

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
            🎂 Book a Custom Cake
          </h1>
          <p className="text-[#5C3B1E] mb-6">
            Choose your cake preferences and we will bake something perfect for
            your celebration.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Occasion */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
              >
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Other</option>
              </select>
            </div>

            {/* Flavor */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Cake Flavor
              </label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
              >
                {cakeFlavors.map((fl) => (
                  <option key={fl}>{fl}</option>
                ))}
              </select>
            </div>

            {/* Size & Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Cake Size
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                >
                  {cakeSizes.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Number of Tiers
                </label>
                <input
                  type="number"
                  value={tiers}
                  min={1}
                  onChange={(e) => setTiers(Number(e.target.value))}
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                />
              </div>
            </div>

            {/* Cake Message */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Message on Cake
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Happy Birthday Chidera!"
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
              />
            </div>

            {/* Upload Design */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Reference Image (Recommended)
              </label>
              <p className="text-[#3E2F21] text-sm">Upload or Paste Link</p>
              {/* Upload Field */}
              <div className="flex items-center gap-4 bg-[#FFF3E5] border border-[#C49A6C] p-3 rounded-lg mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setReferenceImage(e.target.files?.[0] || null)
                  }
                  className="text-sm text-[#3E2F21] w-full"
                />
                {referenceImage && (
                  <span className="text-green-600 text-sm truncate max-w-[60%]">
                    {referenceImage.name}
                  </span>
                )}
              </div>

              {/* OR Paste Link */}
              <input
                type="url"
                placeholder="Paste image link (optional)"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm placeholder:text-[#9f8d74]"
              />
            </div>

            {/* Delivery Date & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Delivery Date
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#3E2F21] mb-2">
                  Delivery Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Plot 9, Ikenegbu Layout, Owerri"
                  className="w-full border border-[#C49A6C] rounded-lg p-3 text-sm"
                />
              </div>
            </div>

            {/* Estimated Cost */}
            <div className="mt-4 bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-lg font-semibold">
                Estimated Total:{" "}
                <span className="text-[#ff6f61]">
                  ₦{calculateTotal().toLocaleString()}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Based on selected size and number of tiers.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="mt-6 w-full bg-[#ff6f61] text-white py-3 rounded-xl font-semibold hover:bg-[#e35b4f] transition"
              >
                Confirm Cake Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
