// Components/ Shared/MobileNav.jsx

import { useState, useEffect } from "react";
import { AlignLeft, X } from "lucide-react";

import { initializeTheme } from "@components/Shared/ThemeFunctions";
import NavItems from "@components/Shared/NavItems";

// --------------  Beginning Function --------------------
const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Directly open the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Initialize the theme on the client-side
  useEffect(() => {
    initializeTheme(setTheme);
  }, []);

  return (
    <nav className="md:hidden relative">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* Show AlignLeft icon when menu is closed, and CircleX when open */}
        {isOpen ? (
          <X className="text-ourGreen" />
        ) : (
          <AlignLeft className="text-ourGreen" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-10 shadow-lg rounded left-1 top-1"
          onClick={toggleMenu}
        >
          {/* Menu Content */}
          <div
            className={`p-6 rounded ${
              theme === "dark"
                ? "bg-gray-950 text-white"
                : "bg-gray-50 text-black"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <NavItems />
            <hr className="my-8 border-gray-300 dark:border-gray-600" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
