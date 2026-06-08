"use client";

import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="SkySoar Logo"
              width={180}
              height={60}
              priority
            />
          </div>

          <div className="flex items-center">
            <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
              Connect with us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}