"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/ui/themeToggleBtn";


export default function Home() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground"
    >
      {/* Navbar */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <ModeToggle />
      </div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-xl font-semibold"
        >
          De<span className="text-accent">vairo</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold mb-2 text-foreground"
        >
          Devairo Admin Panel
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-foreground/50 mb-6"
        >
          Manage everything seamlessly in one place.
        </motion.p>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/auth/login")}
          className="px-8 py-3 text-lg font-semibold bg-accent text-white rounded-xl shadow-lg transition-all"
        >
          Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
