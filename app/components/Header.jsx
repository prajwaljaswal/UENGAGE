"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 mt-5 header">
      <div>Logo</div>

      <div onClick={() => router.push("/")}>Dashboard</div>

      <div onClick={() => router.push("/posts")}>Blog Post</div>
    </div>
  );
};

export default Header;
