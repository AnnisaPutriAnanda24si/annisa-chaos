import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../components/member/Navigation';
import Footer from "../components/member/Footer";
// Komponen Utama Layout
export default function MainLayouts_member() {
  return (
    <div className="min-h-screen bg-[#FCF8F5] font-sans antialiased flex flex-col justify-between">
      <Navbar />
      
      {/* Container utama untuk menampung seluruh halaman member */}
      <main className="flex-grow w-full max-w-[1240px] mx-auto px-4 sm:px-6 py-6 space-y-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}