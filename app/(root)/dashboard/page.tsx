// /dashboard/page.tsx
"use client";

import React, { useState } from "react";

import MapComponent from "@components/Pages/dashboard/MapComponent";
import AppSideBar from "@components/Pages/dashboard/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@components/ui/sidebar";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <div className="flex w-full h-full">
        <AppSideBar />
        <SidebarTrigger
          className="text-ourGreen sidebar-trigger mb-4"
          onClick={() => setOpen((prev) => !prev)}
        />
        <main className=" flex-1">
          <MapComponent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
