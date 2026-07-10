import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch, FiPlus } from "react-icons/fi";

function MembershipBadge({ membershipId }) {
  // Mapping ID membership ke nama badge & warna visual
  const badges = {
    1: { name: "None", style: "bg-[#efebe9] text-[#795548]" },
    2: { name: "Silver", style: "bg-gray-100 text-gray-600 border border-gray-200" },
    3: { name: "Gold", style: "bg-[#fff8e1] text-[#ffb300]" },
    4: { name: "Platinum", style: "bg-[#e0f7fa] text-[#00acc1]" },
    5: { name: "VIP", style: "bg-[#e8f5e9] text-[#4caf50]" },
  };

  const current = badges[membershipId] || badges[1];

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${current.style}`}>
      {current.name}
    </span>
  );
}

export default function PatientTable({ data = [], onSave, onDelete }) {
  // --- STATE SEARCH & PAGINATION ---
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // --- STATE MODAL FORM INTERNAL ---
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formForm, setFormForm] = useState({
    user_id: "",
    membership_id: 1,
    full_name: "",
    gender: "Male",
    birth_date: "",
    phone: "",
    email: "",
    city: ""
  });

  // Handler Aksi Input Form
  const handleChange = (e) => {
    const value = e.target.name === "membership_id" || e.target.name === "user_id" 
      ? (e.target.value ? Number(e.target.value) : "") 
      : e.target.value;

    setFormForm({ ...formForm, [e.target.name]: value });
  };

  // Buka modal untuk Tambah Pasien
  const handleAddClick = () => {
    setIsEditMode(false);
    setFormForm({
      user_id: "", membership_id: 1, full_name: "", gender: "Male",
      birth_date: "", phone: "", email: "", city: ""
    });
    setShowModal(true);
  };

  // Buka modal untuk Edit Pasien
  const handleEditClick = (patient) => {
    setIsEditMode(true);
    setSelectedId(patient.patient_id);
    setFormForm({
      user_id: patient.user_id || "",
      membership_id: patient.membership_id || 1,
      full_name: patient.full_name || "",
      gender: patient.gender || "Male",
      birth_date: patient.birth_date || "",
      phone: patient.phone || "",
      email: patient.email || "",
      city: patient.city || ""
    });
    setShowModal(true);
  };

  // Submit Form meneruskan data ke parent
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // payload dibersihkan jika user_id dikosongkan agar tersimpan sebagai NULL
      const payload = { ...formForm, user_id: formForm.user_id || null };
      await onSave(payload, isEditMode, selectedId);
      setShowModal(false);
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat menyimpan");
    }
  };

  // Filter Data Berdasarkan Pencarian Nama / Email / Kota
  const filteredData = data.filter((item) =>
    item.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.city?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Kalkulasi Pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) pages.push(1, 2, 3, "...", totalPages);
      else if (currentPage >= totalPages - 2) pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      else pages.push(1, "...", currentPage, "...", totalPages);
    }
    return pages;
  };

  return (
    <div className="w-full bg-[#fcf9f9] p-4 rounded-[24px] space-y-4">
      
      {/* HEADER ATAS TABEL */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center px-2">
        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            placeholder="Search patient name, email, city..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-full text-xs border border-transparent shadow-xs focus:outline-none focus:bg-white focus:border-gray-200"
          />
        </div>
        
        <button
          onClick={handleAddClick}
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#addbc0] text-[#1e4620] hover:bg-[#99cca6] transition px-4 py-2 rounded-full text-xs font-bold"
        >
          <FiPlus className="w-4 h-4" />
          Add Patient
        </button>
      </div>

      {/* STRUKTUR UTAMA TABEL */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100/80 overflow-hidden">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-medium text-gray-400">
                <th className="w-12 py-5 px-4 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-[#addbc0] focus:ring-[#addbc0]" />
                </th>
                <th className="py-5 px-4 text-left font-semibold">Patient ID</th>
                <th className="py-5 px-4 text-left font-semibold">Name</th>
                <th className="py-5 px-4 text-left font-semibold">Gender</th>
                <th className="py-5 px-4 text-left font-semibold">Birth Date</th>
                <th className="py-5 px-4 text-left font-semibold">Phone</th>
                <th className="py-5 px-4 text-left font-semibold">Email</th>
                <th className="py-5 px-4 text-left font-semibold">City</th>
                <th className="py-5 px-4 text-center font-semibold">Membership</th>
                <th className="py-5 px-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/70">
              {currentData.map((patient) => (
                <tr key={patient.patient_id} className="hover:bg-gray-50/50 transition-colors text-sm text-[#333333]">
                  <td className="py-4 px-4 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[#addbc0] focus:ring-[#addbc0]" />
                  </td>
                  <td className="px-4 py-4 font-medium text-gray-500">
                    PB-{String(patient.patient_id).padStart(3, "0")}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2.5">
                      <img src={`https://i.pravatar.cc/150?img=${patient.patient_id + 5}`} alt={patient.full_name} className="w-8 h-8 rounded-full object-cover border border-gray-100" />
                      <span className="font-medium text-gray-800">{patient.full_name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{patient.gender || "—"}</td>
                  <td className="px-4 py-4 text-gray-600">{patient.birth_date || "—"}</td>
                  <td className="px-4 py-4 text-gray-600">{patient.phone || "—"}</td>
                  <td className="px-4 py-4 text-gray-600">{patient.email || "—"}</td>
                  <td className="px-4 py-4 text-gray-600">{patient.city || "—"}</td>
                  <td className="px-4 py-4 text-center"><MembershipBadge membershipId={patient.membership_id} /></td>
                  <td className="px-4 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider">
                      <button onClick={() => handleEditClick(patient)} className="text-blue-500 hover:text-blue-700 transition">Edit</button>
                      <span className="text-gray-200">|</span>
                      <button onClick={() => onDelete(patient.patient_id)} className="text-red-400 hover:text-red-600 transition">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {currentData.length === 0 && (
                <tr>
                  <td colSpan="10" className="text-center py-8 text-xs text-gray-400">No patients data found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Tampilan Mobile & Tablet (Responsive Card) */}
        <div className="lg:hidden p-4 space-y-3 bg-gray-50/40">
          {currentData.map((patient) => (
            <div key={patient.patient_id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/150?img=${patient.patient_id + 5}`} alt={patient.full_name} className="w-11 h-11 rounded-full object-cover border border-gray-100" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{patient.full_name}</h4>
                    <p className="text-xs text-gray-400">PB-{String(patient.patient_id).padStart(3, "0")}</p>
                  </div>
                </div>
                <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-wide">
                  <button onClick={() => handleEditClick(patient)} className="text-blue-500 bg-blue-50/60 px-2 py-1 rounded-md">Edit</button>
                  <button onClick={() => onDelete(patient.patient_id)} className="text-red-500 bg-red-50/60 px-2 py-1 rounded-md">Del</button>
                </div>
              </div>
              <div className="space-y-2.5 border-t border-gray-100 pt-3 text-xs">
                <div className="flex justify-between"><span className="text-gray-400">Gender</span><span className="text-gray-700 font-medium">{patient.gender || "—"}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Birth Date</span><span className="text-gray-700 font-medium">{patient.birth_date || "—"}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Phone</span><span className="text-gray-700 font-medium">{patient.phone || "—"}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Email</span><span className="text-gray-700 font-medium break-all text-right max-w-[180px]">{patient.email || "—"}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">City</span><span className="text-gray-700 font-medium">{patient.city || "—"}</span></div>
                <div className="flex justify-between items-center pt-0.5"><span className="text-gray-400">Membership</span><MembershipBadge membershipId={patient.membership_id} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER PAGINATION */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 px-2 text-xs font-medium text-gray-500">
        <div className="flex items-center gap-2">
          <span>Showing</span>
          <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }} className="bg-white border border-gray-200 rounded-lg px-2 py-1.5 text-gray-700 font-semibold focus:outline-none">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span>out of {totalItems}</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-100 bg-white shadow-xs ${currentPage === 1 ? "opacity-40" : "hover:bg-gray-50"}`}><FiChevronLeft className="w-4 h-4" /></button>
          {renderPageNumbers().map((page, idx) => (
            <button key={idx} disabled={page === "..."} onClick={() => handlePageChange(page)} className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold ${page === currentPage ? "bg-[#e8f5e9] text-[#4caf50]" : "text-gray-600 hover:bg-gray-100/70"}`}>{page}</button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-100 bg-white shadow-xs ${currentPage === totalPages ? "opacity-40" : "hover:bg-gray-50"}`}><FiChevronRight className="w-4 h-4" /></button>
        </div>
      </div>

      {/* MODAL FORM POPUP PATIENT */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-[24px] max-w-md w-full shadow-xl border border-gray-100 my-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              {isEditMode ? "Edit Patient Info" : "Register New Patient"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Full Name</label>
                <input type="text" name="full_name" value={formForm.full_name} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="Patient full name" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Gender</label>
                  <select name="gender" value={formForm.gender} onChange={handleChange} className="w-full border-b border-gray-200 py-1.5 text-sm outline-none bg-transparent focus:border-[#4caf50]">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Birth Date</label>
                  <input type="date" name="birth_date" value={formForm.birth_date} onChange={handleChange} required className="w-full border-b border-gray-200 py-1 text-sm outline-none focus:border-[#4caf50]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Phone</label>
                  <input type="tel" name="phone" value={formForm.phone} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="0812..." />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">City</label>
                  <input type="text" name="city" value={formForm.city} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="Medan" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Email</label>
                <input type="email" name="email" value={formForm.email} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="patient@email.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Membership Tier</label>
                  <select name="membership_id" value={formForm.membership_id} onChange={handleChange} className="w-full border-b border-gray-200 py-1.5 text-sm outline-none bg-transparent focus:border-[#4caf50]">
                    <option value={1}>None (0%)</option>
                    <option value={2}>Silver (5%)</option>
                    <option value={3}>Gold (10%)</option>
                    <option value={4}>Platinum (15%)</option>
                    <option value={5}>VIP (20%)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Linked User ID (Optional)</label>
                  <input type="number" name="user_id" value={formForm.user_id} onChange={handleChange} className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="e.g. 6" />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-gray-700">Cancel</button>
                <button type="submit" className="bg-[#4caf50] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#43a047] transition shadow-xs">Save Patient</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}