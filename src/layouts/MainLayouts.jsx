import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/guest/Navbar';
import Footer from '../components/guest/Footer';

export default function MainLayout() {
  return (
    // Menggunakan style pembungkus yang sama dengan Landing Page lama
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1C1C] scroll-smooth font-sans">
      {/* Navbar global untuk seluruh halaman di dalam layout ini */}
      <Navbar />

      {/* Konten dinamis (seperti Landing Page baru, About, dll) akan dirender di sini */}
      <main>
        <Outlet />
      </main>

      {/* Footer global */}
      <Footer />
    </div>
  );
}