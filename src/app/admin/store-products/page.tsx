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
  const [showForm, setShowForm] = useState(false);
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

  const openForm = (product: Product | null = null) => {
    setEditProduct(product);
    setShowForm(true);
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
      ingredients: ingredientsArray, // <-- NEW
    };

    const updatedList = editProduct
      ? products.map((p) => (p.id === editProduct.id ? newProduct : p))
      : [newProduct, ...products];

    setProducts(updatedList);
    setShowForm(false);
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
              🛍️ Store Products
            </h1>
            <button
              onClick={() => openForm()}
              className="w-fit px-5 bg-[#000] text-white py-3 rounded-lg font-semibold hover:bg-gray-500 cursor-pointer"
            >
              + Add Product
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {paginated.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E7C9A9] rounded-2xl shadow hover:shadow-md transition p-4"
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
                    <button
                      onClick={() => openForm(product)}
                      className="bg-[#C49A6C] text-white px-4 py-1 rounded-full text-xs hover:bg-[#b68654] cursor-pointer"
                    >
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

        {/* Modal Form */}
        {showForm && (
          <div
            onClick={() => {
              setShowForm(false);
              setEditProduct(null);
            }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <form
              onClick={(e) => e.stopPropagation()}
              onSubmit={handleFormSubmit}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto space-y-4"
            >
              <h2 className="text-xl font-bold text-[#3E2F21]">
                {editProduct ? "Edit Product" : "Add New Product"}
              </h2>

              <div>
                <label className="block text-sm font-semibold text-[#3E2F21] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editProduct?.name || ""}
                  required
                  className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                  placeholder="Product Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3E2F21] mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={editProduct?.image || ""}
                  placeholder="https://example.com/image.jpg"
                  className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3E2F21] mb-1">
                  Price (₦)
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  defaultValue={editProduct?.price || ""}
                  className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3E2F21] mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={editProduct?.description || ""}
                  rows={3}
                  className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                  placeholder="Product description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3E2F21] mb-1">
                  Ingredients (comma-separated)
                </label>
                <textarea
                  name="ingredients"
                  defaultValue={editProduct?.ingredients?.join(", ") || ""}
                  placeholder="e.g. Flour, Sugar, Butter"
                  rows={2}
                  className="w-full border-none px-3 py-2 bg-[#F1F1F1]  text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="inStock"
                  defaultChecked={editProduct?.inStock || false}
                />
                <label className="text-sm text-[#3E2F21]">In Stock</label>
              </div>

              <div className="flex justify-between flex-col gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditProduct(null);
                  }}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-400 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full bg-[#000] text-white py-3 rounded-lg font-semibold hover:bg-gray-500 cursor-pointer"
                >
                  {editProduct ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
