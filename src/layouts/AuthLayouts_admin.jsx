import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayouts_admin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 font-sans">
      <div className="flex w-full max-w-7xl overflow-hidden bg-white">
        
        {/* Konten Utama (Form) */}
        <div className="flex w-full flex-col px-8 py-12 lg:w-1/2 lg:px-20">
          {/* Logo Section */}
          <div className="mb-16 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 shadow-md">
               <span className="text-white">🔵</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">Your Logo</span>
          </div>
          
          {/* Outlet: Tempat Login_admin akan muncul */}
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        {/* Bagian Ilustrasi (Kanan) */}
        <div className="hidden w-1/2 items-center justify-center rounded-[2.5rem] bg-slate-50 p-16 lg:flex">
          <div className="flex flex-col items-center">
            {/* Pastikan file gambar ada di folder public/assets */}
            <img 
              src="https://images.unsplash.com/vector-1764339389074-62e79279aba9?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Security Illustration" 
              className="h-auto w-full max-w-md drop-shadow-2xl"
            />
            
            {/* Indikator Slider */}
            <div className="mt-12 flex items-center gap-3">
              <div className="h-2.5 w-8 rounded-full bg-indigo-600 transition-all"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-gray-200"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}