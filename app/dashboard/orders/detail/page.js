"use client";

import { useState } from "react";
import {
  Package,
  Truck,
  CheckCircle,
  CreditCard,
  Calendar,
  MapPin,
  ShoppingCart,
} from "lucide-react";

export default function OrderDetails() {
  const [order, setOrder] = useState({
    orderId: "#192847",
    date: "20 Nov 2023",
    total: 948.5,
    shippingAddress: "3517 W. Gray St. Utica, Pennsylvania 57867",
    paymentMethod: "Pay on Delivery (Cash/Card)",
    expectedDelivery: "20 Nov 2023",
    status: "Shipped",
    cartTotals: {
      subtotal: 70.13,
      shipping: 10.0,
      tax: 5.0,
      totalPrice: 90.58,
    },
    products: [
      {
        name: "Kristin Watson",
        quantity: 1,
        price: 50.47,
      },
      {
        name: "Kristin Watson",
        quantity: 1,
        price: 50.47,
      },
      {
        name: "Kristin Watson",
        quantity: 1,
        price: 50.47,
      },
    ],
  });

  return (
    <div className="max-w-6xl mx-auto my-20 p-6 bg-background text-foreground rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
        <Package size={28} className="text-accent" /> Order Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-foreground/10 p-6 rounded-lg bg-background flex flex-col gap-3 shadow-md">
          <h3 className="text-xl font-semibold mb-3">Summary</h3>
          <p className="flex items-center gap-2">
            <span className="font-medium">Order ID:</span> {order.orderId}
          </p>
          <p className="flex items-center gap-2">
            <Calendar size={18} className="text-accent" />{" "}
            <span className="font-medium">Date:</span> {order.date}
          </p>
          <p className="flex items-center gap-2">
            <CreditCard size={18} className="text-accent" />{" "}
            <span className="font-medium">Payment:</span> {order.paymentMethod}
          </p>
        </div>

        <div className="border border-foreground/10 p-6 rounded-lg bg-background shadow-md flex flex-col gap-3">
          <h3 className="text-xl font-semibold mb-3 ">Shipping Info</h3>
          <p className="flex items-center gap-2">
            <MapPin size={18} className="text-accent" />{" "}
            <span className="font-medium">Address:</span>{" "}
            {order.shippingAddress}
          </p>
          <p className="flex items-center gap-2">
            <Truck size={18} className="text-accent" />{" "}
            <span className="font-medium">Expected Delivery:</span>{" "}
            {order.expectedDelivery}
          </p>
          <p className="flex items-center gap-2 text-green-600 font-semibold">
            <CheckCircle size={18} className="text-green-600" /> {order.status}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-foreground/10 p-6 rounded-lg bg-background shadow-md flex flex-col gap-3">
          <h3 className="text-xl font-semibold mb-3">Products</h3>
          {order.products.map((product, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between border-b border-foreground/10 py-3 hover:bg-accent hover:text-white transition rounded-md px-3"
            >
              <span>{product.name}</span>
              <span>Qty: {product.quantity}</span>
              <span className="font-medium">${product.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border border-foreground/10 p-6 rounded-lg bg-background shadow-md flex flex-col gap-3">
          <h3 className="text-xl font-semibold mb-3">Cart Totals</h3>
          <p className="flex justify-between">
            <span>Subtotal:</span>
            <span>${order.cartTotals.subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping:</span>
            <span>${order.cartTotals.shipping.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (GST):</span>
            <span>${order.cartTotals.tax.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-xl font-bold border-t pt-3 text-accent">
            <span>Total Price:</span>
            <span>${order.cartTotals.totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="px-8 py-3 flex items-center justify-center gap-2 bg-accent text-white rounded-lg hover:scale-105 transition-all shadow-md">
          <ShoppingCart size={20} /> Track Order
        </button>
      </div>
    </div>
  );
}
