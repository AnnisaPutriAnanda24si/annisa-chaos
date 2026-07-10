"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { FaSearch, FaRegBell } from "react-icons/fa";

import Avatar from "./Avatar";
import RoundButton from "./RoundButton";
import { InputField, Dropdown } from "./FormComponents";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header() {
    //  const [date, setDate] = React.useState<Date>();
    const [date, setDate] = useState();
    const username = localStorage.getItem("user_session") || "Guest";

    return (
        // 🌟 Mengurangi padding vertikal (py-3) dan horizontal (px-6) agar tidak memakan ruang
        <div className="px-6 py-3 border-b border-gray-100 bg-white">
            
            {/* Header Main Wrapper */}
            {/* 🌟 Mengubah gap-6 menjadi gap-4 dan mb-6 menjadi mb-0 agar layout lebih tipis */}
            <div className="flex flex-row items-center justify-between">
                
                {/* Judul Dashboard */}
                {/* 🌟 Mengecilkan ukuran font dari text-4xl menjadi text-xl / text-2xl agar proporsional */}
                <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                    Dashboard
                </h1>

                {/* Sisi Kanan: Navigasi Aksi */}
                <div className="flex items-center gap-3">
                    
                    {/* Tombol Search Mini */}
                    <RoundButton className="w-8 h-8 text-sm">
                        <FaSearch className="w-3.5 h-3.5 text-gray-500" />
                    </RoundButton>

                    {/* Tombol Notifikasi Mini */}
                    <RoundButton className="w-8 h-8 text-sm">
                        <FaRegBell className="w-3.5 h-3.5 text-gray-500" />
                    </RoundButton>

                    {/* Pembatas Garis Tipis (Opsional untuk estetika) */}
                    <span className="h-5 w-[1px] bg-gray-200 mx-1 hidden sm:block" />

                    {/* Profile Avatar & Dropdown */}
                    {/* 🌟 Mengubah gap-3 menjadi gap-2 agar info pengguna lebih rapat */}
                    <div className="flex items-center gap-2">
                        <Avatar image="https://i.pravatar.cc/100?img=32" className="w-8 h-8" />

                        <div className="flex items-center gap-2">
                            {/* Nama Pengguna */}
                            <span className="text-xs font-semibold text-gray-700 hidden sm:block">
                                {username}
                            </span>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    {/* 🌟 Tombol diposisikan ringkas menggunakan icon arrow kebawah atau tombol kecil h-7 */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-7 px-2 text-xs font-medium border-gray-200"
                                    >
                                        Open
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end">
                                    {/* menu */}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Filter */}
            {/* <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <InputField
                    icon={FaSearch}
                    placeholder="Search patient, treatment, etc"
                    className="flex-1 min-w-0"
                />

                <Dropdown
                    label="Treatment"
                    className="w-full lg:w-auto"
                />

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="
        w-full
        lg:w-56
        h-14
        rounded-2xl
        justify-between
        font-normal
    "
                        >
                            {date ? (
                                format(date, "PPP")
                            ) : (
                                <span className="text-muted-foreground">
                                    Pick a date
                                </span>
                            )}

                            <ChevronDownIcon className="h-4 w-4" />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent
                        className="w-auto p-0"
                        align="start"
                    >
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            defaultMonth={date}
                        />
                    </PopoverContent>
                </Popover>
            </div> */}

            {/* Breadcrumb */}
            {/* <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">
                            Components
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            Breadcrumb
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb> */}
        </div>
    );
}