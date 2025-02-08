"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Home, Users, Settings, ChevronDown, ChevronRight, ShoppingCart } from "lucide-react";

const sidebarLinks = [
  {
    title: "Dashboard",
    icon: <Home size={20} />,
    href: "/dashboard",
  },
  {
    title: "Users",
    icon: <Users size={20} />,
    dropdown: [
      { title: "All Users", href: "/dashboard/users" },
      { title: "Add User", href: "/dashboard/users/add" },
      { title: "User Roles", href: "/dashboard/users/role" },
    ],
  },
  {
    title: "Ecommerce",
    icon: <ShoppingCart size={20} />,
    dropdown: [
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
      { title: "Preferences", href: "/settings/preferences" },
    ],
  },

  {
    title: "Settings",
    icon: <Settings size={20} />,
    dropdown: [
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
      { title: "Preferences", href: "/settings/preferences" },
    ],
  },
];

const Sidebar = ({ isOpen }) => {
  const [hydrated, setHydrated] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <div className="w-64 h-screen bg-background"></div>;

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <aside
      className={`fixed md:relative h-screen bg-background text-foreground border-r flex flex-col transition-all duration-300 z-50 ${
        isOpen ? "w-64 p-5" : "w-0 md:w-0 p-0"
      }`}
    >
      <nav className="mt-8 flex flex-col space-y-4">
        {sidebarLinks.map((item, index) => (
          <div key={index}>
            {item.dropdown ? (
              <>
                {/* Dropdown Button */}
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center justify-between p-3 rounded-md hover:text-accent w-full"
                >
                  <div className="flex items-center space-x-3">
                    {isOpen && item.icon}
                    {isOpen && <span>{item.title}</span>}
                  </div>
                  {isOpen &&
                    (openDropdown === item.title ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    ))}
                </button>

                {/* Dropdown Links with w-0 when closed */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openDropdown === item.title ? "w-full h-auto" : "w-0 h-0"
                  }`}
                >
                  <div className="pl-6 flex flex-col space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <SidebarItem
                        key={subIndex}
                        text={subItem.title}
                        href={subItem.href}
                        isOpen={openDropdown === item.title}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <SidebarItem
                icon={item.icon}
                text={item.title}
                href={item.href}
                isOpen={isOpen}
              />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, href, isOpen }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={`flex items-center space-x-3 p-3 rounded-md hover:text-accent w-full text-left transition-all duration-300 ${
        isOpen ? "opacity-100 w-full h-auto" : "opacity-0 w-0 h-0"
      }`}
    >
      {isOpen && icon}
      {isOpen && <span>{text}</span>}
    </button>
  );
};

export default Sidebar;
