// components/Shared/Header
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

import MobileNav from "@components/Shared/MobileNav";

import {
  initializeTheme,
  toggleTheme,
} from "@components/Shared/ThemeFunctions";
import NavItems from "@components/Shared/NavItems";

const Header: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  // Initialize theme on client-side
  useEffect(() => {
    initializeTheme(setTheme);
  }, []);

  const handleThemeToggle = () => toggleTheme(theme, setTheme);

  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b border-gray-500/[.25] shadow-lg flex items-center">
      <div className="wrapper flex justify-between items-center w-full px-4">
        {/* ----------- Logo -----------------*/}
        <Link href="/" className="mx-4 my-2 ">
          <Image
            src="/logo/logo.png"
            width={128}
            height={64}
            alt="Ardhi logo"
            priority // Preloads the image
            className="w-40 sm:w-20 aspect-auto"
          />
        </Link>

        {/* -------- Navigation Tabs -------------*/}
        <nav className="hidden md:flex w-full max-w-xs">
          <NavItems />
        </nav>

        {/* ---------- Theme Toggle---------------- */}
        <div className="flex justify-end gap-4 mx-4">
          <button
            onClick={handleThemeToggle}
            className="flex items-center cursor-pointer justify-end md:mx-4"
          >
            {theme === "dark" ? (
              <Sun className="text-ourGreen" />
            ) : (
              <Moon className="text-ourGreen" />
            )}
          </button>
        </div>
        {/* Mobile Menu - visible only on smaller screens */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
