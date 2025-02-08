"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
export default function Login() {
  const [email, setEmail] = useState("admin@devairo.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Invalid credentials");
      return;
    }

    localStorage.setItem("token", data.token); // Store token in localStorage
    router.push("/dashboard"); // Redirect after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md p-8 bg-card rounded-2xl shadow-lg border border-border"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-center"
        >
          Login
        </motion.h2>

        {/* Error Message */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-red-500 text-center mt-2"
          >
            {error}
          </motion.p>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleLogin}
          className="mt-6 flex flex-col space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Email Input */}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.02 }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary transition-all"
          />

          {/* Password Input */}
          <motion.input
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.02 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary transition-all"
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg font-semibold shadow-md transition-all"
          >
            Login
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
