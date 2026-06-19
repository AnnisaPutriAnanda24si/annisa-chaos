import React from "react";
import {
    FaThLarge,
    FaUsers,
    FaUserMd,
    FaCalendarAlt,
    FaProcedures,
    FaCapsules,
    FaStar,
    FaCreditCard,
    FaRegEnvelope,
    FaSignOutAlt,
    FaSearch,
    FaRegBell,
    FaPlus,
    FaCheck,
    FaChevronLeft,
    FaChevronRight,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import SidebarButton from "./SidebarButton";
import { FaXTwitter } from "react-icons/fa6";

export default function Dashboard() {

    return (
        <div>

            <aside
                className="
                            w-full
                            h-screen
                            shrink-0
                            sm:w-[280px]
                            lg:w-[260px]
                            bg-[#faf8f7]
                            border-r
                            border-[#ece7e4]
                            flex
                            flex-col
                            p-4
                            sm:p-5
                        "
            >


                {/* LOGO */}
                <div className="flex items-center gap-3 mb-10 p-5">
                    <div className="relative w-8 h-8">
                        <div className="absolute w-6 h-1 bg-[#f4d6cd] rounded-full rotate-90 left-[10px] top-[4px]" />
                        <div className="absolute w-6 h-1 bg-[#cfe8db] rounded-full left-[2px] top-[14px]" />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-medium">
                        byutie
                    </h2>
                </div>

                {/* MENU */}
                <div className="space-y-2 flex-1 px-5 overflow-y-auto ">
                    <SidebarButton
                        type="active"
                        icon={FaThLarge}
                    >
                        Dashboard
                    </SidebarButton>

                    <SidebarButton
                        icon={FaUsers}
                    >
                        Patients
                    </SidebarButton>

                                                            <SidebarButton
                        icon={FaUsers}
                    >
                        Treatment
                    </SidebarButton>

                    <SidebarButton
                        icon={FaUsers}
                    >
                        Doctor
                    </SidebarButton>

                    <SidebarButton
                        icon={FaUsers}
                    >
                        Schedule
                    </SidebarButton>
                                        <SidebarButton
                        icon={FaUsers}
                    >
                        Bookings
                    </SidebarButton>
                                                            <SidebarButton
                        icon={FaUsers}
                    >
                        Membership
                    </SidebarButton>
                                                                                <SidebarButton
                        icon={FaUsers}
                    >
                        Doctor Rate
                    </SidebarButton>
                </div>

                {/* UPDATE CARD */}
                <div className="mt-auto">
                    <div
                        className="
                            bg-[#f6d8d0]
                            rounded-[24px]
                            p-4
                            sm:p-5
                            overflow-hidden
                            relative
                        "
                    >
                        <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full border-[18px] border-[#f8e6e1]" />

                        <div className="relative z-10">
                            <div className="mb-4">
                                <div className="relative w-8 h-8">
                                    <div className="absolute w-6 h-1 bg-[#cfe8db] rounded-full rotate-90 left-[10px] top-[4px]" />
                                    <div className="absolute w-6 h-1 bg-[#ffffff] rounded-full left-[2px] top-[14px]" />
                                </div>
                            </div>

                            <p className="text-[11px] sm:text-xs leading-relaxed text-[#555]">
                                Enjoy improved performance,
                                new features, and a smoother
                                interface.
                            </p>

                            <button className="mt-5 bg-[#cfe8db] w-full py-2.5 sm:py-3 rounded-full text-xs sm:text-sm">
                                Explore the Updates!
                            </button>
                        </div>
                    </div>

                    <button
                        className="
                                mt-5
                                w-full
                                bg-white
                                border
                                border-[#ece7e4]
                                rounded-2xl
                                py-3
                                sm:py-4
                                flex
                                items-center
                                justify-center
                                gap-2
                                sm:gap-3
                                text-sm
                            "
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </aside>

        </div>
    )
}