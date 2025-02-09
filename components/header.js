"use client";

import { useRouter } from "next/navigation";
import { Bell, PanelsTopLeft, User, LogOut, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ModeToggle } from "./ui/themeToggleBtn";

const Header = ({ isOpen, toggleSidebar }) => {
  const [hydrated, setHydrated] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  if (!hydrated) return <div className="h-16 bg-gray-900"></div>; // Prevent flickering

  return (
    <header className="fixed top-0 left-0 w-full max-w-screen bg-background text-foreground flex items-center justify-between px-4 md:px-6 py-4 border-b shadow-md z-[100] ">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:rotate-12 transition-all">
          <PanelsTopLeft size={24} />
        </button>
        <h1 className="text-xl font-bold hidden md:block">De<span className="text-accent">vairo</span></h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <button className="p-2 rounded-md">
          <Bell size={24} />
        </button>
        <div className="">
          <button
            onClick={() => setDropDown(!dropDown)}
            className="relative flex items-center space-x-2 p-2 rounded-md"
          >
            <User size={24} />
          </button>
          {dropDown && (
            <div className=" absolute right-10 mt-2 w-48 bg-background text-foreground rounded-lg shadow-lg  ">
              <button className="w-full text-left px-4 py-2 hover:text-white hover:bg-accent border">
                Profile
              </button>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 hover:bg-accent hover:text-white border"
              >
                <LogOut size={16} className="inline-block mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
