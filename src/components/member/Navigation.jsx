import React from "react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

export default function Navbar() {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const username = localStorage.getItem("user_session") || "Guest";

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-neutral-200">

      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/home_member"
          className="font-playfair text-3xl tracking-[0.18em] font-semibold text-[#1C1C1C]"
        >
          SKINOVA
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-urbanist text-[15px]">

          <Link
            to="/home_member"
            className={`transition duration-300 relative ${
              currentPath === "/home_member" ||
              currentPath === "/booking"
                ? "text-[#1C1C1C] font-semibold"
                : "text-[#555555] hover:text-[#E67E22]"
            }`}
          >
            Services

            {(currentPath === "/home_member" ||
              currentPath === "/booking") && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E67E22]" />
            )}
          </Link>

          <Link
            to="/schedule"
            className={`transition duration-300 relative ${
              currentPath === "/schedule"
                ? "text-[#1C1C1C] font-semibold"
                : "text-[#555555] hover:text-[#E67E22]"
            }`}
          >
            My Bookings

            {currentPath === "/schedule" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E67E22]" />
            )}
          </Link>

          <Link
            to="/profile"
            className={`transition duration-300 relative ${
              currentPath === "/profile"
                ? "text-[#1C1C1C] font-semibold"
                : "text-[#555555] hover:text-[#E67E22]"
            }`}
          >
            Profile

            {currentPath === "/profile" && (
              <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#E67E22]" />
            )}
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          {/* <button
            className="
              w-10
              h-10
              rounded-full
              border
              border-[#1C1C1C]/10
              flex
              items-center
              justify-center
              text-[#555555]
              hover:text-[#E67E22]
              hover:border-[#E67E22]/40
              transition-all
            "
          >
            <IoIosNotificationsOutline size={20} />
          </button> */}

          {/* Settings */}
          {/* <button
            className="
              w-10
              h-10
              rounded-full
              border
              border-[#1C1C1C]/10
              flex
              items-center
              justify-center
              text-[#555555]
              hover:text-[#E67E22]
              hover:border-[#E67E22]/40
              transition-all
            "
          >
            <FiSettings size={18} />
          </button> */}

          {/* Divider */}
          <div className="h-8 w-px bg-[#1C1C1C]/10"></div>

          {/* Profile */}
          <Link
            to="/profile"
            className="
              flex
              items-center
              gap-3
              group
            "
          >
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
              alt="Profile"
              className="
                w-11
                h-11
                rounded-full
                object-cover
                border-2
                border-white
                shadow-sm
                group-hover:scale-105
                transition
              "
            />

            <div className="hidden lg:block">

              <p className="font-urbanist font-semibold text-[#1C1C1C] leading-none">
                {username}
              </p>

              <p className="text-xs text-[#E67E22] mt-1">
                Premium Member
              </p>

            </div>

          </Link>

        </div>

      </div>

    </header>
  );
}