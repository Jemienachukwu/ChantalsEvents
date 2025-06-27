"use client";
import { useState } from "react";

const initialCart = [
  {
    id: "prd-1",
    name: "Vanilla Cupcake",
    price: 1500,
    quantity: 2,
    description: "Soft and fluffy vanilla cupcake with cream topping",
    image: "/images/cupcake.jpg",
  },
  {
    id: "prd-2",
    name: "Party Jollof Tray",
    price: 12000,
    quantity: 1,
    description: "Jollof rice with chicken, salad, and plantain",
    image: "/images/jollof.jpg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id: string, qty: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-[#3E2F21] mb-6">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center gap-4 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#3E2F21]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-sm">Qty:</label>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-16 border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                      <span className="ml-auto text-sm font-semibold text-[#3E2F21]">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between items-center border-t pt-4">
              <span className="text-lg font-semibold text-[#3E2F21]">
                Total:
              </span>
              <span className="text-xl font-bold text-[#C49A6C]">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-[#C49A6C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b68654] transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
