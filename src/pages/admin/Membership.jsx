import React, { useState, useEffect } from "react";
import { membershipAPI } from '@/services/membershipAPI';
import MembershipTable from "@/components/admin/MembershipTable";

export default function Membership() {
  const [membershipData, setMembershipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadMemberships = async () => {
    try {
      setLoading(true);
      const data = await membershipAPI.fetchMemberships();
      setMembershipData(data);
    } catch (err) {
      setError(err.message || "Gagal mengambil data membership");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMemberships();
  }, []);

  // Handler simpan (Hanya update data berdasarkan membership_id)
  const handleSaveMembership = async (formData, selectedId) => {
    try {
      // Kita hanya mengirim kolom yang boleh diedit
      const payload = {
        discount_percentage: formData.discount_percentage
      };
      await membershipAPI.updateMembership(selectedId, payload);
      loadMemberships(); // Refresh data sesudah mengupdate
    } catch (err) {
      alert(err.message || "Gagal mengupdate tier");
    }
  };

  if (loading && membershipData.length === 0) {
    return <div className="p-4 text-zinc-500 text-sm">Loading membership tiers catalog...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 text-sm">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen text-left flex flex-col justify-start items-stretch p-0 m-0">
      {/* Judul Halaman */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1e293b] tracking-tight">Configure Membership Tiers</h1>
        <p className="text-xs text-gray-400 mt-1">Manage and update discount benefit percentages for each patient membership level</p>
      </div>

      {/* Container Tabel - Tanpa tombol Tambah Dokter/Pasien */}
      <div className="w-full">
        <MembershipTable
          data={membershipData}
          onSave={handleSaveMembership}
        />
      </div>
    </div>
  );
}