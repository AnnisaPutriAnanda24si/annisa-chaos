import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch, FiPlus } from "react-icons/fi";

export default function BookingTable({ data = [], patientsList = [], schedulesList = [], treatmentsList = [], onSave, onDelete }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formForm, setFormForm] = useState({
    patient_id: "",
    schedule_id: "",
    treatment_id: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    const value = e.target.name !== "status" ? Number(e.target.value) : e.target.value;
    setFormForm({ ...formForm, [e.target.name]: value });
  };

  const handleAddClick = () => {
    setIsEditMode(false);
    setFormForm({
      patient_id: patientsList[0]?.patient_id || "",
      schedule_id: schedulesList[0]?.schedule_id || "",
      treatment_id: treatmentsList[0]?.treatment_id || "",
      status: "Pending"
    });
    setShowModal(true);
  };

  const handleEditClick = (booking) => {
    setIsEditMode(true);
    setSelectedId(booking.booking_id);
    setFormForm({
      patient_id: booking.patient_id || "",
      schedule_id: booking.schedule_id || "",
      treatment_id: booking.treatment_id || "",
      status: booking.status || "Pending"
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSave(formForm, isEditMode, selectedId);
      setShowModal(false);
    } catch (err) {
      alert(err.message || "Slot jadwal ini mungkin sudah terisi oleh orang lain.");
    }
  };

  // Filter Data berdasarkan Nama Pasien atau Nama Dokter
  const filteredData = data.filter((item) =>
    item.patient?.patient_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.schedule?.doctor?.doctor_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "bg-blue-50 text-blue-600";
      case "Completed": return "bg-green-50 text-green-600";
      case "Cancelled": return "bg-red-50 text-red-600";
      default: return "bg-amber-50 text-amber-600"; // Pending
    }
  };

  // Helper untuk format rupiah rupiah
  const formatRupiah = (number) => {
    if (!number) return "—";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="w-full bg-[#fcf9f9] p-4 rounded-[24px] space-y-4">
      {/* FILTER SEARCH & BUTTON */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between items-center px-2">
        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            placeholder="Search patient or doctor name..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-full text-xs border border-transparent shadow-xs focus:outline-none focus:bg-white"
          />
        </div>
        <button onClick={handleAddClick} className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#addbc0] text-[#1e4620] hover:bg-[#99cca6] transition px-4 py-2 rounded-full text-xs font-bold">
          <FiPlus className="w-4 h-4" /> New Appointment
        </button>
      </div>

      {/* STRUKTUR UTAMA TABEL */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100/80 overflow-hidden">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-medium text-gray-400">
                <th className="py-5 px-6 text-left font-semibold">Booking ID</th>
                <th className="py-5 px-6 text-left font-semibold">Patient Name</th>
                <th className="py-5 px-6 text-left font-semibold">Doctor In Charge</th>
                <th className="py-5 px-6 text-left font-semibold">Treatment</th>
                <th className="py-5 px-6 text-left font-semibold">Price</th> {/* KOLOM BARU */}
                <th className="py-5 px-6 text-left font-semibold">Appointment Date</th>
                <th className="py-5 px-6 text-center font-semibold">Status</th>
                <th className="py-5 px-6 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100/70 text-sm text-[#333333]">
              {currentData.map((item) => (
                <tr key={item.booking_id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-500">BKG-{String(item.booking_id).padStart(3, "0")}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{item.patient?.full_name || "—"}</td>
                  <td className="px-6 py-4 text-gray-700">{item.schedule?.doctor?.doctor_name || "—"}</td>
                  <td className="px-6 py-4 text-gray-600">{item.treatment?.treatment_name || "—"}</td>
                  <td className="px-6 py-4 font-medium text-zinc-600">{formatRupiah(item.treatment?.price)}</td> {/* VALUE HARGA BARU */}
                  <td className="px-6 py-4 text-gray-600">{item.schedule?.date || "—"}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>{item.status}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider">
                      <button onClick={() => handleEditClick(item)} className="text-blue-500 hover:text-blue-700">Edit</button>
                      <span className="text-gray-200">|</span>
                      <button onClick={() => onDelete(item.booking_id)} className="text-red-400 hover:text-red-600">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* POPUP MODAL DI DALAM TABEL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-[24px] max-w-md w-full shadow-xl">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">{isEditMode ? "Update Status Booking" : "Create New Appointment"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isEditMode && (
                <>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Select Patient</label>
                    <select name="patient_id" value={formForm.patient_id} onChange={handleChange} required className="w-full border-b py-1.5 text-sm outline-none focus:border-[#4caf50]">
                      {patientsList.map((p) => <option key={p.patient_id} value={p.patient_id}>{p.full_name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Select Schedule Slot</label>
                    <select name="schedule_id" value={formForm.schedule_id} onChange={handleChange} required className="w-full border-b py-1.5 text-sm outline-none focus:border-[#4caf50]">
                      {schedulesList.map((s) => <option key={s.schedule_id} value={s.schedule_id}>{s.date} — {s.doctor?.doctor_name} (Room {s.room_number})</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Select Treatment</label>
                    <select name="treatment_id" value={formForm.treatment_id} onChange={handleChange} required className="w-full border-b py-1.5 text-sm outline-none focus:border-[#4caf50]">
                      {treatmentsList.map((t) => <option key={t.treatment_id} value={t.treatment_id}>{t.treatment_name} — ({formatRupiah(t.price)})</option>)}
                    </select>
                  </div>
                </>
              )}
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">Booking Status</label>
                <select name="status" value={formForm.status} onChange={handleChange} className="w-full border-b py-1.5 text-sm outline-none focus:border-[#4caf50]">
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-xs font-semibold text-gray-400">Cancel</button>
                <button type="submit" className="bg-[#4caf50] text-white px-5 py-2 rounded-full text-xs font-semibold">Save Appointment</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}