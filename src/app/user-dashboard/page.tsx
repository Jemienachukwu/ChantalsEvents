"use client";
import { useState } from "react";
import NavBar from "../components/Nav";
import { useRouter } from "next/navigation";

const userData = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+234 801 234 5678",
  address: "Owerri, Imo State",
};

const orderHistory = [
  {
    id: "EVT-001",
    type: "Event Booking",
    title: "Birthday Party",
    date: "2025-05-01",
    status: "Completed",
    total: 125000,
  },
  {
    id: "CKG-002",
    type: "Catering",
    title: "Wedding Catering - 150 Guests",
    date: "2025-04-15",
    status: "Completed",
    total: 300000,
  },
  {
    id: "RTL-003",
    type: "Rental",
    title: "Canopy & Chairs",
    date: "2025-03-20",
    status: "Pending",
    total: 45000,
  },
  {
    id: "PRD-004",
    type: "Product",
    title: "Meat Pie Box",
    date: "2025-06-10",
    status: "Delivered",
    total: 4000,
  },
];

export default function UserDashboard() {
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // You can add API call logic here
    alert("Profile updated successfully!");
    setEditing(false);
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
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-[#3E2F21] mb-6">
            User Dashboard
          </h1>

          {/* Profile Section */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="">
              <label className="font-semibold text-[#3E2F21] block mb-1">
                Full Name
              </label>
              <input
                name="name"
                disabled={!editing}
                value={formData.name}
                onChange={handleChange}
                className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
              />
            </div>
            <div>
              <label className="font-semibold text-[#3E2F21] block mb-1">
                Email
              </label>
              <input
                name="email"
                disabled={!editing}
                value={formData.email}
                onChange={handleChange}
                //   className="w-full border px-3 py-2 rounded-lg text-sm"
                className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
              />
            </div>
            <div>
              <label className="font-semibold text-[#3E2F21] block mb-1">
                Phone
              </label>
              <input
                name="phone"
                disabled={!editing}
                value={formData.phone}
                onChange={handleChange}
                //   className="w-full border px-3 py-2 rounded-lg text-sm"
                className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
              />
            </div>
            <div>
              <label className="font-semibold text-[#3E2F21] block mb-1">
                Address
              </label>
              <input
                name="address"
                disabled={!editing}
                value={formData.address}
                onChange={handleChange}
                //   className="w-full border px-3 py-2 rounded-lg text-sm"
                className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
              />
            </div>
          </div>

          <div className="text-right mb-6">
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="bg-[#C49A6C] text-white px-6 py-2 rounded-xl hover:bg-[#b68654] cursor-pointer"
              >
                Edit Profile
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 cursor-pointer"
              >
                Save Changes
              </button>
            )}
          </div>

          {/* Order History */}
          <h2 className="text-2xl font-semibold text-[#3E2F21] mb-4">
            Order History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border rounded-lg">
              <thead>
                <tr className="bg-[#C49A6C] text-white">
                  <th className="text-left px-4 py-2">Order ID</th>
                  <th className="text-left px-4 py-2">Type</th>
                  <th className="text-left px-4 py-2">Title</th>
                  <th className="text-left px-4 py-2">Date</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.type}</td>
                    <td className="px-4 py-2">{order.title}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">{order.status}</td>
                    <td className="px-4 py-2">
                      ₦{order.total.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
