"use client";
import { SetStateAction, useState } from "react";
import SiteSidBar from "./site-sidbar";
import SiteHeader from "./site-header";

export default function MainLayoyt({
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
    <div className="flex fixed right-0 left-0 top-0 bottom-0 overflow-y-auto">
      <SiteSidBar
        onNavItemClick={handleNavItemClick}
        selectedNavItem={selectedNavItem}
      />
      <div className="w-full">
        <SiteHeader
          onNavItemClick={handleNavItemClick}
          selectedNavItem={selectedNavItem}
        />
        <div className="shadow-inne pt-14 max-lg:pt-[10%] max-sm:pt-[22%] h-screen overflow-y-scroll ">
          {children}
        </div>
      </div>
    </div>
  );
}
