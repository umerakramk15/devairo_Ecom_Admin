"use client"; // Add this to fix hydration issues

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminRestrictedRoute = ({ children }) => {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/auth/login");
        return;
      }

      const res = await fetch("/api/admin/dashboard", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const result = await res.json();

      if (!res.ok) {
        router.push("/auth/login");
      } else {
        setData(result);
      }
    };

    fetchData();
  }, [router]);

  return <div>{children}</div>;
};

export default AdminRestrictedRoute;
