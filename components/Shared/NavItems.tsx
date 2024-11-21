"use Client";
import React from "react";
import { headerLinks } from "@components/Constant";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItems: React.FC = () => {
  // Navigation path
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-start gap-3 md:space-x-8 md:flex-row md:items-center">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.id}
            className={`${
              isActive
                ? "text-ourGreen border-b border-ourGreen"
                : "border-b border-transparent"
            } flex-center p-medium-16 whitespace-nowrap `}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
