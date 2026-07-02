import React, { useState, useEffect } from "react";
import { usersAPI } from '@/services/usersAPI';
import UsersTable from "@/components/admin/UsersTable";

export default function Users() {
  // 1. Deklarasi State
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); 
  
  const [formForm, setFormForm] = useState({
    email: "", 
    username: "", 
    password: "", 
    role: "user"
  });

  // 2. Fungsi untuk mengambil data dari Supabase
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

  // Ambil data saat komponen pertama kali di-load
  useEffect(() => {
    loadUsers();
  }, []);

  // 3. Handler Aksi Input Form
  const handleChange = (e) => {
    setFormForm({ ...formForm, [e.target.name]: e.target.value });
  };

  // Handler saat tombol "Add New User" diklik
  const handleAddClick = () => {
    setIsEditMode(false);
    setFormForm({ email: "", username: "", password: "", role: "user" });
    setShowModal(true);
  };

  // Handler saat tombol "Edit" di dalam tabel diklik
  const handleEditClick = (user) => {
    setIsEditMode(true);
    setSelectedId(user.id);
    setFormForm({
      email: user.email,
      username: user.username,
      password: user.password,
      role: user.role
    });
    setShowModal(true);
  };

  // Handler saat Form di-submit (Bisa Tambah baru / Simpan editan)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await usersAPI.updateUser(selectedId, formForm);
      } else {
        await usersAPI.createUsers(formForm);
      }
      setShowModal(false);
      loadUsers(); // Refresh tabel biar datanya update
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat menyimpan");
    }
  };

  // Handler saat tombol "Delete" di dalam tabel diklik
  const handleDeleteClick = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus user ini?")) {
      try {
        await usersAPI.deleteUser(id);
        loadUsers(); // Refresh tabel setelah sukses menghapus
      } catch (err) {
        alert(err.message || "Gagal menghapus user");
      }
    }
  };

  // 4. Kondisi Loading & Error (Ditaruh di bagian bawah sebelum return utama)
  if (loading && usersData.length === 0) {
    return <div className="p-6 text-zinc-500 text-sm">Loading users data...</div>;
  }
  
  if (error) {
    return <div className="p-6 text-red-500 text-sm">{error}</div>;
  }

  // 5. Render Tampilan Utama
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif text-zinc-800">Manage Users</h1>
        <button
          onClick={handleAddClick}
          className="bg-zinc-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-500 transition shadow-sm"
        >
          Add New User
        </button>
      </div>

      {/* Komponen Tabel Pengguna */}
      <UsersTable
        data={usersData}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />

      {/* MODAL POPUP FORM (UNTUK TAMBAH & EDIT) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-[28px] max-w-md w-full shadow-xl">
            <h2 className="text-xl font-serif mb-4 text-zinc-800">
              {isEditMode ? "Edit User Account" : "Register New Account"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email</label>
                <input
                  type="email" name="email" value={formForm.email} onChange={handleChange} required
                  className="w-full border-b border-zinc-300 py-2 text-sm outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Username</label>
                <input
                  type="text" name="username" value={formForm.username} onChange={handleChange} required
                  className="w-full border-b border-zinc-300 py-2 text-sm outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Password</label>
                <input
                  type="text" name="password" value={formForm.password} onChange={handleChange} required
                  className="w-full border-b border-zinc-300 py-2 text-sm outline-none focus:border-zinc-900"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Role Privilege</label>
                <select
                  name="role" value={formForm.role} onChange={handleChange}
                  className="w-full border-b border-zinc-300 py-2 text-sm outline-none bg-transparent focus:border-zinc-900"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button" onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-zinc-900 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-500 transition"
                >
                  Save Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}