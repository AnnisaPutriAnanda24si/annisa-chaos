import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar_admin from "../components/admin/Sidebar";
import Header_admin from "../components/admin/Header";
import Footer from "../components/admin/Footer";

export default function MainLayouts() {
  return (
    <div className="h-screen flex bg-[#f8f6f5] text-[#2d2d2d]">

      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar_admin />
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0">

        <Header_admin className="px-8 py-6"/>

        <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-6">
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}