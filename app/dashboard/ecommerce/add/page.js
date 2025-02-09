"use client";

import { useState } from "react";
import {
  Upload,
  Image,
  DollarSign,
  Package,
  List,
  XCircle,
} from "lucide-react";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setProduct({ ...product, images: [...product.images, ...imagePreviews] });
  };

  const removeImage = (index) => {
    setProduct({
      ...product,
      images: product.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", product);
    alert("Product added successfully!");
  };

  return (
    <div className="max-w-8xl mx-auto  p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-foreground/ mb-4 flex items-center gap-2">
        <Package size={24} /> Add Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6  rounded-lg"
      >
        {/* Left Side - Inputs */}
        <div className="space-y-4 bg-background p-6 py-10 rounded-lg">
          <div className="flex items-center gap-2">
            <Package size={20} className="text-foreground/50" />
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              placeholder="Product Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <DollarSign size={20} className="text-foreground/50" />
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              placeholder="Price ($)"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <List size={20} className="text-foreground/50" />
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <textarea
            name="description"
            value={product.description}
            rows={4}
            onChange={handleChange}
            required
            placeholder="Product Description"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <p className="text-foreground/50">Do not exceed 100 characters when entering the product name.</p>
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-accent text-white hover:scale-95 transition-all p-2 rounded-md hover:bg-accent"
            >
              Add Product
            </button>
          </div>
        </div>

        {/* Right Side - Image Upload */}

        <div className="flex flex-col items-center justify-center bg-background p-6 rounded-lg border-dashed border-2 border-foreground/10 ">
          <div className="grid grid-cols-3 gap-3 w-full">
            {product.images.map((img, index) => (
              <div key={index} className="relative group">
                <img
                  src={img.preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                  onClick={() => removeImage(index)}
                >
                  <XCircle size={16} />
                </button>
              </div>
            ))}
          </div>

          <label className="mt-4 flex items-center cursor-pointer text-accent/60">
            <Upload size={20} />
            <span className="ml-2">Upload Images</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Full Width Submit Button */}
      </form>
    </div>
  );
}
