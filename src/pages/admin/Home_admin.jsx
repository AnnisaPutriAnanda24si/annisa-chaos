import React, { useState, useEffect } from "react";
// import patients from "@/data/patients.json";
import { bookingAPI } from "@/services/bookingAPI";

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

import StatCard from '../../components/admin/StatCard';
import DashboardCard from '../../components/admin/DashboardCard';
// import Table from '../../components/admin/Table';
// import Review from '../../components/admin/Review';
import Overview from "../../components/admin/Overview";
import Calendar from "../../components/admin/Calendar";
import Schedule from "../../components/admin/Schedule";
import TreatmentBarChart from "@/components/admin/TreatmentBarChart";

useState
export default function Dashboard() {

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  // const patientStatusData = [
  //   {
  //     patient: "Sarah Miller",
  //     treatment: "Facial Rejuvenation",
  //     date: "2028-09-12",
  //     status: "Completed",
  //     color: "#cfe8db",
  //   },
  //   {
  //     patient: "Maurice Galley",
  //     treatment: "Laser Hair Removal",
  //     date: "2028-09-12",
  //     status: "In Progress",
  //     color: "#f3d1c8",
  //   }
  // ];

  // const popularTreatments = [
  //   {
  //     name: "Facial Rejuvenation",
  //     rating: "4.9",
  //     reviews: 2150,
  //   },
  //   {
  //     name: "Laser Hair Removal",
  //     rating: "4.8",
  //     reviews: 1900,
  //   }
  // ];

  // const patientOverview = [
  //   {
  //     label: "New Patient",
  //     value: "1,460",
  //     percent: 45,
  //     color: "#f3d1c8",
  //   },
  //   {
  //     label: "In Treatment",
  //     value: "974",
  //     percent: 30,
  //     color: "#d7eee3",
  //   },
  //   {
  //     label: "Recovered",
  //     value: "811",
  //     percent: 25,
  //     color: "#ececec",
  //   },
  // ];

  // const treatmentOverview = [
  //   {
  //     label: "Rhinoplasty",
  //     value: "45%",
  //     percent: 45,
  //     color: "#f3d1c8",
  //   },
  //   {
  //     label: "Rhytidectomy",
  //     value: "35%",
  //     percent: 35,
  //     color: "#d7eee3",
  //   },
  //   {
  //     label: "Blepharoplasty",
  //     value: "20%",
  //     percent: 20,
  //     color: "#ececec",
  //   },
  // ];

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

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(false);
        // Memanggil fungsi fetch yang melakukan SELECT dan JOIN ke tabel patient & treatment
        const data = await bookingAPI.fetchBookings();
        setBookings(data || []);
      } catch (error) {
        console.error("Gagal mengambil data bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Filter booking yang statusnya "Completed"
  const completedBookings = bookings.filter((b) => b.status === "Completed");

  console.log("Cek struktur booking pertama:", bookings[0]);
  // A. Hitung Total Uang dari booking yang Completed
const totalEarnings = completedBookings.reduce((sum, item) => {
  const price = item.treatment?.price ? Number(item.treatment.price) : 0;
  return sum + price;
}, 0);

  // B. Hitung Total Pasien Unik (tanpa duplikat)
  const totalPatients = new Set(
    bookings.map((b) => b.patient?.patient_id).filter(Boolean)
  ).size;

  // C. Hitung Total Appointments (Semua booking aktif yang tidak di-cancel)
  const totalAppointments = bookings.filter((b) => b.status !== "Cancelled").length;

  // 1. Hitung total booking yang statusnya "Completed"
const completedBookingsCount = bookings.filter((b) => b.status === "Completed").length;

// 2. Hitung total booking yang statusnya "Cancelled"
const cancelledBookingsCount = bookings.filter((b) => b.status === "Cancelled").length;

  // Helper Format Rupiah
  const formatCurrency = (val) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);

  // Jika masih loading, tampilkan indikator loading sederhana
  if (loading) {
    return <div className="p-8 text-center text-gray-500 animate-pulse">Loading dashboard data...</div>;
  }

  // ======================
// OVERVIEW TREATMENT
// ======================

const treatmentCounts = {};

completedBookings.forEach((booking) => {
  const treatment = booking.treatment?.treatment_name;

  if (!treatment) return;

  treatmentCounts[treatment] =
    (treatmentCounts[treatment] || 0) + 1;
});

const totalTreatment = Object.values(treatmentCounts).reduce(
  (a, b) => a + b,
  0
);

const colors = [
  "#f6d8d0",
  "#cfe8db",
  "#ececec",
  "#d8d4ff",
  "#ffe5c4",
  "#b7dfcf",
];

const treatmentOverview = Object.entries(treatmentCounts).map(
  ([label, count], index) => ({
    label,
    value: `${count} Booking`,
    percent:
      totalTreatment === 0
        ? 0
        : Math.round((count / totalTreatment) * 100),
    color: colors[index % colors.length],
  })
);

// ======================
// TOP SPENDING PATIENT
// ======================

const patientRevenue = {};

completedBookings.forEach((booking) => {
  const patient = booking.patient?.patient_name;
  const price = Number(booking.treatment?.price || 0);

  if (!patient) return;

  patientRevenue[patient] =
    (patientRevenue[patient] || 0) + price;
});

const topPatients = Object.entries(patientRevenue)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5);

