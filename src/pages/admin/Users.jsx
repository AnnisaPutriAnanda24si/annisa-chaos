import React, { useState, useEffect } from "react";
import { usersAPI } from '@/services/usersAPI';
import UsersTable from "@/components/admin/UsersTable";

export default function Users() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await usersAPI.fetchUsers();
      setUsersData(data);
    } catch (err) {
      setError(err.message || "Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSaveUser = async (formData, isEditMode, selectedId) => {
    if (isEditMode) {
      await usersAPI.updateUser(selectedId, formData);
    } else {
      await usersAPI.createUsers(formData);
    }
    loadUsers(); 
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus user ini?")) {
      try {
        await usersAPI.deleteUser(id);
        loadUsers(); 
      } catch (err) {
        alert(err.message || "Gagal menghapus user");
      }
    }
  };

  if (loading && usersData.length === 0) {
    return <div className="p-4 text-zinc-500 text-sm">Loading users data...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 text-sm">{error}</div>;
  }

  return (
    // PENTING: Menggunakan w-full (tanpa max-w) dan items-stretch agar tabel melebar penuh ke kanan-kiri
    <div className="w-full min-h-screen text-left flex flex-col justify-start items-stretch p-0 m-0">
      
      {/* Judul Halaman */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1e293b] tracking-tight">Manage Users</h1>
        <p className="text-xs text-gray-400 mt-1">Manage and monitor your application users privilege</p>
      </div>

      {/* Container Tabel - Dipastikan w-full penuh */}
      <div className="w-full">
        <UsersTable
          data={usersData}
          onSave={handleSaveUser}
          onDelete={handleDeleteUser}
        />
      </div>
    </div>
  );
}