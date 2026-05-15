import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IoSearchOutline, IoChevronDown } from "react-icons/io5";
export default function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuClass = ({ isActive }) =>
    `transition-all duration-300 relative pb-1
  ${isActive
      ? "text-orange-400 font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-orange-400"
      : "text-zinc-600 hover:text-orange-400"
    }`;

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#FFFBF5]">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tighter">
        <span className="text-black uppercase">Seven</span>
        <span className="text-orange-400 uppercase ml-1">Beauty</span>
      </div>

      {/* Menu Navigasi */}
      <div className="hidden md:flex space-x-10 text-[13px] font-medium uppercase tracking-widest">
        <NavLink to="/" className={menuClass}>Home</NavLink>
        {/* <a href="#" className="hover:text-orange-400 transition">Services</a> */}
        <NavLink to="/about" className={menuClass}>About Us</NavLink>
        <NavLink to="/contact" className={menuClass}>Contact Us</NavLink>
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center space-x-6">
        <button className="text-zinc-800 hover:text-orange-400 transition">
          <IoSearchOutline size={20} />
        </button>

        {/* Profile Dropdown Container */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-gray-200 border border-zinc-200 overflow-hidden ring-2 ring-transparent group-hover:ring-orange-100 transition-all">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100"
                alt="Linda"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-zinc-800 text-lg hidden md:block">Linda</span>
            <IoChevronDown
              className={`text-zinc-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
              size={14}
            />
          </button>

          {/* Dropdown Menu Overlay */}
          {isDropdownOpen && (
            <>
              {/* Invisible backdrop to close dropdown when clicking outside */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}></div>

              <div className="absolute right-0 mt-4 w-48 bg-white shadow-xl border border-zinc-100 z-20 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <NavLink
                  to="/login"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-[10px] uppercase tracking-widest transition-all
          ${isActive
                      ? "bg-[#F8F3ED] text-orange-400 font-bold border-l-2 border-orange-400"
                      : "text-zinc-600 hover:bg-[#F8F3ED] hover:text-orange-400"
                    }`
                  }
                >
                  Login Account
                </NavLink>

                <NavLink
                  to="/register"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-[10px] uppercase tracking-widest transition-all
          ${isActive
                      ? "bg-[#F8F3ED] text-orange-400 font-bold border-l-2 border-orange-400"
                      : "text-zinc-600 hover:bg-[#F8F3ED] hover:text-orange-400"
                    }`
                  }
                >
                  Register
                </NavLink>

                <div className="border-t border-zinc-50 my-1"></div>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    // Tambahkan logika logout di sini nanti
                  }}
                  className="w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest text-red-400 hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}