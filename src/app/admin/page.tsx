"use client";
import Link from "next/link";
import NavBar from "../components/Nav";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const adminSections = [
    {
      name: "📦 Manage Store Products",
      description: "Upload, edit, and delete products in the marketplace.",
      href: "/admin/store-products",
    },
    {
      name: "📋 View Booking Orders",
      description: "Review all event, catering, and rental bookings.",
      href: "/admin/booking-orders",
    },
    {
      name: "👥 User & Order Management",
      description: "View all users and their complete order history.",
      href: "/admin/users",
    },
    {
      name: "🎁 Edit Combo Deals",
      description: "Update available packages and bundled deals.",
      href: "/admin/combo-deals",
    },
    {
      name: "🖼️ Upload to Gallery",
      description: "Add pictures to the event gallery for client inspiration.",
      href: "/admin/gallery",
    },
  ];

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
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#3E2F21] mb-8">
            Admin Dashboard
          </h1>

          <div className="grid sm:grid-cols-2 gap-6">
            {adminSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="border border-[#C49A6C] hover:shadow-lg transition p-6 rounded-xl bg-[#FFF3E5] text-[#3E2F21]"
              >
                <h2 className="text-lg font-bold mb-2">{section.name}</h2>
                <p className="text-sm text-[#5C3B1E]">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
