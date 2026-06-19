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
    const [date, setDate] = useState()

    return (

        <div className="px-8 py-6">
            {/* Header */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-6">
                <h1 className="text-4xl font-medium">
                    Dashboard
                </h1>

                <div className="flex items-center gap-4">
                    <RoundButton>
                        <FaSearch />
                    </RoundButton>

                    <RoundButton>
                        <FaRegBell />
                    </RoundButton>

                    <div className="flex items-center gap-3">
                        <Avatar image="https://i.pravatar.cc/100?img=32" />

                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                                Annisa Putri
                            </span>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-fit"
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
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
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
            </div>

            {/* Breadcrumb */}
            <Breadcrumb>
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
            </Breadcrumb>
        </div>
    );
}