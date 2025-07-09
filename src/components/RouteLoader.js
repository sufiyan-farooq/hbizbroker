"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timeout);
  }, [pathname]); 

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-[#5da0b1]"></div>
    </div>
  );
}