// ======================
// DOCTOR PERFORMANCE
// ======================

const doctorCounts = {};

completedBookings.forEach((booking) => {
  const doctor = booking.doctor?.doctor_name;

  if (!doctor) return;

  doctorCounts[doctor] =
    (doctorCounts[doctor] || 0) + 1;
});

const totalDoctorBooking = Object.values(doctorCounts).reduce(
  (a, b) => a + b,
  0
);

const doctorOverview = Object.entries(doctorCounts).map(
  ([label, count], index) => ({
    label,
    value: `${count} Booking`,
    percent:
      totalDoctorBooking === 0
        ? 0
        : Math.round((count / totalDoctorBooking) * 100),
    color: colors[index % colors.length],
  })
);

// ======================
// AVERAGE TRANSACTION
// ======================

const averageTransaction =
  completedBookings.length > 0
    ? totalEarnings / completedBookings.length
    : 0;

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
              icon="Rp"
              label="Earnings (Completed)"
              value={formatCurrency(totalEarnings)}
            />

            {/* Patients */}
            <StatCard
              bgColor="bg-[#cfe8db]"
              icon={<FaUsers />} // Kamu bisa ganti icon jadi FaCheckCircle jika ingin menyesuaikan dengan "Completed"
              label="Completed Bookings"
              value={completedBookingsCount.toString()}
            />

            {/* Appointment */}
            <StatCard
              bgColor="bg-[#cfe8db]"
              icon={<FaCalendarAlt />}
              label="Appointments"
              value={totalAppointments.toString()}
            />

            {/* Surgery */}
<StatCard
  bgColor="bg-[#f6d8d0]"
  icon={<FaProcedures />} // Kamu bisa ganti icon jadi FaTimesCircle jika ingin menyesuaikan dengan "Cancelled"
  label="Cancelled Bookings"
  value={cancelledBookingsCount.toString()}
/>
          </div>

          {/* PART 2 AKAN MASUK DI SINI */}
          <div id="part-2-placeholder" className="space-y-6">

            {/* 1. REVENUE CARD */}
            {/* <TreatmentBarChart/> */}
<DashboardCard
    title="Revenue Summary"
    filterText="Completed Booking"
>

    <div className="space-y-6">

        <div>

            <p className="text-gray-400 text-sm">
                Total Revenue
            </p>

            <h1 className="text-4xl font-bold text-[#1A2E26]">
                {formatCurrency(totalEarnings)}
            </h1>

        </div>

        <div className="grid grid-cols-2 gap-4">

            <div className="bg-[#F7F7F7] rounded-xl p-4">

                <p className="text-xs text-gray-400">
                    Completed Booking
                </p>

                <h3 className="text-2xl font-semibold mt-2">
                    {completedBookings.length}
                </h3>

            </div>

            <div className="bg-[#F7F7F7] rounded-xl p-4">

                <p className="text-xs text-gray-400">
                    Avg Transaction
                </p>

                <h3 className="text-2xl font-semibold mt-2">
                    {formatCurrency(averageTransaction)}
                </h3>

            </div>

        </div>

    </div>

</DashboardCard>



            {/* 2. PATIENTS BY GENDER CARD */}
            {/* <DashboardCard title="Patients by Gender" filterText="Last 8 Months">
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

              <div className="flex justify-between text-xs text-gray-400 mt-3 px-4">
                <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
                <span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
              </div>
            </DashboardCard> */}

            {/* <Table
              data={patients}
            /> */}

          </div>

          {/* PART 3 AKAN MASUK DI SINI */}
          <div id="part-3-placeholder">
            <div className="grid grid-cols-[1.7fr_0.9fr] gap-5">

            </div>
          </div>

        </div>

        {/* CENTER COLUMN */}
        <div className="space-y-5">

          {/* <Overview
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
          /> */}
          <Calendar />
<Overview
    title="Treatment Distribution"
    filter="Completed"
    centerLabel="Booking"
    total={completedBookings.length}
    items={treatmentOverview}
/>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-5">
          {/* PART 3 */}

          <Schedule schedules={schedules} />

        </div>

      </div>

    </div>
  );
}