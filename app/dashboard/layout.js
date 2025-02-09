// Layout.tsx (Example implementation)
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import AdminRestrictedRoute from "@/components/ui/AdminRestrictedRoute";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return (
    <AdminRestrictedRoute>
      <div className="min-h-screen flex flex-col">
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className="flex flex-1 mt-16">
          {/* Sidebar Wrapper (Prevents Jumping Issues) */}
          <div className="relative  transition-all duration-300">
            <Sidebar
              isOpen={isOpen}
              toggleSidebar={toggleSidebar}
              logout={logout}
            />
          </div>

          {/* Main Content Adjusts When Sidebar Expands */}
          <main
            className={`flex-1 transition-all duration-300 ${
              isOpen ? "sm:ml-64" : ""
            }`}
          >
            <div className="p-0 md:p-6 min-h-[calc(100vh-8rem)] bg-accent/5">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </AdminRestrictedRoute>
  );
}
