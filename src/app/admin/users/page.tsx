"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const mockUsers = [
  {
    id: "USR-001",
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+2348012345678",
    address: "Owerri, Imo State",
    totalOrders: 4,
    lastOrder: "2025-06-10",
    status: "Active",
  },
  {
    id: "USR-002",
    name: "David Obi",
    email: "david@obi.com",
    phone: "+2348098765432",
    address: "Enugu, Enugu State",
    totalOrders: 2,
    lastOrder: "2025-05-22",
    status: "Active",
  },
  {
    id: "USR-003",
    name: "Amina Yusuf",
    email: "amina@cakeshop.ng",
    phone: "+2347051112222",
    address: "Abuja, FCT",
    totalOrders: 0,
    lastOrder: null,
    status: "Inactive",
  },
];

export default function AdminUsers() {
  const router = useRouter();

  const [users, setUsers] = useState(mockUsers);

  const toggleStatus = (id: string) => {
    const updated = users.map((u) =>
      u.id === id
        ? {
            ...u,
            status: u.status === "Active" ? "Inactive" : "Active",
          }
        : u
    );
    setUsers(updated);
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
          👥 Registered Users
        </h1>

        <div className="overflow-x-auto rounded-xl shadow-md border border-[#EBD9BE] bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-[#C49A6C] text-white">
              <tr>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Email</th>
                <th className="text-left px-4 py-3">Phone</th>
                <th className="text-left px-4 py-3">Address</th>
                <th className="text-left px-4 py-3">Total Orders</th>
                <th className="text-left px-4 py-3">Last Order</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-[#FFFAF5]">
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.phone}</td>
                  <td className="px-4 py-3">{user.address}</td>
                  <td className="px-4 py-3">{user.totalOrders}</td>
                  <td className="px-4 py-3">
                    {user.lastOrder || (
                      <span className="text-gray-400">None</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className={`px-4 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-red-200 text-red-700 hover:bg-red-300"
                          : "bg-green-200 text-green-700 hover:bg-green-300"
                      } transition`}
                    >
                      {user.status === "Active" ? "Disable" : "Activate"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
