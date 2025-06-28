"use client";
import NavBar from "@/app/components/Nav";
import { useState } from "react";
import { useRouter } from "next/navigation";
type ComboDeal = {
  id: number;
  name: string;
  price: number;
  type: string;
  items: string[];
  active: boolean;
};

export default function AdminComboDealsPage() {
  const router = useRouter();

  const [comboDeals, setComboDeals] = useState<ComboDeal[]>([
    {
      id: 1,
      name: "Wedding Deluxe",
      price: 150000,
      type: "Wedding",
      items: ["3-tier Cake", "Catering for 100", "Decoration", "Live Band"],
      active: true,
    },
    {
      id: 2,
      name: "Birthday Bash",
      price: 150000,
      type: "Birthday",
      items: ["2-tier Cake", "Balloons", "Jollof Rice Tray", "Party Packs"],
      active: true,
    },
    {
      id: 3,
      name: "funeral deal",
      price: 150000,
      type: "burial",
      items: [
        "Full catering (swallow & rice dishes)",
        "Burial signage & floral arrangements",
        "MC or announcer (optional)",
        "Party Packs",
      ],

      active: true,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    items: "",
  });

  const handleAddCombo = (e: React.FormEvent) => {
    e.preventDefault();
    const newCombo: ComboDeal = {
      id: Date.now(),
      name: formData.name,
      price: Number(formData.price),
      type: formData.type,
      items: formData.items.split(",").map((i) => i.trim()),
      active: true,
    };
    setComboDeals([newCombo, ...comboDeals]);
    setFormData({ name: "", price: "", type: "", items: "" });
  };

  const toggleStatus = (id: number) => {
    setComboDeals((prev) =>
      prev.map((deal) =>
        deal.id === id ? { ...deal, active: !deal.active } : deal
      )
    );
  };

  const handleDelete = (id: number) => {
    setComboDeals((prev) => prev.filter((deal) => deal.id !== id));
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#FFF8F3] py-10 px-6 sm:px-10 lg:px-20">
        <button
          className="inline-block mb-8 text-[#C49A6C] hover:underline cursor-pointer"
          onClick={() => router.back()}
        >
          ← go back
        </button>
        <h1 className="text-3xl font-bold text-[#3E2F21] mb-6">
          Edit Combo Deals
        </h1>

        {/* add combo deal */}
        <form
          onSubmit={handleAddCombo}
          className="bg-white p-6 rounded-2xl border border-[#E7C9A9] shadow-md space-y-4 mb-10"
        >
          <h2 className="text-2xl font-bold text-[#3E2F21] mb-2">
            Add New Combo Deal
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Combo Name */}
            <div>
              <label className="block mb-2 font-medium text-[#3E2F21]">
                Combo Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g. Birthday Delight"
                className="w-full border border-[#D9BFA5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-2 font-medium text-[#3E2F21]">
                Price (₦)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                placeholder="e.g. 50000"
                className="w-full border border-[#D9BFA5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
                required
              />
            </div>

            {/* Combo Type */}
            <div>
              <label className="block mb-2 font-medium text-[#3E2F21]">
                Combo Type
              </label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                placeholder="e.g. Wedding, Birthday, Burial"
                className="w-full border border-[#D9BFA5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
                required
              />
            </div>

            {/* Items */}
            <div>
              <label className="block mb-2 font-medium text-[#3E2F21]">
                Included Items
              </label>
              <input
                type="text"
                name="items"
                value={formData.items}
                onChange={(e) =>
                  setFormData({ ...formData, items: e.target.value })
                }
                placeholder="e.g. Cake, Drinks, Canopy"
                className="w-full border border-[#D9BFA5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
                required
              />
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="w-fit px-5 bg-[#000] text-white py-3 rounded-lg font-semibold hover:bg-gray-500 cursor-pointer"
            >
              Add Combo Deal
            </button>
          </div>
        </form>

        {/* Combo Deals Grid */}
        <h1 className="text-3xl font-bold text-[#3E2F21] mb-6">Combo Deals</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comboDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl border border-[#E7C9A9] shadow-md overflow-hidden"
            >
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-[#3E2F21]">
                    {deal.name}
                  </h3>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      deal.active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {deal.active ? "Active" : "Hidden"}
                  </span>
                </div>
                <p className="text-sm">
                  {deal.type} Combo Starts from:{" "}
                  {deal.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                    minimumFractionDigits: 0,
                  })}
                </p>

                <ul className="list-disc list-inside text-sm text-[#5C3B1E] space-y-1">
                  {deal.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-3">
                  <button
                    onClick={() => toggleStatus(deal.id)}
                    className="text-sm text-[#C49A6C] hover:underline cursor-pointer px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200"
                  >
                    {deal.active ? "Hide" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleDelete(deal.id)}
                    className="text-sm text-red-500 hover:underline cursor-pointer px-3 py-1 rounded-full bg-red-100 hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
