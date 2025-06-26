"use client";
import { useRouter, useSearchParams } from "next/navigation";
import image1 from "../../components/assets/marketplace.jpg";
import Image from "next/image";
import NavBar from "@/app/components/Nav";
const products = [
  {
    id: "1",
    name: "Chocolate Cupcake",
    price: 2500,
    image: image1,
    description:
      "Moist chocolate cupcake topped with rich buttercream frosting.",
    ingredients: [
      "Flour",
      "Cocoa Powder",
      "Eggs",
      "Sugar",
      "Butter",
      "Vanilla",
    ],
    inStock: true,
    quantity: "per piece",
  },
  {
    id: "2",
    name: "Vanilla Cake Slice",
    price: 3000,
    image: image1,
    description: "Soft and fluffy vanilla sponge with a hint of lemon zest.",
    ingredients: ["Flour", "Sugar", "Eggs", "Vanilla", "Butter"],
    inStock: true,
    quantity: "per slice",
  },
  {
    id: "3",
    name: "Meat Pie (Box of 4)",
    price: 4000,
    image: image1,
    description: "Golden crust, rich filling. Classic Nigerian meat pies.",
    ingredients: ["Flour", "Minced Meat", "Carrots", "Potatoes", "Butter"],
    inStock: false,
    quantity: "per box",
  },
];

export default function ProductDetails() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-10 text-red-600 font-semibold">Product not found.</div>
    );
  }

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
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <Image
            width={500}
            height={500}
            src={product.image}
            alt={product.name || "Product image"}
            className="w-full h-96 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#3E2F21] mb-2">
                {product.name}
              </h1>
              <p className="text-[#5C3B1E] mb-4 text-sm">
                {product.description}
              </p>

              <div className="mb-4">
                <span className="block font-semibold text-[#3E2F21]">
                  Price:
                </span>
                <span className="text-[#C49A6C] font-bold text-lg">
                  ₦{product.price.toLocaleString()} ({product.quantity})
                </span>
              </div>

              <div className="mb-4">
                <span className="block font-semibold text-[#3E2F21]">
                  Availability:
                </span>
                <span
                  className={
                    product.inStock ? "text-green-600" : "text-red-600"
                  }
                >
                  {product.inStock ? "In Stock" : "Currently Unavailable"}
                </span>
              </div>

              <div className="mb-4">
                <span className="block font-semibold text-[#3E2F21] mb-1">
                  Main Ingredients:
                </span>
                <ul className="list-disc list-inside text-sm text-[#5C3B1E]">
                  {product.ingredients.map((ingredient, idx) => (
                    <li key={idx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              disabled={!product.inStock}
              className={`mt-6 w-full px-6 py-3 rounded-full text-white font-semibold transition shadow-md ${
                product.inStock
                  ? "bg-[#C49A6C] hover:bg-[#b68654]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
