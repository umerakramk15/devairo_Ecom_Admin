"use client";

import { useState } from "react";
import {
  Edit,
  Trash2,
  DollarSign,
  Package,
  List,
  Image,
  Minus,
  Plus,
  Shield,
  ShoppingCart,
} from "lucide-react";
export default function ProductDetail() {
  const [product, setProduct] = useState({
    name: "Grain Free Dry Dog Food | Rachael Ray® Nutrish®",
    price: 28.0,
    color: "Orange",
    sizes: ["S", "M", "L", "XL"],
    selectedSize: "S",
    quantity: 1,
    description:
      "Premium grain-free dry dog food with natural ingredients, ensuring a balanced and nutritious diet for your pet.",
    images: [
      {
        url: "https://fluxconsole.com/files/image/265009?progressive=1",
      },
      {
        url: "https://cdn1.npcdn.net/images/16481129250d1609820c112299cd9ca3a5b406050f.webp?md5id=51783435ce8f5bb47f2c2bc7ebc29eb1&new_width=1000&new_height=1000&size=max&w=1700551537&from=jpg",
      },
      {
        url: "https://orders.lynasfoodservice.com/uploads/images/large-image/S9498_1.png",
      },
    ],
  });
  const [activeImage, setActiveImage] = useState(product.images[0].url);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleEdit = () => {
    alert("Edit Product feature coming soon!");
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this product?")) {
      alert("Product deleted successfully!");
    }
  };

  const increaseQuantity = () => {
    setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      setProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
    }
  };

  const handleSizeChange = (size) => {
    setProduct((prev) => ({ ...prev, selectedSize: size }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-transparent rounded-lg ">
      {/* Product Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-foreground/50 flex items-center gap-2">
          <Package size={24} /> Product Details
        </h2>

        <div className="flex gap-3">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 bg-accent text-white px-3 py-2 rounded-md hover:scale-95 transition-all"
          >
            <Edit size={16} /> Edit
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-md hover:scale-95 transition-all"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>

      {/* Product Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background p-8 py-12 rounded-lg shadow-md">
        {/* Left Column - Images */}
        <div className="flex flex-col items-center w-full">
          {/* Large Image */}
          <div className="w-full h-96 flex justify-center items-center bg-gray-100 rounded-md overflow-hidden">
            <img
              src={activeImage}
              alt="Product Image"
              className="h-full object-contain"
            />
          </div>
          {/* Small Images */}
          <div className="grid grid-cols-4 gap-2 mt-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt="Product Thumbnail"
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  activeImage === img.url
                    ? "border-accent"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(img.url)}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{product.name}</h3>

          <div className="flex items-center gap-2">
            <DollarSign size={20} className="text-foreground/50" />
            <span className="text-lg font-medium">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Color:</span>
            <span className="text-lg">{product.color}</span>
          </div>

          {/* Size Selection */}
          <div>
            <span className="font-medium">Size:</span>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`px-3 py-1 border rounded-md transition-all ${
                    product.selectedSize === size
                      ? "bg-accent text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <span className="font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button onClick={decreaseQuantity} className="p-2 bg-gray-200">
                <Minus size={16} />
              </button>
              <span className="px-4">{product.quantity}</span>
              <button onClick={increaseQuantity} className="p-2 bg-gray-200">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart & Buy Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-2 bg-accent text-white py-2 rounded-md hover:scale-95 transition-all">
              <ShoppingCart size={18} /> Add to cart - $
              {product.price * product.quantity}
            </button>

            <button className="w-full bg-black text-white py-2 rounded-md hover:scale-95 transition-all">
              Buy Now
            </button>
          </div>

          {/* Additional Options */}
          <div className="flex flex-wrap gap-3 text-accent">
            <button className="underline">Compare Color</button>
            <button className="underline">Ask a Question</button>
          </div>

          {/* Delivery & Return Info */}
          <div className="border-t pt-4 text-sm">
            <p>
              🚚 <strong>Estimate delivery times:</strong> 12-26 days
              (International), 3-6 days (United States).
            </p>
            <p>
              🔄 <strong>Return Policy:</strong> Return within 30 days of
              purchase. Duties & taxes are non-refundable.
            </p>
          </div>

          {/* Safe Checkout Guarantee */}
          <div className="flex items-center gap-2 text-green-600 mt-4">
            <Shield size={20} />
            <span className="font-medium">Guarantee Safe Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
