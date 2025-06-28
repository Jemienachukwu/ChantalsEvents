"use client";
import { useState } from "react";

export default function AdminComboDeals() {
  const [comboDeals, setComboDeals] = useState([
    {
      id: 1,
      name: "Wedding Classic",
      description: "Elegant wedding setup for large ceremonies.",
      items: ["3-tier cake", "Catering for 100 guests", "DJ & Decor"],
      price: 300000,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    items: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCombo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCombo = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      items: formData.items.split(",").map((item) => item.trim()),
    };
    setComboDeals([newCombo, ...comboDeals]);
    setFormData({ name: "", description: "", price: "", items: "" });
  };

  const handleDelete = (id: number) => {
    setComboDeals(comboDeals.filter((deal) => deal.id !== id));
  };

  return (
    <div className="bg-[#FFF8F3] min-h-screen py-10 px-6 sm:px-10 lg:px-20">
      <h1 className="text-3xl font-bold text-[#3E2F21] mb-8">
        Manage Combo Deals
      </h1>

      {/* Add New Combo Form */}
      <form
        onSubmit={handleAddCombo}
        className="bg-white border border-[#E7C9A9] rounded-2xl shadow p-6 mb-10 space-y-4"
      >
        <h2 className="text-xl font-bold text-[#3E2F21] mb-4">
          Add New Combo Deal
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Combo Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
        />

        <input
          type="number"
          name="price"
          placeholder="Price (₦)"
          value={formData.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
          required
        />

        <textarea
          name="items"
          placeholder="List of items (comma-separated)"
          rows={2}
          value={formData.items}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
        />

        <button
          type="submit"
          className="bg-[#C49A6C] text-white px-6 py-2 rounded-full hover:bg-[#b68654]"
        >
          Add Combo
        </button>
      </form>

      {/* Combo List */}
      <div className="grid md:grid-cols-2 gap-6">
        {comboDeals.map((combo) => (
          <div
            key={combo.id}
            className="bg-white p-5 border border-[#E7C9A9] rounded-2xl shadow"
          >
            <h3 className="text-lg font-semibold text-[#3E2F21] mb-2">
              {combo.name}
            </h3>
            <p className="text-sm text-[#7A5C3D] mb-2">{combo.description}</p>
            <ul className="list-disc list-inside text-sm text-[#5C3B1E] mb-3">
              {combo.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-[#C49A6C] font-bold">
                ₦{combo.price.toLocaleString()}
              </span>
              <button
                className="text-sm text-red-600 hover:underline"
                onClick={() => handleDelete(combo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
