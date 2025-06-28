"use client";
import { useState } from "react";

export default function AdminStoreProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Red Velvet Cake",
      description: "Moist and rich red velvet cake with cream cheese frosting.",
      image: "/cakes/red-velvet.jpg",
      price: 8500,
      inStock: true,
      quantity: 12,
      category: "Cake",
      ingredients: ["Flour", "Sugar", "Eggs", "Red food coloring"],
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
    category: "",
    ingredients: "",
    inStock: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity),
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
    };
    setProducts([newProduct, ...products]);
    setFormData({
      name: "",
      description: "",
      image: "",
      price: "",
      quantity: "",
      category: "",
      ingredients: "",
      inStock: true,
    });
  };

  const toggleStock = (id: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, inStock: !product.inStock } : product
      )
    );
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-[#FFF8F3] min-h-screen py-10 px-6 sm:px-10 lg:px-20">
      <h1 className="text-3xl font-bold text-[#3E2F21] mb-8">
        Manage Store Products
      </h1>

      {/* Add Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="bg-white p-6 rounded-2xl border border-[#E7C9A9] shadow-md space-y-4 mb-12"
      >
        <h2 className="text-xl font-semibold text-[#3E2F21] mb-2">
          Add Product
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="border p-2 rounded-lg"
            required
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-2 rounded-lg"
            required
          />
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price (₦)"
            className="border p-2 rounded-lg"
            required
          />
          <input
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="border p-2 rounded-lg"
            required
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category (optional)"
            className="border p-2 rounded-lg"
          />
          <input
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (comma separated)"
            className="border p-2 rounded-lg"
          />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="inStock"
            checked={formData.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>

        <button
          type="submit"
          className="bg-[#C49A6C] text-white px-6 py-2 rounded-full hover:bg-[#b68654]"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-[#E7C9A9] rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-bold text-[#3E2F21]">
                {product.name}
              </h3>
              <p className="text-sm text-[#7A5C3D]">{product.description}</p>
              <p className="text-sm">
                <span className="font-semibold">Price:</span> ₦
                {product.price.toLocaleString()}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Stock:</span>{" "}
                {product.inStock ? "In Stock" : "Out of Stock"} (
                {product.quantity})
              </p>
              <p className="text-sm">
                <span className="font-semibold">Category:</span>{" "}
                {product.category || "N/A"}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Ingredients:</span>{" "}
                {product.ingredients.join(", ")}
              </p>
              <div className="flex justify-between items-center mt-3">
                <button
                  onClick={() => toggleStock(product.id)}
                  className={`text-sm px-3 py-1 rounded-full ${
                    product.inStock
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {product.inStock ? "Mark Out of Stock" : "Mark In Stock"}
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
