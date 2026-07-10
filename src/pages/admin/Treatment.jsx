import React, { useState, useEffect } from "react";
import { treatmentAPI } from '@/services/treatmentAPI';
import TreatmentTable from "@/components/admin/TreatmentTable";

export default function Treatment() {
  const [treatmentData, setTreatmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTreatments = async () => {
    try {
      setLoading(true);
      const data = await treatmentAPI.fetchTreatments();
      setTreatmentData(data);
    } catch (err) {
      setError(err.message || "Gagal mengambil data treatment");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTreatments();
  }, []);

  const handleSaveTreatment = async (formData, isEditMode, selectedId) => {
    if (isEditMode) {
      await treatmentAPI.updateTreatment(selectedId, formData);
    } else {
      await treatmentAPI.createTreatment(formData);
    }
    loadTreatments();
  };

  const handleDeleteTreatment = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus catalog treatment ini?")) {
      try {
        await treatmentAPI.deleteTreatment(id);
        loadTreatments();
      } catch (err) {
        alert(err.message || "Gagal menghapus treatment");
      }
    }
  };

  if (loading && treatmentData.length === 0) {
    return <div className="p-4 text-zinc-500 text-sm">Loading catalog treatments...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 text-sm">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen text-left flex flex-col justify-start items-stretch p-0 m-0">
      {/* Judul Halaman */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1e293b] tracking-tight">Manage Treatments</h1>
        <p className="text-xs text-gray-400 mt-1">Configure and organize your clinic service catalog item, duration, and price list</p>
      </div>

      {/* Container Tabel */}
      <div className="w-full">
        <TreatmentTable
          data={treatmentData}
          onSave={handleSaveTreatment}
          onDelete={handleDeleteTreatment}
        />
      </div>
    </div>
  );
}