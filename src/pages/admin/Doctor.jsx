import React, { useState, useEffect } from "react";
import { doctorAPI } from '@/services/doctorAPI';
import DoctorTable from "@/components/admin/DoctorTable";

export default function Doctor() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDoctors = async () => {
    try {
      setLoading(true);
      const data = await doctorAPI.fetchDoctors();
      setDoctorsData(data);
    } catch (err) {
      setError(err.message || "Gagal mengambil data dokter");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const handleSaveDoctor = async (formData, isEditMode, selectedId) => {
    if (isEditMode) {
      await doctorAPI.updateDoctor(selectedId, formData);
    } else {
      await doctorAPI.createDoctor(formData);
    }
    loadDoctors(); // Refresh data sesudah menyimpan
  };

  const handleDeleteDoctor = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data dokter ini?")) {
      try {
        await doctorAPI.deleteDoctor(id);
        loadDoctors(); // Refresh data sesudah menghapus
      } catch (err) {
        alert(err.message || "Gagal menghapus dokter");
      }
    }
  };

  if (loading && doctorsData.length === 0) {
    return <div className="p-4 text-zinc-500 text-sm">Loading doctors roster...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 text-sm">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen text-left flex flex-col justify-start items-stretch p-0 m-0">
      {/* Judul Halaman */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1e293b] tracking-tight">Manage Doctors</h1>
        <p className="text-xs text-gray-400 mt-1">Configure and organize clinic specialist profiles, credentials, and descriptions</p>
      </div>

      {/* Container Tabel */}
      <div className="w-full">
        <DoctorTable
          data={doctorsData}
          onSave={handleSaveDoctor}
          onDelete={handleDeleteDoctor}
        />
      </div>
    </div>
  );
}