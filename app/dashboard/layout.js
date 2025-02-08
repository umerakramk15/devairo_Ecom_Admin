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
          <Sidebar
            isOpen={isOpen}
            toggleSidebar={toggleSidebar}
            logout={logout}
          />

          <main
            className={`flex-1 transition-all duration-300 ${
              isOpen ? "md:ml-64" : "md:ml-20"
            }`}
          >
            <div className="p-4 md:p-6 min-h-[calc(100vh-8rem)]">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </AdminRestrictedRoute>
  );
}
