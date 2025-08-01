"use client";

import React from "react";
import Navigation from "./Navigation";
import PageNavigation from "./PageNavigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`min-h-screen relative ${inter.className}`}>
      {/* Blueprint Lines Background */}
      <div className="blueprint-lines"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">{children}</main>

      {/* Page Navigation */}
      <PageNavigation />
    </div>
  );
}
