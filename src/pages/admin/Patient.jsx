import React, { useState, useEffect } from "react";
import { patientsAPI } from '@/services/patientAPI';
import PatientTable from "@/components/admin/PatientTable";

export default function Patient() {
  const [patientsData, setPatientsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fungsi untuk mengambil/sinkronisasi ulang data pasien dari Supabase
  const loadPatients = async () => {
    try {
      setLoading(true);
      const data = await patientsAPI.fetchPatients();
      setPatientsData(data);
    } catch (err) {
      setError(err.message || "Gagal mengambil data pasien");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  // Handler simpan (Aksi dari modal tambah maupun edit di PatientsTable)
  const handleSavePatient = async (formData, isEditMode, selectedId) => {
    if (isEditMode) {
      await patientsAPI.updatePatient(selectedId, formData);
    } else {
      await patientsAPI.createPatient(formData);
    }
    loadPatients(); // Refresh data setelah menyimpan
  };

  // Handler hapus data berdasarkan patient_id
  const handleDeletePatient = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data pasien ini?")) {
      try {
        await patientsAPI.deletePatient(id);
        loadPatients(); // Refresh data setelah menghapus
      } catch (err) {
        alert(err.message || "Gagal menghapus data pasien");
      }
    }
  };

  if (loading && patientsData.length === 0) {
    return <div className="p-4 text-zinc-500 text-sm">Loading patients data...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 text-sm">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen text-left flex flex-col justify-start items-stretch p-0 m-0">
      
      {/* Judul Halaman */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1e293b] tracking-tight">Manage Patients</h1>
        <p className="text-xs text-gray-400 mt-1">Manage, monitor, and configure your clinic patient medical profiles</p>
      </div>

      {/* Container Tabel Pasien */}
      <div className="w-full">
        <PatientTable
          data={patientsData}
          onSave={handleSavePatient}
          onDelete={handleDeletePatient}
        />
      </div>
    </div>
  );
}