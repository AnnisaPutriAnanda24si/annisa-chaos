import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch, FiPlus } from "react-icons/fi";

export default function ScheduleTable({ data = [], doctorsList = [], onSave, onDelete }) {
  // --- STATE SEARCH & PAGINATION ---
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // --- STATE MODAL FORM INTERNAL ---
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formForm, setFormForm] = useState({
    doctor_id: "",
    date: "",
    start_time: "",
    end_time: "",
    room_number: ""
  });

  // Fungsi untuk mendapatkan tanggal hari ini + 7 hari dengan format YYYY-MM-DD
const getMinDate = () => {
  const today = new Date();
  
  // Tambahkan 7 hari ke tanggal hari ini
  today.setDate(today.getDate() + 7);
  
  // Format ke YYYY-MM-DD
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
};

  const handleChange = (e) => {
    const value = e.target.name === "doctor_id"
      ? (e.target.value ? Number(e.target.value) : "")
      : e.target.value;

    setFormForm({ ...formForm, [e.target.name]: value });
  };

  const handleAddClick = () => {
    setIsEditMode(false);
    setFormForm({
      doctor_id: doctorsList[0]?.doctor_id || "",
      date: "", start_time: "", end_time: "", room_number: ""
    });
    setShowModal(true);
  };

  const handleEditClick = (schedule) => {
    setIsEditMode(true);
    setSelectedId(schedule.schedule_id);
    setFormForm({
      doctor_id: schedule.doctor_id || "",
      date: schedule.date || "",
      start_time: schedule.start_time ? schedule.start_time.substring(0, 5) : "",
      end_time: schedule.end_time ? schedule.end_time.substring(0, 5) : "",
      room_number: schedule.room_number || ""
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

  // Filter Data berdasarkan nomor ruangan atau nama dokter yang berelasi
  const filteredData = data.filter((item) =>
    item.room_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.doctor?.doctor_name?.toLowerCase().includes(searchQuery.toLowerCase())
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
            placeholder="Search doctor name or room number..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-full text-xs border border-transparent shadow-xs focus:outline-none focus:bg-white focus:border-gray-200"
          />
        </div>
        
        <button
          onClick={handleAddClick}
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#addbc0] text-[#1e4620] hover:bg-[#99cca6] transition px-4 py-2 rounded-full text-xs font-bold"
        >
          <FiPlus className="w-4 h-4" />
          Add Schedule
        </button>
      </div>

      {/* STRUKTUR UTAMA TABEL */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100/80 overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-medium text-gray-400">
                <th className="w-12 py-5 px-6 text-center">
                  <input type="checkbox" className="rounded border-gray-300 text-[#addbc0] focus:ring-[#addbc0]" />
                </th>
                <th className="py-5 px-6 text-left font-semibold">Schedule ID</th>
                <th className="py-5 px-6 text-left font-semibold">Doctor Name</th>
                <th className="py-5 px-6 text-left font-semibold">Date</th>
                <th className="py-5 px-6 text-left font-semibold">Time Session</th>
                <th className="py-5 px-6 text-left font-semibold">Room Number</th>
                <th className="py-5 px-6 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/70">
              {currentData.map((item) => (
                <tr key={item.schedule_id} className="hover:bg-gray-50/50 transition-colors text-sm text-[#333333]">
                  <td className="py-4 px-6 text-center">
                    <input type="checkbox" className="rounded border-gray-300 text-[#addbc0] focus:ring-[#addbc0]" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-500">SCH-{String(item.schedule_id).padStart(3, "0")}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{item.doctor?.doctor_name || `ID Dokter: ${item.doctor_id}`}</td>
                  <td className="px-6 py-4 text-gray-600">{item.date}</td>
                  <td className="px-6 py-4 text-gray-600 font-mono text-xs">
                    {item.start_time?.substring(0, 5)} - {item.end_time?.substring(0, 5)}
                  </td>
                  <td className="px-6 py-4"><span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs font-semibold">{item.room_number}</span></td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider">
                      <button onClick={() => handleEditClick(item)} className="text-blue-500 hover:text-blue-700 transition">Edit</button>
                      <span className="text-gray-200">|</span>
                      <button onClick={() => onDelete(item.schedule_id)} className="text-red-400 hover:text-red-600 transition">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {currentData.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-xs text-gray-400">No schedules found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Tampilan Mobile */}
        <div className="md:hidden p-4 space-y-3 bg-gray-50/40">
          {currentData.map((item) => (
            <div key={item.schedule_id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">{item.doctor?.doctor_name || `ID Dokter: ${item.doctor_id}`}</h4>
                  <p className="text-xs text-gray-400">SCH-{String(item.schedule_id).padStart(3, "0")}</p>
                </div>
                <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-wide">
                  <button onClick={() => handleEditClick(item)} className="text-blue-500 bg-blue-50/60 px-2 py-1 rounded-md">Edit</button>
                  <button onClick={() => onDelete(item.schedule_id)} className="text-red-500 bg-red-50/60 px-2 py-1 rounded-md">Del</button>
                </div>
              </div>
              <div className="space-y-2.5 border-t border-gray-100 pt-3 text-xs">
                <div className="flex justify-between"><span className="text-gray-400">Date</span><span className="text-gray-700 font-medium">{item.date}</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Session</span><span className="font-mono text-gray-700">{item.start_time?.substring(0, 5)} - {item.end_time?.substring(0, 5)}</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-400">Room</span><span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-semibold">{item.room_number}</span></div>
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

      {/* MODAL FORM POPUP SCHEDULE */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-[24px] max-w-md w-full shadow-xl border border-gray-100">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              {isEditMode ? "Edit Session Schedule" : "Create New Schedule"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Assign Doctor</label>
                <select name="doctor_id" value={formForm.doctor_id} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none bg-transparent focus:border-[#4caf50]">
                  {doctorsList.map((doc) => (
                    <option key={doc.doctor_id} value={doc.doctor_id}>
                      {doc.doctor_name} ({doc.specialization})
                    </option>
                  ))}
                  {doctorsList.length === 0 && <option value="">No doctors available</option>}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Date</label>
                <input type="date" min={getMinDate()} name="date" value={formForm.date} onChange={handleChange} required className="w-full border-b border-gray-200 py-1 text-sm outline-none focus:border-[#4caf50]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Start Time</label>
                  <input type="time" name="start_time" value={formForm.start_time} onChange={handleChange} required className="w-full border-b border-gray-200 py-1 text-sm outline-none focus:border-[#4caf50]" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">End Time</label>
                  <input type="time" name="end_time" value={formForm.end_time} onChange={handleChange} required className="w-full border-b border-gray-200 py-1 text-sm outline-none focus:border-[#4caf50]" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Room Number</label>
                <input type="text" name="room_number" value={formForm.room_number} onChange={handleChange} required className="w-full border-b border-gray-200 py-1.5 text-sm outline-none focus:border-[#4caf50]" placeholder="e.g. Room A-02" />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-gray-700">Cancel</button>
                <button type="submit" className="bg-[#4caf50] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#43a047] transition shadow-xs">Save Schedule</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
