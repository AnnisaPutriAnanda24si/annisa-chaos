import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch, FiPlus } from "react-icons/fi";

export default function DoctorTable({ data = [], onSave, onDelete }) {
  // --- STATE SEARCH & PAGINATION ---
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // --- STATE MODAL FORM INTERNAL ---
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formForm, setFormForm] = useState({
    doctor_name: "",
    specialization: "",
    experience_year: "",
    linkedin: "",
    profile_description: "",
    photo: "" // 🌟 State baru untuk photo
  });

  const handleChange = (e) => {
    const value = e.target.name === "experience_year"
      ? (e.target.value ? Number(e.target.value) : "")
      : e.target.value;

    setFormForm({ ...formForm, [e.target.name]: value });
  };

  const handleAddClick = () => {
    setIsEditMode(false);
    setFormForm({
      doctor_name: "", specialization: "", experience_year: "",
      linkedin: "", profile_description: "", photo: ""
    });
    setShowModal(true);
  };

  const handleEditClick = (doctor) => {
    setIsEditMode(true);
    setSelectedId(doctor.doctor_id);
    setFormForm({
      doctor_name: doctor.doctor_name || "",
      specialization: doctor.specialization || "",
      experience_year: doctor.experience_year || "",
      linkedin: doctor.linkedin || "",
      profile_description: doctor.profile_description || "",
      photo: doctor.photo || "" // 🌟 Load data photo yang sudah ada
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formForm, isEditMode, selectedId);
      setShowModal(false);
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat menyimpan");
    }
  };

  // Filter Data
  const filteredData = data.filter((item) =>
    item.doctor_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.specialization?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
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
            placeholder="Search doctor name or specialization..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-full text-xs border border-transparent shadow-xs focus:outline-none focus:bg-white focus:border-gray-200"
          />
        </div>
        
        <button
          onClick={handleAddClick}
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#addbc0] text-[#1e4620] hover:bg-[#99cca6] transition px-4 py-2 rounded-full text-xs font-bold"
        >
          <FiPlus className="w-4 h-4" />
          Add Doctor
        </button>
      </div>

      {/* STRUKTUR UTAMA TABEL */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100/80 overflow-hidden">
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-medium text-gray-400">
                <th className="w-12 py-5 px-6 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-[#addbc0] focus:ring-[#addbc0]" />
                </th>
                <th className="py-5 px-6 text-left font-semibold">Doctor ID</th>
                <th className="py-5 px-6 text-left font-semibold">Name</th>
                <th className="py-5 px-6 text-left font-semibold">Specialization</th>
                <th className="py-5 px-6 text-left font-semibold">Experience</th>
                <th className="py-5 px-6 text-left font-semibold">LinkedIn</th>
                <th className="py-5 px-6 text-left font-semibold">Description</th>
                <th className="py-5 px-6 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/70">
              {currentData.map((doctor) => {
                // 🌟 Fallback URL jika kolom photo kosong
                const photoSrc = doctor.photo || `https://i.prphoto.cc/150?img=${doctor.doctor_id + 15}`;

                return (
                  <tr key={doctor.doctor_id} className="hover:bg-gray-50/50 transition-colors text-sm text-[#333333]">
                    <td className="py-4 px-6 text-center">
                      <input type="checkbox" className="rounded border-gray-300 text-[#addbc0] focus:ring-[#addbc0]" />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-500">DOC-{String(doctor.doctor_id).padStart(3, "0")}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      <div className="flex items-center gap-2.5">
                        <img 
                          src={photoSrc} 
                          alt={doctor.doctor_name} 
                          className="w-8 h-8 rounded-full object-cover border border-gray-100" 
                        />
                        <span>{doctor.doctor_name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{doctor.specialization}</td>
                    <td className="px-6 py-4 text-gray-600">{doctor.experience_year} Years</td>
                    <td className="px-6 py-4 text-blue-500 truncate max-w-[150px]">
                      {doctor.linkedin ? (
                        <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Profile Link
                        </a>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-400 truncate max-w-[200px]" title={doctor.profile_description}>
                      {doctor.profile_description || "—"}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider">
                        <button onClick={() => handleEditClick(doctor)} className="text-blue-500 hover:text-blue-700 transition">Edit</button>
                        <span className="text-gray-200">|</span>
                        <button onClick={() => onDelete(doctor.doctor_id)} className="text-red-400 hover:text-red-600 transition">Delete</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {currentData.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-8 text-xs text-gray-400">No doctors data found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Tampilan Mobile */}
        <div className="lg:hidden p-4 space-y-3 bg-gray-50/40">
          {currentData.map((doctor) => {
            const photoSrc = doctor.photo || `https://i.prphoto.cc/150?img=${doctor.doctor_id + 15}`;

            return (
              <div key={doctor.doctor_id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={photoSrc} 
                      alt={doctor.doctor_name} 
                      className="w-11 h-11 rounded-full object-cover border border-gray-100" 
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{doctor.doctor_name}</h4>
                      <p className="text-xs text-gray-400">DOC-{String(doctor.doctor_id).padStart(3, "0")}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-wide">
                    <button onClick={() => handleEditClick(doctor)} className="text-blue-500 bg-blue-50/60 px-2 py-1 rounded-md">Edit</button>
                    <button onClick={() => onDelete(doctor.doctor_id)} className="text-red-500 bg-red-50/60 px-2 py-1 rounded-md">Del</button>
                  </div>
                </div>
                <div className="space-y-2.5 border-t border-gray-100 pt-3 text-xs">
                  <div className="flex justify-between"><span className="text-gray-400">Specialization</span><span className="text-gray-700 font-medium">{doctor.specialization}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Experience</span><span className="text-gray-700 font-medium">{doctor.experience_year} Years</span></div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">LinkedIn</span>
                    <span className="text-blue-500 font-medium truncate max-w-[180px]">
                      {doctor.linkedin ? <a href={doctor.linkedin} target="_blank" rel="noopener noreferrer">{doctor.linkedin}</a> : "—"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="text-gray-400">Description</span>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-2 rounded-lg italic">{doctor.profile_description || "No description provided."}</p>
                  </div>
                </div>
              </div>
            );
          })}
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

      {/* MODAL FORM POPUP DOCTOR */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-[24px] max-w-md w-full shadow-xl border border-gray-100 my-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              {isEditMode ? "Edit Doctor Profile" : "Add New Doctor"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Doctor Name</label>
                <input type="text" name="doctor_name" value={formForm.doctor_name} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="Dr. Jane Doe" />
              </div>

              {/* 🌟 BARU: Input Field untuk photo URL */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">photo Image URL (Optional)</label>
                <input type="url" name="photo" value={formForm.photo} onChange={handleChange} className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="https://example.com/doctor-photo.jpg" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Specialization</label>
                  <input type="text" name="specialization" value={formForm.specialization} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="Dermatologist" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Experience (Years)</label>
                  <input type="number" name="experience_year" value={formForm.experience_year} onChange={handleChange} required min="0" className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="5" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">LinkedIn Profile Link</label>
                <input type="url" name="linkedin" value={formForm.linkedin} onChange={handleChange} className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="https://linkedin.com/in/username" />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Profile Description</label>
                <textarea name="profile_description" value={formForm.profile_description} onChange={handleChange} rows="3" className="w-full border border-gray-200 rounded-xl p-2 text-sm outline-none focus:border-[#4caf50] resize-none" placeholder="Write a short bio..."></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-gray-700">Cancel</button>
                <button type="submit" className="bg-[#4caf50] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#43a047] transition shadow-xs">Save Profile</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}