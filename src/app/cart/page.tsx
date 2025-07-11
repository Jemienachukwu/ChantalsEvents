"use client";
import { useState } from "react";
import Image from "next/image";
import image1 from "../components/assets/marketplace.jpg";
import NavBar from "../components/Nav";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialCart = [
  {
    id: "prd-1",
    name: "Vanilla Cupcake",
    price: 1500,
    quantity: 2,
    description: "Soft and fluffy vanilla cupcake with cream topping",
    image: image1,
  },
  {
    id: "prd-2",
    name: "Party Jollof Tray",
    price: 12000,
    quantity: 1,
    description: "Jollof rice with chicken, salad, and plantain",
    image: image1,
  },
];

export default function CartPage() {
  const router = useRouter();

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

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold text-[#3E2F21] mb-6">
              Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-end justify-between border-b border-gray-200 pb-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-[#3E2F21]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.description}
                        </p>
                        <p className="text-md text-gray-600">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 h-fit">
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-16 text-center border border-gray-300 rounded-lg px-2 py-1"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-400 cursor-pointer rounded-xl border border-gray-300 "
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.7223 12.7585C14.7426 12.3448 14.4237 11.9929 14.01 11.9726C13.5963 11.9522 13.2444 12.2711 13.2241 12.6848L12.9999 17.2415C12.9796 17.6552 13.2985 18.0071 13.7122 18.0274C14.1259 18.0478 14.4778 17.7289 14.4981 17.3152L14.7223 12.7585Z"
                            fill="#323544"
                          />
                          <path
                            d="M9.98802 11.9726C9.5743 11.9929 9.25542 12.3448 9.27577 12.7585L9.49993 17.3152C9.52028 17.7289 9.87216 18.0478 10.2859 18.0274C10.6996 18.0071 11.0185 17.6552 10.9981 17.2415L10.774 12.6848C10.7536 12.2711 10.4017 11.9522 9.98802 11.9726Z"
                            fill="#323544"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.249 2C9.00638 2 7.99902 3.00736 7.99902 4.25V5H5.5C4.25736 5 3.25 6.00736 3.25 7.25C3.25 8.28958 3.95503 9.16449 4.91303 9.42267L5.54076 19.8848C5.61205 21.0729 6.59642 22 7.78672 22H16.2113C17.4016 22 18.386 21.0729 18.4573 19.8848L19.085 9.42267C20.043 9.16449 20.748 8.28958 20.748 7.25C20.748 6.00736 19.7407 5 18.498 5H15.999V4.25C15.999 3.00736 14.9917 2 13.749 2H10.249ZM14.499 5V4.25C14.499 3.83579 14.1632 3.5 13.749 3.5H10.249C9.83481 3.5 9.49902 3.83579 9.49902 4.25V5H14.499ZM5.5 6.5C5.08579 6.5 4.75 6.83579 4.75 7.25C4.75 7.66421 5.08579 8 5.5 8H18.498C18.9123 8 19.248 7.66421 19.248 7.25C19.248 6.83579 18.9123 6.5 18.498 6.5H5.5ZM6.42037 9.5H17.5777L16.96 19.7949C16.9362 20.191 16.6081 20.5 16.2113 20.5H7.78672C7.38995 20.5 7.06183 20.191 7.03807 19.7949L6.42037 9.5Z"
                            fill="#323544"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 h-fit">
            <h2 className="text-xl font-semibold text-[#3E2F21] mb-4">
              SUBTOTAL [{totalItems} ITEM{totalItems > 1 ? "S" : ""}]
            </h2>
            <p className="text-2xl font-bold mb-6">₦{total.toLocaleString()}</p>
            <Link href="/cart/check-out">
              <button className="w-full bg-[#000] text-white py-3 rounded-lg font-semibold hover:bg-[#2c241b] cursor-pointer">
                PROCEED TO CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
