"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageNavigation() {
  const pathname = usePathname();

  const pages = [
    { number: 1, title: "Cover", href: "/page-1" },
    { number: 2, title: "Building Broken", href: "/page-2" },
    { number: 3, title: "Dashboard Reality", href: "/page-3" },
    { number: 4, title: "AI Engine", href: "/page-4" },
    { number: 5, title: "One System", href: "/page-5" },
    { number: 6, title: "Coming Soon", href: "/page-6" },
    { number: 7, title: "Coming Soon", href: "/page-7" },
    { number: 8, title: "Coming Soon", href: "/page-8" },
    { number: 9, title: "Coming Soon", href: "/page-9" },
    { number: 10, title: "Coming Soon", href: "/page-10" },
    { number: 11, title: "Coming Soon", href: "/page-11" },
    { number: 12, title: "Coming Soon", href: "/page-12" },
    { number: 13, title: "Coming Soon", href: "/page-13" },
    { number: 14, title: "Coming Soon", href: "/page-14" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-4">
        <div className="flex flex-wrap gap-2 max-w-4xl">
          {pages.map((page) => (
            <Link
              key={page.number}
              href={page.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                pathname === page.href
                  ? "bg-blue-500 text-white"
                  : "text-blue-200 hover:text-white hover:bg-white/10"
              }`}
              title={page.title}
            >
              {page.number}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
