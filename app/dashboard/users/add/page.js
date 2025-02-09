"use client";

import { useState } from "react";
import { Mail, Lock, User, Users } from "lucide-react";

export default function RegisterUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Data:", user);
    alert("User registered successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <Users size={24} /> Register User
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-8 bg-background p-8 py-16 rounded-xl shadow-md"
      >
        <div className="flex items-center gap-6">
          <User size={20} className="text-foreground/50" />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-6">
          <Mail size={20} className="text-foreground/50" />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-6">
          <Lock size={20} className="text-foreground/50" />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-6">
          <Lock size={20} className="text-foreground/50" />
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-6">
          <Users size={20} className="text-foreground/50" />
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className=" bg-accent w-[90%] text-white hover:scale-95 transition-all p-2 rounded-md hover:bg-accent"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
