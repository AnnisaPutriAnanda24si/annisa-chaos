// src/components/AuthLayout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen bg-white font-sans text-zinc-900">
      {/* SISI KIRI: Pesan Brand */}
      <div className="relative hidden w-1/2 flex-col justify-center bg-zinc-900 px-16 text-white md:flex">
        {/* GAMBAR DOKTER KECANTIKAN DENGAN OVERLAY GELAP */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Ganti dengan URL gambar dokter dari Unsplash
            alt="Dokter Kecantikan"
            className="w-full h-full object-cover"
          />
          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* KONTEN TEXT (Z-INDEX 1 AGAR DI ATAS GAMBAR) */}
        <div className="relative z-10 max-w-md">
          <Link
            to="/"
            className="absolute left-16 top-10 flex items-center text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-white"
          >
            <span className="mr-2">←</span> Homepage
          </Link>
          <div className="max-w-md mt-24"> {/* Tambahkan margin top agar text tidak tertutup homepage */}
            <h1 className="mb-6 font-serif text-5xl leading-tight italic">
              We show your skin, hair, and body the <span className="not-italic text-zinc-400 underline">care and attention</span> they deserve.
            </h1>
          </div>
        </div>
      </div>

      {/* SISI KANAN: Tempat form Login/Register */}
      <div className="flex w-full items-center justify-center bg-[#FFFBF5] px-8 md:w-1/2 md:px-20">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}