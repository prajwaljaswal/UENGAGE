"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center gap-4 mt-5 header">
      <div>Logo</div>

      <Link href="/" className="cursor-pointer hover:underline">
        Dashboard
      </Link>

      <Link href="/posts" className="cursor-pointer hover:underline">
        Blog Post
      </Link>
    </div>
  );
};

export default Header;
