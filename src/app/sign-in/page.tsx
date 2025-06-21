"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate submission
    console.log("Sign in Submitted", form);
    alert("Log in successful!");
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3]  p-4">
      <Link
        href="/"
        className="inline-block mb-8 text-[#C49A6C] hover:underline"
      >
        ← go back
      </Link>
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 m-auto ">
        <h2 className="text-3xl font-bold text-[#3E2F21] text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#3E2F21] mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
              placeholder="e.g. user@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3E2F21] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C49A6C] text-white font-semibold rounded-lg py-3 hover:bg-[#b68654] transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-[#5C3B1E] mt-4">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-[#C49A6C] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
