import { Outlet } from 'react-router-dom';
import React from 'react';
import Navigation from '../components/member/Navigation';
// const Navbar = React.lazy(() => import('../components/Navbar'));
const Footer = React.lazy(() => import('../components/Footer'));

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] font-sans text-zinc-900">
      {/* Navbar tetap di atas */}
     <Navigation/>

      {/* Area Konten Dinamis */}
        <Outlet/>

      {/* Footer tetap di bawah */}
      <Footer />
    </div>
  );
}