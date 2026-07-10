import React, { useState, useEffect } from "react";
import { scheduleAPI } from '@/services/scheduleAPI';
import { doctorAPI } from '@/services/doctorAPI';
import ScheduleTable from "@/components/admin/ScheduleTable";

export default function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAllData = async () => {
    try {
      setLoading(true);
      // Fetch paralel: Ambil roster jadwal sekaligus daftar dokter untuk dropdown form
      const [schedules, doctors] = await Promise.all([
        scheduleAPI.fetchSchedules(),
        doctorAPI.fetchDoctors()
      ]);
      setScheduleData(schedules);
      setDoctorsList(doctors);
    } catch (err) {
      setError(err.message || "Gagal sinkronisasi data jadwal");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const handleSaveSchedule = async (formData, isEditMode, selectedId) => {
    if (isEditMode) {
      await scheduleAPI.updateSchedule(selectedId, formData);
    } else {
      await scheduleAPI.createSchedule(formData);
    }
    loadAllData(); // Refresh list data
  };

  const handleDeleteSchedule = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus slot jadwal praktek ini?")) {
      try {
        await scheduleAPI.deleteSchedule(id);
        loadAllData();
      } catch (err) {
        alert(err.message || "Gagal menghapus jadwal");
      }
    }
  };

  if (loading && scheduleData.length === 0) {
    return <div className="p-4 text-zinc-500 text-sm">Loading clinic schedules...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 text-sm">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen text-left flex flex-col justify-start items-stretch p-0 m-0">
      {/* Judul Halaman */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1e293b] tracking-tight">Manage Schedules</h1>
        <p className="text-xs text-gray-400 mt-1">Organize doctor daily sessions, operational hours, and room management</p>
      </div>

      {/* Container Tabel */}
      <div className="w-full">
        <ScheduleTable
          data={scheduleData}
          doctorsList={doctorsList}
          onSave={handleSaveSchedule}
          onDelete={handleDeleteSchedule}
        />
      </div>
    </div>
  );
}