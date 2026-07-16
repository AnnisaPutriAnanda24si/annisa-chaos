import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScheduleCard from "../../components/member/ScheduleCard";
import Button from "../../components/guest/Button";


export default function Schedule() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      month: "OCT",
      date: "24",
      title: "Full Body Detox Massage",
      doctor: "Dr. Sarah Jenkins",
      time: "10:30 AM",
      status: "Scheduled",
    },
    {
      id: 2,
      month: "OCT",
      date: "28",
      title: "Micro-Needling Session",
      doctor: "Dr. Amanda Clara",
      time: "02:15 PM",
      status: "Scheduled",
    },
    {
      id: 3,
      month: "NOV",
      date: "05",
      title: "HydraFacial Treatment",
      doctor: "Dr. Jason Shatsky",
      time: "09:00 AM",
      status: "Completed",
    },
  ]);

  const navigate = useNavigate();

  const handleCardClick = (appointment) => {
  if (appointment.status.toLowerCase() === "completed") {
    navigate(`/review/${appointment.id}`);
  }
};

  const handleAction = (id, type) => {
    if (type === "cancel") {
      const confirm = window.confirm(
        "Apakah Anda yakin ingin membatalkan appointment?"
      );

      if (confirm) {
        setAppointments((prev) =>
          prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status: "Canceled",
                }
              : item
          )
        );
      }
    }

    if (type === "delete") {
      setAppointments((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const upcomingBookings = appointments.filter(
    (item) => item.status.toLowerCase() === "scheduled"
  );

  const finishedBookings = appointments.filter(
    (item) =>
      item.status.toLowerCase() === "completed" ||
      item.status.toLowerCase() === "canceled"
  );

  return (
    <section className="min-h-screen bg-[#FAF7F2] py-3">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-[#E67E22] font-semibold font-urbanist mb-3">
              My Schedule
            </p>

            <h1 className="font-playfair text-5xl text-[#1C1C1C] leading-tight">
              Your <span className="italic">Appointments</span>
            </h1>

            <p className="mt-5 max-w-2xl text-[#555555] leading-8 font-urbanist">
              Kelola seluruh jadwal treatment Anda dengan mudah. Lihat
              appointment yang akan datang maupun riwayat perawatan yang telah
              selesai dalam satu halaman.
            </p>

          </div>

          <Link to="/home_member">
            <Button variant="primary">
              Book New Appointment
            </Button>
          </Link>

        </div>

        {/* Upcoming */}
        <section className="bg-white rounded-2xl shadow-sm p-8 mb-10">

          <div className="mb-8">

            <p className="uppercase tracking-[0.3em] text-xs text-[#E67E22] font-semibold font-urbanist">
              Upcoming
            </p>

            <h2 className="font-playfair text-3xl text-[#1C1C1C] mt-2">
              Upcoming Appointments
            </h2>

          </div>

          <div className="space-y-5">

            {upcomingBookings.length ? (
              upcomingBookings.map((item) => (
                <ScheduleCard
                  key={item.id}
                  {...item}
                  onAction={handleAction}
                />
              ))
            ) : (
              <div className="py-10 text-center text-[#777] font-urbanist">
                Tidak ada appointment yang akan datang.
              </div>
            )}

          </div>

        </section>

        {/* Finished */}
        <section className="bg-white rounded-2xl shadow-sm p-8">

          <div className="mb-8">

            <p className="uppercase tracking-[0.3em] text-xs text-[#E67E22] font-semibold font-urbanist">
              History
            </p>

            <h2 className="font-playfair text-3xl text-[#1C1C1C] mt-2">
              Appointment History
            </h2>

          </div>

<div className="space-y-5">
  {finishedBookings.length ? (
    finishedBookings.map((item) => (
      <div
        key={item.id}
        onClick={() => handleCardClick(item)}
        className={
          item.status === "Completed"
            ? "cursor-pointer transition hover:scale-[1.01]"
            : ""
        }
      >
        <ScheduleCard
          {...item}
          onAction={handleAction}
        />
      </div>
    ))
  ) : (
    <div className="py-10 text-center text-[#777] font-urbanist">
      Belum ada riwayat treatment.
    </div>
  )}
</div>

        </section>

      </div>
    </section>
  );
}