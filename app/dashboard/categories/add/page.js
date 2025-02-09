"use client";

import { useState } from "react";
import {
  Upload,
  Image,
  List,
  XCircle,
  Tag,
  Archive,
  Box,
  Star,
  ShoppingCart,
  Layers,
} from "lucide-react";

const icons = [
  { name: "Tag", icon: Tag },
  { name: "Archive", icon: Archive },
  { name: "Box", icon: Box },
  { name: "Star", icon: Star },
  { name: "ShoppingCart", icon: ShoppingCart },
  { name: "Layers", icon: Layers },
];

export default function AddCategory() {
  const [category, setCategory] = useState({
    name: "",
    image: null,
    icon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategory({
        ...category,
        image: { file, preview: URL.createObjectURL(file) },
      });
    }
  };

  const removeImage = () => {
    setCategory({ ...category, image: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Category Data:", category);
    alert("Category added successfully!");
  };

  return (
    <div className="max-w-8xl mx-auto p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-foreground/ mb-4 flex items-center gap-2">
        <List size={24} /> Add Category
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg"
      >
        {/* Left Side - Inputs */}
        <div className="space-y-4 bg-background p-6 py-10 rounded-lg">
          <div className="flex items-center gap-2">
            <Tag size={20} className="text-foreground/50" />
            <input
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
              required
              placeholder="Category Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <Layers size={20} className="text-foreground/50" />
            <select
              name="icon"
              value={category.icon}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select Icon</option>
              {icons.map(({ name }) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-accent text-white hover:scale-95 transition-all p-2 rounded-md hover:bg-accent"
            >
              Add Category
            </button>
          </div>
        </div>

        {/* Right Side - Image Upload */}
        <div className="flex flex-col items-center justify-center bg-background p-6 rounded-lg border-dashed border-2 border-foreground/10">
          {category.image ? (
            <div className="relative group">
              <img
                src={category.image.preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                onClick={removeImage}
              >
                <XCircle size={16} />
              </button>
            </div>
          ) : (
            <label className="mt-4 flex items-center cursor-pointer text-accent/60">
              <Upload size={20} />
              <span className="ml-2">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
        </div>
      </form>
    </div>
  );
}
