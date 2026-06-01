import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar_admin from "../components/admin/Sidebar";
import Header_admin from "../components/admin/Header";
import Footer from "../components/admin/Footer";

export default function MainLayouts() {
  return (
    <div className="h-screen flex bg-[#f8f6f5] text-[#2d2d2d]">

      <div className="flex">

        <div className="hidden md:block">
          <Sidebar_admin />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden w-full px-4 md:px-6 lg:px-8 py-4 md:py-6">

          <Header_admin />

          <main className="flex-1 overflow-y-auto px-8 py-6">
            <Outlet />
               <Footer/>
          </main>
        </div>

                  {/* FOOTER */}
                  
                 

      </div>
    </div>
  );
}