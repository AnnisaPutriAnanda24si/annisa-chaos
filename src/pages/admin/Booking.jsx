import React, { useState, useEffect } from "react";
import { bookingAPI } from '@/services/bookingAPI';
import { patientsAPI } from '@/services/patientAPI';
import { scheduleAPI } from '@/services/scheduleAPI';
import { treatmentAPI } from '@/services/treatmentAPI';
import BookingTable from "@/components/admin/BookingTable";

export default function Booking() {
  const [bookingData, setBookingData] = useState([]);
  const [patientsList, setPatientsList] = useState([]);
  const [schedulesList, setSchedulesList] = useState([]);
  const [treatmentsList, setTreatmentsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAllBookingData = async () => {
    try {
      setLoading(true);
      const [bookings, patients, schedules, treatments] = await Promise.all([
        bookingAPI.fetchBookings(),
        patientsAPI.fetchPatients(),
        scheduleAPI.fetchSchedules(),
        treatmentAPI.fetchTreatments()
      ]);
      setBookingData(bookings);
      setPatientsList(patients);
      setSchedulesList(schedules);
      setTreatmentsList(treatments);
    } catch (err) {
      setError(err.message || "Gagal memuat rekam jejak janji temu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllBookingData();
  }, []);

  const handleSaveBooking = async (formData, isEditMode, selectedId) => {
    if (isEditMode) {
      // Jika edit mode, kita hanya melakukan update kolom 'status' saja
      await bookingAPI.updateBooking(selectedId, { status: formData.status });
    } else {
      await bookingAPI.createBooking(formData);
    }
    loadAllBookingData();
  };

  const handleDeleteBooking = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data booking janji temu ini?")) {
      try {
        await bookingAPI.deleteBooking(id);
        loadAllBookingData();
      } catch (err) {
        alert(err.message || "Gagal menghapus booking");
      }
    }
  };

  if (loading && bookingData.length === 0) {
    return <div className="p-4 text-zinc-500 text-sm">Loading appointment logs...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 text-sm">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen text-left flex flex-col justify-start items-stretch p-0 m-0">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#1e293b] tracking-tight">Appointments Booking</h1>
        <p className="text-xs text-gray-400 mt-1">Manage and verify medical reservation lists between patients, doctors, and treatments</p>
      </div>

      <div className="w-full">
        <BookingTable
          data={bookingData}
          patientsList={patientsList}
          schedulesList={schedulesList}
          treatmentsList={treatmentsList}
          onSave={handleSaveBooking}
          onDelete={handleDeleteBooking}
        />
      </div>
    </div>
  );
}