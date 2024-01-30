"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteSidBar from "@/components/layout/site-sidbar";
import { SetStateAction, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedNavItem, setSelectedNavItem] = useState(false); // State to store selected navigation item

  // Callback function to update selectedNavItem
  const handleNavItemClick = (selectedItem: SetStateAction<boolean>) => {
    setSelectedNavItem(selectedItem);
  };
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
