import React from "react";

import Avatar from "./Avatar";
import RoundButton from "./RoundButton";
import {
    InputField,
    Dropdown,
} from "./FormComponents";

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
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-[40px] font-medium">Dashboard</h1>

                <div className="flex items-center gap-4">

                    <RoundButton>
                        <FaSearch />
                    </RoundButton>

                    <RoundButton>
                        <FaRegBell />
                    </RoundButton>

                    <Avatar
                        image="https://i.pravatar.cc/100?img=32"
                    />

                    <div>
                        <h3 className="font-semibold">
                            Annisa Putri
                        </h3>

                        <p className="text-xs text-gray-400">
                            Admin
                        </p>
                    </div>

                </div>

            </div>


                            <div className="flex items-center gap-4 mb-4">

                <InputField
                    icon={FaSearch}
                    placeholder="Search patient, treatment, etc"
                    className="flex-1"
                />

                <Dropdown label="Treatment" />
            

                <Dropdown
                    icon={FaCalendarAlt}
                    label="1-18 Sep 2028"
                />

                </div>
        </div>
    )

}
