import { AiFillClockCircle } from "react-icons/ai"; 
import { BsFillCalendarDateFill } from "react-icons/bs"; 
import { BsFillSunFill } from "react-icons/bs"; 
import { BsFillCloudSunFill } from "react-icons/bs"; 
import { BsFillMoonStarsFill } from "react-icons/bs"; 
import { ImLocation } from "react-icons/im"; 
import React, { useState } from 'react';

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(11);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  // Mendefinisikan slot waktu langsung di dalam array lokal (ga pake JSON luar)
  const morningSlots = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
  const afternoonSlots = ["01:00 PM", "01:30 PM", "02:00 PM", "03:00 PM", "04:00 PM", "04:30 PM"];
  const eveningSlots = ["06:00 PM", "07:00 PM", "07:30 PM"];

  return (
    <div className="space-y-6">
      
      {/* SEKSI 1: SELECT DATE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-gray-800">Select Date</h2>
          <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
            <button className="text-gray-400 hover:text-gray-700">‹</button>
            <span>October 2023</span>
            <button className="text-gray-400 hover:text-gray-700">›</button>
          </div>
        </div>
        {/* Days Header */}
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-gray-400 mb-2">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
        {/* Days Grid Simulation */}
        <div className="grid grid-cols-7 gap-1.5 text-center text-xs font-semibold text-gray-400">
          <span className="p-2 text-gray-300">25</span><span className="p-2 text-gray-300">26</span><span className="p-2 text-gray-300">27</span><span className="p-2 text-gray-300">28</span><span className="p-2 text-gray-300">29</span><span className="p-2 text-gray-300">30</span>
          <span className="p-2 text-gray-700 bg-amber-50/40 rounded-lg">1</span>
          <span className="p-2 text-gray-700">2</span><span className="p-2 text-gray-700">3</span><span className="p-2 text-gray-700">4</span><span className="p-2 text-gray-700">5</span><span className="p-2 text-gray-700">6</span><span className="p-2 text-gray-700">7</span><span className="p-2 text-gray-700">8</span>
          <span className="p-2 text-gray-700">9</span><span className="p-2 text-gray-700">10</span>
          {/* Selected Date Style */}
          <button 
            type="button"
            onClick={() => setSelectedDate(11)} 
            className={`p-2 rounded-lg font-bold text-center transition-colors ${selectedDate === 11 ? 'bg-[#4A2810] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            11
          </button>
          <span className="p-2 text-gray-700">12</span><span className="p-2 text-gray-700">13</span><span className="p-2 text-gray-700">14</span><span className="p-2 text-gray-700">15</span>
        </div>
      </div>

      {/* SEKSI 2: SELECT TIME */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xs space-y-4">
        <h2 className="text-sm font-bold text-gray-800">Select Time</h2>
        
        {/* Morning Slots */}
        <div className="space-y-2">
          <span className="text-[11px] text-gray-400 font-bold block"><BsFillSunFill /> Morning</span>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {morningSlots.map(t => (
              <button 
                key={t} 
                type="button"
                onClick={() => setSelectedTime(t)} 
                className={`py-2 text-[10px] font-bold border rounded-lg transition-all text-center ${selectedTime === t ? 'bg-[#4A2810] border-[#4A2810] text-white shadow-xs' : 'border-gray-200 text-gray-600 bg-white hover:border-gray-300'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Afternoon Slots */}
        <div className="space-y-2 pt-1">
          <span className="text-[11px] text-gray-400 font-bold block"><BsFillCloudSunFill /> Afternoon</span>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {afternoonSlots.map(t => (
              <button 
                key={t} 
                type="button"
                onClick={() => setSelectedTime(t)} 
                className={`py-2 text-[10px] font-bold border rounded-lg transition-all text-center ${selectedTime === t ? 'bg-[#4A2810] border-[#4A2810] text-white shadow-xs' : 'border-gray-200 text-gray-600 bg-white hover:border-gray-300'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Evening Slots */}
        <div className="space-y-2 pt-1">
          <span className="text-[11px] text-gray-400 font-bold block"><BsFillMoonStarsFill /> Evening</span>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {eveningSlots.map(t => (
              <button 
                key={t} 
                type="button"
                onClick={() => setSelectedTime(t)} 
                className={`py-2 text-[10px] font-bold border rounded-lg transition-all text-center ${selectedTime === t ? 'bg-[#4A2810] border-[#4A2810] text-white shadow-xs' : 'border-gray-200 text-gray-600 bg-white hover:border-gray-300'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SEKSI 3: APPOINTMENT SUMMARY & SUBMIT */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-2xs space-y-4">
        <h2 className="text-sm font-bold text-gray-800">Appointment Summary</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-xs text-gray-700">
            <span className="p-2 bg-amber-50 text-[#4A2810] rounded-lg font-bold"><BsFillCalendarDateFill /></span>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Date</p>
              <p className="font-bold">Wednesday, Oct 11, 2023</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-xs text-gray-700">
            <span className="p-2 bg-amber-50 text-[#4A2810] rounded-lg font-bold"><AiFillClockCircle /></span>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Time</p>
              <p className="font-bold">{selectedTime} - {selectedTime === "10:00 AM" ? "10:45 AM" : "Selesai"}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-xs text-gray-700">
            <span className="p-2 bg-amber-50 text-[#4A2810] rounded-lg font-bold"><ImLocation /></span>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Location</p>
              <p className="font-bold">Main Plaza Clinic, Room 402</p>
            </div>
          </div>
        </div>

        {/* Dropdown Metode Pembayaran */}
        <div className="pt-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Pilih Metode Pembayaran</p>
          <div className="relative">
            <select className="w-full text-xs font-bold text-gray-700 bg-amber-50/40 border border-amber-100 p-3 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-amber-900/20 cursor-pointer">
              <option>Pilih Metode Pembayaran</option>
              <option>Qris</option>
              <option>Bank Transfer</option>
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 text-[10px]">▼</span>
          </div>
        </div>

                <div className="pt-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Pilih Metode Pembayaran</p>
          <div className="relative">
            <select className="w-full text-xs font-bold text-gray-700 bg-amber-50/40 border border-amber-100 p-3 rounded-xl appearance-none focus:outline-none focus:ring-1 focus:ring-amber-900/20 cursor-pointer">
              <option>Pilih Voucher</option>
              <option>Potongan Member 5%</option>
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 text-[10px]">▼</span>
          </div>
        </div>

        {/* Button Action Utama */}

            <a href="/home_member" className="w-full bg-[#4A2810] text-white hover:bg-[#361D0B] transition-colors font-bold text-xs py-3.5 rounded-xl shadow-sm flex items-center justify-center gap-2 mt-4 tracking-wide">Confirm Booking <span>➔</span></a>

        <p className="text-[9px] text-gray-400 text-center leading-normal">
          By confirming, you agree to our terms of service and 12-hour cancellation policy.
        </p>
      </div>

    </div>
  );
}