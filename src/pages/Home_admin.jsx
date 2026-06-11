import React from "react";
import patients from "@/data/patients.json";

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

import StatCard from '../components/admin/StatCard';
import DashboardCard from '../components/admin/DashboardCard';
import Table from '../components/admin/Table';
import Review from '../components/admin/Review';
import Overview from "../components/admin/Overview";
import Calendar from "../components/admin/Calendar";
import Schedule from "../components/admin/Schedule";

import { FaXTwitter } from "react-icons/fa6";

export default function Dashboard() {

  const patientStatusData = [
    {
      patient: "Sarah Miller",
      treatment: "Facial Rejuvenation",
      date: "2028-09-12",
      status: "Completed",
      color: "#cfe8db",
    },
    {
      patient: "Maurice Galley",
      treatment: "Laser Hair Removal",
      date: "2028-09-12",
      status: "In Progress",
      color: "#f3d1c8",
    }
  ];

  const popularTreatments = [
    {
      name: "Facial Rejuvenation",
      rating: "4.9",
      reviews: 2150,
    },
    {
      name: "Laser Hair Removal",
      rating: "4.8",
      reviews: 1900,
    }
  ];

  const patientOverview = [
    {
      label: "New Patient",
      value: "1,460",
      percent: 45,
      color: "#f3d1c8",
    },
    {
      label: "In Treatment",
      value: "974",
      percent: 30,
      color: "#d7eee3",
    },
    {
      label: "Recovered",
      value: "811",
      percent: 25,
      color: "#ececec",
    },
  ];

  const treatmentOverview = [
    {
      label: "Rhinoplasty",
      value: "45%",
      percent: 45,
      color: "#f3d1c8",
    },
    {
      label: "Rhytidectomy",
      value: "35%",
      percent: 35,
      color: "#d7eee3",
    },
    {
      label: "Blepharoplasty",
      value: "20%",
      percent: 20,
      color: "#ececec",
    },
  ];

  const schedules = [
    {
      doctor: "Dr. Olivia Grant",
      patient: "Sarah Miller",
      room: "Room OR 1",
      time: "9:00 AM - 11:30 AM",
      active: true,
    },
    {
      doctor: "Dr. David Carter",
      patient: "Michael Brown",
      room: "Room OR 2",
      time: "12:00 PM - 2:00 PM",
      active: false,
    }
  ];

  return (
    <div>
      {/* SIDEBAR */}

      {/* MAIN CONTENT */}

      {/* HEADER */}

      {/* 3 COLUMN LAYOUT MAIN */}
      <div className="grid grid-cols-[1.65fr_0.75fr_0.85fr] gap-5">

        {/* LEFT AREA */}
        <div className="space-y-5">

          {/* TOP CARDS */}
          <div className="grid grid-cols-2 gap-4">

            {/* Earnings */}
            <StatCard
              bgColor="bg-[#f6d8d0]"
              icon="$"
              label="Earnings"
              value="$125,000"
            />

            {/* Patients tes buat commit baru*/}
            <StatCard
              bgColor="bg-[#cfe8db]"
              icon={<FaUsers />}
              label="Total Patients"
              value="315"
            />

            {/* Appointment */}
            <StatCard
              bgColor="bg-[#cfe8db]"
              icon={<FaCalendarAlt />}
              label="Appointments"
              value="250"
            />

            {/* Surgery */}
            <StatCard
              bgColor="bg-[#f6d8d0]"
              icon={<FaProcedures />}
              label="Surgeries"
              value="65"
            />

          </div>

          {/* PART 2 AKAN MASUK DI SINI */}
          <div id="part-2-placeholder" className="space-y-6">

            {/* 1. REVENUE CARD */}
            <DashboardCard title="Revenue" filterText="2027 ▼">
              {/* Sub-header Legend */}
              <div className="flex gap-5 text-xs mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#b7dfcf]" />
                  Income
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-[#f1b7a8]" />
                  Expenses
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-[2px] border-t-2 border-dashed border-[#888]" />
                  Net Profit
                </div>
              </div>

              {/* Fake Chart Content */}
              <div className="relative h-[260px]">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-t border-[#efefef]"
                    style={{ top: `${i * 55}px` }}
                  />
                ))}

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,18 C10,12 20,22 30,18 C40,14 50,26 60,10 C70,5 80,20 90,8 C95,4 100,6 100,6"
                    fill="none"
                    stroke="#b7dfcf"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M0,28 C10,24 20,35 30,28 C40,22 50,34 60,20 C70,15 80,32 90,18 C95,14 100,20 100,18"
                    fill="none"
                    stroke="#f1b7a8"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M0,24 C10,22 20,18 30,25 C40,28 50,15 60,24 C70,30 80,18 90,26 C95,20 100,22 100,22"
                    fill="none"
                    stroke="#888"
                    strokeDasharray="2 2"
                    strokeWidth="0.8"
                  />
                </svg>

                <div className="absolute top-[70px] left-[58%]">
                  <div className="bg-[#dff0e6] rounded-xl px-4 py-2 shadow-sm">
                    <p className="text-[10px] text-gray-500">Income</p>
                    <p className="font-semibold">$7,125</p>
                  </div>
                </div>
              </div>
            </DashboardCard>


            {/* 2. PATIENTS BY GENDER CARD */}
            <DashboardCard title="Patients by Gender" filterText="Last 8 Months">
              {/* Konten Kustom Teks Angka & Legend Bar */}
              <div className="flex justify-between items-end mb-6 -mt-10">
                <div>
                  <p className="text-xs text-gray-400 mt-2">Total Patient</p>
                  <h2 className="text-3xl font-semibold">27,930</h2>
                </div>
                <div className="flex gap-4 text-xs mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#f3d1c8]" />
                    Female
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#cfe8db]" />
                    Male
                  </div>
                </div>
              </div>

              {/* Bar Chart Bars */}
              <div className="h-[220px] flex items-end gap-5 px-4">
                {[70, 85, 95, 82, 72, 78, 94, 86].map((v, i) => (
                  <div key={i} className="flex gap-2 flex-1 items-end">
                    <div
                      className="bg-[#f3d1c8] rounded-t-xl w-full"
                      style={{ height: `${v}%` }}
                    />
                    <div
                      className="bg-[#cfe8db] rounded-t-xl w-full"
                      style={{ height: `${v - 25}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Label Bulan */}
              <div className="flex justify-between text-xs text-gray-400 mt-3 px-4">
                <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                <span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
              </div>
            </DashboardCard>

            <Table
              data={patients}
            />

          </div>

          {/* PART 3 AKAN MASUK DI SINI */}
          <div id="part-3-placeholder">
            <div className="grid grid-cols-[1.7fr_0.9fr] gap-5">

            </div>
          </div>

        </div>

        {/* CENTER COLUMN */}
        <div className="space-y-5">

          <Overview
            title="Patient Overview"
            filter="Monthly"
            centerLabel="Total Patient"
            total="3,245"
            items={patientOverview}
          />

          <Overview
            title="Patient by Treatment"
            filter="Today"
            centerLabel="Total Patient"
            total="315"
            items={treatmentOverview}
          />

          <Review
            title="Most Popular Treatments"
            treatments={popularTreatments}
          />

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-5">
          {/* PART 3 */}
          <Calendar />

          <Schedule schedules={schedules} />

        </div>

      </div>

    </div>
  );
}