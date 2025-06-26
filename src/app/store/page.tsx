"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../components/Nav";
// import image from "../assets/marketplace.jpg";
import image1 from "../components/assets/marketplace.jpg";

import Image from "next/image";
import Link from "next/link";
const products = [
  {
    id: "1",
    name: "Chocolate Cupcake",
    price: 2500,
    image: image1,
    description:
      "Moist chocolate cupcake topped with rich buttercream frosting.",
  },
  {
    id: "2",
    name: "Vanilla Cake Slice",
    price: 3000,
    image: image1,
    description: "Soft and fluffy vanilla sponge with a hint of lemon zest.",
  },
  {
    id: "3",
    name: "Meat Pie (Box of 4)",
    price: 4000,
    image: image1,
    description: "Golden crust, rich filling. Classic Nigerian meat pies.",
  },
  {
    id: "4",
    name: "Chin Chin (500g)",
    price: 2000,
    image: image1,
    description: "Crispy and sweet bite-sized West African snack.",
  },
];

export default function Marketplace() {
  //   const router = useRouter();
  //   const [cart, setCart] = useState<string[]>([]);

  //   const handleAddToCart = (id: string) => {
  //     setCart((prev) => [...prev, id]);
  //     alert("Added to cart!");
  //   };

  return (
    <>
      <NavBar />
      <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#3E2F21]">
            Pastries & Baked Goods
          </h1>
          <p className="text-[#5C3B1E] mt-2 max-w-xl mx-auto">
            Explore our delicious handmade treats, perfect for your next
            celebration or personal indulgence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <Link href={`/store/store-product?productId=${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover cursor-pointer"
                />
              </Link>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#3E2F21]">
                    {product.name}
                  </h2>
                  <p className="text-sm text-[#5C3B1E] mt-1 mb-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-[#C49A6C] font-semibold text-base">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <button
                    // onClick={() => handleAddToCart(product.id)}
                    className="bg-[#C49A6C] text-white text-sm px-4 py-2 rounded-full hover:bg-[#b68654] cursor-pointer"
                  >
                    Add to Cart
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
