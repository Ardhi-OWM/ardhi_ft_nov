"use client";

import React, { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@components/ui/sidebar";
import { DayPicker } from "react-day-picker";
//import "react-day-picker/dist/style.css";

import { ChevronDown, BadgeHelp } from "lucide-react";
import { helpLinks } from "@components/Constant";
import AddApi from "@components/Pages/dashboard/AppSideBarUp/AddApi";
import AddDataset from "@components/Pages/dashboard/AppSideBarUp/AddDataset";
import AddModel from "@components/Pages/dashboard/AppSideBarUp/AddModel";

// -------- Functions --------------
// Calendar

function CollapsibleTrigger({
  isOpen,
  toggleCollapsible,
  children,
}: {
  isOpen: boolean;
  toggleCollapsible: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex cursor-pointer group items-center"
      onClick={toggleCollapsible}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <ChevronDown
        className={`ml-auto transition-transform ${
          isOpen ? "rotate-0" : "rotate-180"
        }`}
      />
    </div>
  );
}

const AppSideBar = ({ className }: { className?: string }) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  //const [date, setDate] = useState<Date | undefined>(new Date());
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const today = new Date(); // Get today's date

  useEffect(() => {
    // Automatically set today's date on load
    setSelected(new Date());
  }, []);

  const toggleHelp = () => {
    setIsHelpOpen((prev) => !prev);
  };

  return (
    <Sidebar
      className={`border-gray-500/[0.5] h-full overflow-hidden ${className}`}
    >
      <SidebarContent className="flex flex-col justify-between h-full pt-20">
        {/* Static Section: Project Setup */}
        <SidebarGroupContent>
          <SidebarGroupLabel className="text-xs text-gray-500 ubuntu-mono-bold">
            {" "}
            SET UP
          </SidebarGroupLabel>
          <AddModel />
          <AddDataset />
          <AddApi />
        </SidebarGroupContent>

        {/* Collapsible Section: Help */}
        <div className="overflow-hidden">
          <SidebarGroupContent>
            <CollapsibleTrigger
              isOpen={isHelpOpen}
              toggleCollapsible={toggleHelp}
            >
              <span className="flex items-center cursor-pointer ml-2">
                <BadgeHelp className="text-ourGreen" />
                <p className=" font-semibold text-base ml-2 ">Help</p>
              </span>
            </CollapsibleTrigger>

            {/* Collapsible Content */}
            {isHelpOpen && (
              <div
                className={`pl-6 mt-2 text-sm  ${
                  isHelpOpen ? "max-h-40 overflow-y-auto " : "max-h-0"
                } transition-[max-height] duration-300 ease-in-out`}
              >
                <ul>
                  {helpLinks.map((link, index) => (
                    <li
                      key={index}
                      className="py-1 hover:underline hover:bg-gray-300/[0.1] rounded"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full px-2 ibm-plex-mono-medium"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </SidebarGroupContent>
          {/* Static Section: Calendar */}
          <SidebarGroupContent>
            <div className=" mb-4 ">
              <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  className="rdp"
                  modifiers={{
                    today: today, // Mark today's date
                  }}
                  modifiersClassNames={{
                    today: "rdp-day_today", // Assign custom class for today's date
                  }}
              />
            </div>
          </SidebarGroupContent>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
