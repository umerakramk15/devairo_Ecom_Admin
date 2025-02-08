"use client";
import { ModeToggle } from "@/components/themeToggleBtn";
import { motion } from "framer-motion";

export default function Home() {


  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" w-full h-screen"
    >
      <div className="p-4 flex justify-between items-center w-full  rounded-lg shadow-lg">
        <h1 className="text-xl font-bold">Hello, Framer Motion in Next.js!</h1>
        <ModeToggle />
      </div>
    
    </motion.div>
  );
}
