import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar_admin from '../components/Sidebar_admin';
import Header_admin from '../components/Header_admin';

export default function MainLayouts() {
  return (
    <div className="flex bg-[#F8F9FB] min-h-screen">
      {/* Sidebar tetap di kiri */}
      <Sidebar_admin />

      {/* Area Konten */}
      <div className="flex-1 flex flex-col px-10">
        <Header_admin />
        
        {/* Konten Halaman (Home, dll) */}
        <main className="flex-1 pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}