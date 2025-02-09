"use client";

import { useState } from "react";
import { Upload, XCircle, List, Tag, PlusCircle } from "lucide-react";

export default function AddAttribute() {
  const [attribute, setAttribute] = useState({
    name: "",
    values: "",
  });
  const [attributesList, setAttributesList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttribute({ ...attribute, [name]: value });
  };

  const handleAddAttribute = (e) => {
    e.preventDefault();
    if (attribute.name && attribute.values) {
      setAttributesList([...attributesList, { ...attribute }]);
      setAttribute({ name: "", values: "" });
    }
  };

  const handleRemoveAttribute = (index) => {
    setAttributesList(attributesList.filter((_, i) => i !== index));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-4xl py-12 w-full mx-auto p-6 rounded-lg mt-10 bg-white shadow-lg">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <List size={24} /> Add Attribute
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Enter the attribute name and multiple values separated by commas
            (e.g., Color: Red, Blue, Green).
          </p>
          <form
            onSubmit={handleAddAttribute}
            className="grid grid-cols-1 gap-6 rounded-lg"
          >
            {/* Attribute Name Input */}
            <div className="space-y-4 bg-background p-6 py-10 rounded-lg">
              <div className="flex items-center gap-2">
                <Tag size={20} className="text-foreground/50" />
                <input
                  type="text"
                  name="name"
                  value={attribute.name}
                  onChange={handleChange}
                  required
                  placeholder="Attribute Name (e.g., Color)"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Attribute Values Input */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="values"
                  value={attribute.values}
                  onChange={handleChange}
                  required
                  placeholder="Values (e.g., Red, Blue, Green)"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="col-span-1">
                <button
                  type="submit"
                  className="w-full bg-accent text-white hover:scale-95 transition-all p-2 rounded-md hover:bg-accent flex items-center justify-center gap-2"
                >
                  <PlusCircle size={18} /> Add Attribute
                </button>
              </div>
            </div>
          </form>

          {/* Display Attributes List */}
          {attributesList.length > 0 && (
            <div className="mt-6 bg-background p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Attributes List</h3>
              <ul className="space-y-2">
                {attributesList.map((attr, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
                  >
                    <span>
                      <strong>{attr.name}:</strong> {attr.values}
                    </span>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveAttribute(index)}
                    >
                      <XCircle size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
