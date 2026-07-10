import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiEdit2 } from "react-icons/fi";

export default function MembershipTable({ data = [], onSave }) {
  // --- STATE PAGINATION ---
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Membership biasanya sedikit

  // --- STATE MODAL FORM INTERNAL ---
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formForm, setFormForm] = useState({
    membership_name: "",
    discount_percentage: ""
  });

  const handleChange = (e) => {
    const value = e.target.name === "discount_percentage"
      ? (e.target.value ? Number(e.target.value) : "")
      : e.target.value;

    setFormForm({ ...formForm, [e.target.name]: value });
  };

  // Buka modal untuk Edit Tier
  const handleEditClick = (tier) => {
    setSelectedId(tier.membership_id);
    setFormForm({
      membership_name: tier.membership_name || "",
      discount_percentage: tier.discount_percentage || ""
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formForm, selectedId);
      setShowModal(false);
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat menyimpan");
    }
  };

  // Kalkulasi Pagination
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  // Badge Warna untuk Tier
  const getTierColor = (name) => {
    const lname = name?.toLowerCase();
    if (lname?.includes("silver")) return "border-gray-200 text-gray-500 bg-gray-50";
    if (lname?.includes("gold")) return "border-[#ffe082] text-[#ff6f00] bg-[#fff8e1]";
    if (lname?.includes("platinum")) return "border-[#b2ebf2] text-[#006064] bg-[#e0f7fa]";
    if (lname?.includes("vip")) return "border-[#a5d6a7] text-[#1b5e20] bg-[#e8f5e9]";
    return "border-gray-100 text-gray-400 bg-white";
  };

  return (
    <div className="w-full bg-[#fcf9f9] p-4 rounded-[24px] space-y-4">
      {/* STRUKTUR UTAMA TABEL */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100/80 overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-medium text-gray-400">
                <th className="py-5 px-6 text-left font-semibold">Tier ID</th>
                <th className="py-5 px-6 text-left font-semibold">Tier Name</th>
                <th className="py-5 px-6 text-center font-semibold">Discount Benefits</th>
                <th className="py-5 px-6 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/70">
              {currentData.map((item) => (
                <tr key={item.membership_id} className="hover:bg-gray-50/50 transition-colors text-sm text-[#333333]">
                  <td className="px-6 py-4 font-medium text-gray-500">MBS-{String(item.membership_id).padStart(3, "0")}</td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border tracking-wider uppercase ${getTierColor(item.membership_name)}`}>
                      {item.membership_name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-gray-800 text-lg">
                    {item.discount_percentage}<span className="text-sm font-semibold">% OFF</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button 
                      onClick={() => handleEditClick(item)} 
                      className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3 py-1.5 rounded-full transition"
                    >
                      <FiEdit2 className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">Edit Tier</span>
                    </button>
                  </td>
                </tr>
              ))}
              {currentData.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-xs text-gray-400">No membership tiers data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Tampilan Mobile */}
        <div className="md:hidden p-4 space-y-3 bg-gray-50/40">
          {currentData.map((item) => (
            <div key={item.membership_id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold border tracking-wider uppercase ${getTierColor(item.membership_name)}`}>
                    {item.membership_name}
                  </span>
                  <p className="text-xs text-gray-400">MBS-{String(item.membership_id).padStart(3, "0")}</p>
                </div>
                <button 
                  onClick={() => handleEditClick(item)} 
                  className="text-blue-500 bg-blue-50/60 px-2 py-1 rounded-md text-xs font-semibold"
                >
                  Edit
                </button>
              </div>
              <div className="space-y-1.5 border-t border-gray-100 pt-3 text-center">
                <p className="text-gray-400 text-xs">Discount Benefits</p>
                <span className="text-2xl font-bold text-gray-800">{item.discount_percentage}<span className="text-lg font-semibold">% OFF</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER PAGINATION */}
      <div className="flex items-center justify-between gap-4 mt-5 px-2 text-xs font-medium text-gray-500">
        <p>Showing <span className="font-semibold text-gray-700">{totalItems}</span> tiers config</p>
        <div className="flex items-center gap-1">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-100 bg-white ${currentPage === 1 ? "opacity-40" : "hover:bg-gray-50"}`}><FiChevronLeft className="w-4 h-4" /></button>
          {[...Array(totalPages)].map((_, idx) => (
            <button key={idx} onClick={() => handlePageChange(idx + 1)} className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold ${idx + 1 === currentPage ? "bg-[#e8f5e9] text-[#1b5e20]" : "text-gray-600 hover:bg-gray-100/70"}`}>{idx + 1}</button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-100 bg-white ${currentPage === totalPages ? "opacity-40" : "hover:bg-gray-50"}`}><FiChevronRight className="w-4 h-4" /></button>
        </div>
      </div>

      {/* MODAL FORM POPUP MEMBERSHIP */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-[24px] max-w-md w-full shadow-xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Configure Membership Tier
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Tier Name (Read-Only)</label>
                <input 
                  type="text" 
                  name="membership_name" 
                  value={formForm.membership_name} 
                  onChange={handleChange} 
                  required 
                  readOnly // Admin tidak boleh ganti nama tier, hanya diskonnya
                  className="w-full border-b border-gray-100 py-1.5 text-sm outline-none text-gray-400 bg-gray-50" 
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Discount Benefits (%)</label>
                <input 
                  type="number" 
                  name="discount_percentage" 
                  value={formForm.discount_percentage} 
                  onChange={handleChange} 
                  required 
                  min="0"
                  max="100"
                  className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#1b5e20] text-gray-800 font-bold" 
                  placeholder="0 - 100" 
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-gray-400">Cancel</button>
                <button type="submit" className="bg-[#1b5e20] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#1e4620] shadow-xs">Update Tier Benefits</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}