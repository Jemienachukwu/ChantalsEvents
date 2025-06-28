"use client";
import { useState } from "react";
import image1 from "../../components/assets/marketplace.jpg";
import NavBar from "@/app/components/Nav";
import Image from "next/image";
import { useRouter } from "next/navigation";

const mockCartItems = [
  {
    id: 1,
    name: "Red Velvet Cupcakes",
    price: 3000,
    quantity: 2,
    image: image1,
  },
  {
    id: 2,
    name: "Mini Meat Pie Box",
    price: 4000,
    quantity: 1,
    image: image1,
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pay_on_delivery");
  const [notes, setNotes] = useState("");

  const totalAmount = mockCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      address,
      paymentMethod,
      notes,
      cart: mockCartItems,
      total: totalAmount,
    };
    console.log("Order Submitted:", payload);
    alert("Order placed successfully!");
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
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#3E2F21] mb-8">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Order Items */}
            <div>
              <h2 className="text-xl font-semibold text-[#3E2F21] mb-4">
                Your Order
              </h2>
              <div className="space-y-4">
                {mockCartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b border-gray-200 pb-3"
                  >
                    <div className="flex gap-4 items-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium text-[#3E2F21]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-[#5C3B1E]">
                          ₦{item.price.toLocaleString()} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="font-semibold text-[#3E2F21]">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
                <div className="text-right font-bold text-[#3E2F21] text-lg">
                  Total: ₦{totalAmount.toLocaleString()}
                </div>
              </div>
            </div>
            {/* Address */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Shipping Address
              </label>
              <textarea
                required
                rows={3}
                //   className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
                className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full address"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Payment Method
              </label>
              <select
                //   className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
                className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="pay_on_delivery">Pay on Delivery</option>
                <option value="card">Card Payment (Coming soon)</option>
                <option value="transfer">Bank Transfer</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Additional Notes
              </label>
              <textarea
                rows={2}
                //   className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
                className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Please deliver by 5pm, no onions in pie, etc."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="w-full bg-[#000] text-white py-3 rounded-lg font-semibold hover:bg-[#2c241b] cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
