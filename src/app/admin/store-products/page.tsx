"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import image1 from "../../components/assets/marketplace.jpg";
import NavBar from "@/app/components/Nav";
import { useRouter } from "next/navigation";
const existingProducts = [
  {
    id: "PRD-001",
    name: "chocolate Cupcake",
    image: image1,
    price: 1200,
    inStock: true,
    description: "Soft, creamy vanilla cupcakes topped with buttercream.",
    ingredients: [
      "Flour",
      "Cocoa Powder",
      "Eggs",
      "Sugar",
      "Butter",
      "Vanilla",
    ],
  },
  {
    id: "PRD-002",
    name: "Meat Pie Box (12pcs)",
    image: image1,

    price: 4000,
    inStock: true,
    description: "Golden meat pies stuffed with spicy beef filling.",
    ingredients: ["Flour", "Minced Meat", "Carrots", "Potatoes", "Butter"],
  },
  {
    id: "PRD-003",
    name: "Chocolate Cake Slice",
    image: image1,

    price: 1000,
    inStock: false,
    description: "Moist chocolate cake slice topped with dark ganache.",
    ingredients: ["Flour", "Sugar", "Eggs", "Vanilla", "Butter"],
  },
];
const ITEMS_PER_PAGE = 6;

export default function AdminStoreProducts() {
  const router = useRouter();
  const [products, setProducts] = useState(existingProducts);
  const [editProduct, setEditProduct] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [products.length, totalPages, currentPage]);

  const paginated = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  type Product = {
    id: string;
    name: string;
    image: string | StaticImageData;
    price: number;
    inStock: boolean;
    description: string;
    ingredients: string[]; // <-- NEW
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    const ingredientsArray = (data.ingredients as string)
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i); // Remove empty entries

    // If the image field is empty, use image1 (StaticImageData)
    // Otherwise, always use image1 for simplicity, or you can add logic to handle uploads
    const newProduct = {
      id: editProduct?.id || `PRD-${Date.now()}`,
      name: data.name as string,
      image: image1,
      price: parseFloat(data.price as string),
      inStock: data.inStock === "on",
      description: data.description as string,
      ingredients: ingredientsArray,
    };

    const updatedList = editProduct
      ? products.map((p) => (p.id === editProduct.id ? newProduct : p))
      : [newProduct, ...products];

    setProducts(updatedList);
    setEditProduct(null);
  };

  const toggleStock = (id: string) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, inStock: !p.inStock } : p
    );
    setProducts(updated);
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold text-[#3E2F21]">
              Manage Store Products
            </h1>
          </div>
          {/* form */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-6 rounded-2xl border border-[#E7C9A9] shadow-md space-y-4 mb-10"
          >
            <h2 className="text-xl font-semibold text-[#3E2F21]">
              Add New Product
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Product Name */}
              <div>
                <label className="block font-medium text-[#3E2F21] mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editProduct?.name || ""}
                  required
                  placeholder="e.g. Chocolate Cake"
                  className="w-full border border-[#D9BFA5] rounded-lg px-4 py-2 text-sm"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block font-medium text-[#3E2F21] mb-1">
                  Price (₦)
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={editProduct?.price || ""}
                  required
                  placeholder="e.g. 2500"
                  className="w-full border border-[#D9BFA5] rounded-lg px-4 py-2 text-sm"
                />
              </div>

              {/* Image URL */}
              <div className="sm:col-span-2">
                <label className="block font-medium text-[#3E2F21] mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={editProduct?.image || ""}
                  placeholder="https://example.com/image.jpg"
                  className="w-full border border-[#D9BFA5] rounded-lg px-4 py-2 text-sm"
                />
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className="block font-medium text-[#3E2F21] mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={editProduct?.description || ""}
                  placeholder="A soft and moist chocolate cake, perfect for any celebration."
                  rows={3}
                  className="w-full border border-[#D9BFA5] rounded-lg px-4 py-2 text-sm"
                />
              </div>

              {/* Ingredients */}
              <div className="sm:col-span-2">
                <label className="block font-medium text-[#3E2F21] mb-1">
                  Ingredients (comma-separated)
                </label>
                <textarea
                  name="ingredients"
                  defaultValue={editProduct?.ingredients?.join(", ") || ""}
                  placeholder="Flour, Sugar, Butter, Cocoa"
                  rows={2}
                  className="w-full border border-[#D9BFA5] rounded-lg px-4 py-2 text-sm"
                />
              </div>

              {/* In Stock Toggle */}
              <div className="flex items-center gap-2 sm:col-span-2 ">
                <input
                  type="checkbox"
                  name="inStock"
                  defaultChecked={editProduct?.inStock || false}
                  className="accent-[#C49A6C] cursor-pointer"
                />
                <label className="text-sm text-[#3E2F21] font-medium">
                  In Stock
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className=" text-right">
              <button
                type="submit"
                className="bg-[#000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
              >
                {editProduct ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>

          {/* Product Grid */}
          <h1 className="text-3xl font-extrabold text-[#3E2F21] mb-8">
            Store Products
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {paginated.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E7C9A9] rounded-xl shadow-md overflow-hidden transition p-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-[#C49A6C] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-[#3E2F21] mb-1">
                  ₦{product.price.toLocaleString()} / unit
                </p>
                <p className="text-xs text-[#5C3B1E] mb-3">
                  {product.description}
                </p>
                {product.ingredients && (
                  <ul className="text-xs text-[#5C3B1E] mb-3 list-disc list-inside">
                    {product.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                )}

                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.inStock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>

                  <div className="flex gap-2">
                    <button className="bg-[#C49A6C] text-white px-4 py-1 rounded-full text-xs hover:bg-[#b68654] cursor-pointer">
                      Edit
                    </button>
                    <button
                      onClick={() => toggleStock(product.id)}
                      className={`px-4 py-1 rounded-full text-xs font-semibold cursor-pointer ${
                        product.inStock
                          ? "bg-red-200 text-red-700 hover:bg-red-300"
                          : "bg-green-200 text-green-700 hover:bg-green-300"
                      }`}
                    >
                      {product.inStock ? "Disable" : "Enable"}
                    </button>
                    <button
                      onClick={() =>
                        setProducts(products.filter((p) => p.id !== product.id))
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentPage === i + 1
                    ? "bg-[#C49A6C] text-white"
                    : "bg-white border border-[#C49A6C] text-[#C49A6C]"
                }`}
                onClick={() => setCurrentPage(i + 1)}
                disabled={currentPage === i + 1}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
