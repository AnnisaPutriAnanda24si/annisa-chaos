import React, { useMemo, useState } from "react";
import {
  AiFillClockCircle,
} from "react-icons/ai";
import {
  BsFillCalendarDateFill,
  BsFillSunFill,
  BsFillCloudSunFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { ImLocation } from "react-icons/im";

export default function AppointmentForm() {

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [voucher, setVoucher] = useState("");

  const morningSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
  ];

  const afternoonSlots = [
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  const eveningSlots = [
    "06:00 PM",
    "07:00 PM",
    "07:30 PM",
  ];

  const monthName = new Date(
    currentYear,
    currentMonth
  ).toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  }, [currentMonth, currentYear]);

  const firstDay = useMemo(() => {
    let day = new Date(currentYear, currentMonth, 1).getDay();
    return day === 0 ? 6 : day - 1;
  }, [currentMonth, currentYear]);

  const dates = [];

  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  return (
    <div className="space-y-6">

      {/* ================= DATE ================= */}

      <section className="bg-white rounded-2xl border border-[#ECE7DF] shadow-sm p-6">

        <div className="flex items-center justify-between mb-5">

          <div>

            <h2 className="font-playfair text-2xl text-[#1C1C1C]">
              Select Appointment Date
            </h2>

            <p className="font-urbanist text-sm text-gray-500 mt-2">
              Choose your preferred appointment schedule.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={previousMonth}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#E67E22] hover:text-[#E67E22] transition"
            >
              ←
            </button>

            <span className="font-semibold font-urbanist text-[#1C1C1C]">
              {monthName} {currentYear}
            </span>

            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#E67E22] hover:text-[#E67E22] transition"
            >
              →
            </button>

          </div>

        </div>

        {/* Week */}

        <div className="grid grid-cols-7 mb-4">

          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day)=>(
            <div
              key={day}
              className="text-center text-xs uppercase tracking-widest text-gray-400 font-semibold"
            >
              {day}
            </div>
          ))}

        </div>

        {/* Calendar */}

        <div className="grid grid-cols-7 gap-3">

          {dates.map((day,index)=>

            day===null ?

            <div key={index}></div>

            :

            <button
              key={day}
              onClick={()=>setSelectedDate(day)}
              className={`

                h-10
                rounded-xl
                transition-all
                duration-300
                font-medium

                ${
                  selectedDate===day
                  ?

                  "bg-[#1C1C1C] text-white shadow-md"

                  :

                  "hover:bg-[#FAF7F2] hover:text-[#E67E22] text-[#1C1C1C] border border-transparent hover:border-[#E8E4DF]"

                }

              `}
            >
              {day}
            </button>

          )}

        </div>

      </section>

            {/* ================= TIME SELECTION ================= */}

      <section className="bg-white rounded-2xl border border-[#ECE7DF] shadow-sm p-6">

        <div className="mb-5">

          <h2 className="font-playfair text-2xl text-[#1C1C1C]">
            Select Time
          </h2>

          <p className="font-urbanist text-sm text-gray-500 mt-2">
            Pick the time that works best for your schedule.
          </p>

        </div>

        {/* MORNING */}

        <div className="mb-5">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#E67E22] text-lg">
              <BsFillSunFill />
            </div>

            <div>

              <h3 className="font-semibold text-[#1C1C1C]">
                Morning
              </h3>

              <p className="text-sm text-gray-400">
                Start your day refreshed
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

            {morningSlots.map((t) => (

              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`

                  py-2
                  rounded-xl
                  border
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    selectedTime === t
                      ? "bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-md"
                      : "border-[#E8E4DF] hover:border-[#E67E22] hover:text-[#E67E22] hover:bg-[#FAF7F2]"
                  }

                `}
              >
                {t}
              </button>

            ))}

          </div>

        </div>

        {/* AFTERNOON */}

        <div className="mb-5">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#E67E22] text-lg">
              <BsFillCloudSunFill />
            </div>

            <div>

              <h3 className="font-semibold text-[#1C1C1C]">
                Afternoon
              </h3>

              <p className="text-sm text-gray-400">
                Perfect for your lunch break
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

            {afternoonSlots.map((t) => (

              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`

                  py-2
                  rounded-xl
                  border
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    selectedTime === t
                      ? "bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-md"
                      : "border-[#E8E4DF] hover:border-[#E67E22] hover:text-[#E67E22] hover:bg-[#FAF7F2]"
                  }

                `}
              >
                {t}
              </button>

            ))}

          </div>

        </div>

        {/* EVENING */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#E67E22] text-lg">
              <BsFillMoonStarsFill />
            </div>

            <div>

              <h3 className="font-semibold text-[#1C1C1C]">
                Evening
              </h3>

              <p className="text-sm text-gray-400">
                Relax after your busy day
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

            {eveningSlots.map((t) => (

              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`

                  py-2
                  rounded-xl
                  border
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    selectedTime === t
                      ? "bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-md"
                      : "border-[#E8E4DF] hover:border-[#E67E22] hover:text-[#E67E22] hover:bg-[#FAF7F2]"
                  }

                `}
              >
                {t}
              </button>

            ))}

          </div>

        </div>

      </section>
            {/* ================= SUMMARY ================= */}

      <section className="bg-white rounded-2xl border border-[#ECE7DF] shadow-sm p-6">

        <div className="mb-5">

          <h2 className="font-playfair text-2xl text-[#1C1C1C]">
            Appointment Summary
          </h2>

          <p className="font-urbanist text-sm text-gray-500 mt-2">
            Please review your appointment before confirming.
          </p>

        </div>

        <div className="space-y-5">

          {/* Date */}

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#E67E22] text-lg">
              <BsFillCalendarDateFill />
            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-400">
                Appointment Date
              </p>

              <p className="font-semibold text-[#1C1C1C]">
                {selectedDate} {monthName} {currentYear}
              </p>

            </div>

          </div>

          {/* Time */}

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#E67E22] text-lg">
              <AiFillClockCircle />
            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-400">
                Appointment Time
              </p>

              <p className="font-semibold text-[#1C1C1C]">
                {selectedTime}
              </p>

            </div>

          </div>

          {/* Location */}

          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#E67E22] text-lg">
              <ImLocation />
            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-400">
                Clinic
              </p>

              <p className="font-semibold text-[#1C1C1C]">
                Skinova Beauty Clinic
              </p>

              <p className="text-sm text-gray-500">
                Main Plaza • Room 402
              </p>

            </div>

          </div>

        </div>

        {/* Payment */}

        <div className="mt-8">

          <label className="block mb-2 text-sm font-semibold text-[#1C1C1C]">
            Payment Method
          </label>

          <select
            value={paymentMethod}
            onChange={(e)=>setPaymentMethod(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-[#E8E4DF]
              bg-[#FAF7F2]
              px-4
              py-2
              outline-none
              focus:border-[#E67E22]
              transition
            "
          >

            <option value="">
              Select Payment Method
            </option>

            <option>
              QRIS
            </option>

            <option>
              Bank Transfer
            </option>

            <option>
              Credit Card
            </option>

          </select>

        </div>

        {/* Voucher */}

        <div className="mt-6">

          <label className="block mb-2 text-sm font-semibold text-[#1C1C1C]">
            Voucher
          </label>

          <select
            value={voucher}
            onChange={(e)=>setVoucher(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-[#E8E4DF]
              bg-[#FAF7F2]
              px-4
              py-2
              outline-none
              focus:border-[#E67E22]
              transition
            "
          >

            <option value="">
              No Voucher
            </option>

            <option>
              Member Discount 5%
            </option>

            <option>
              New Member 10%
            </option>

          </select>

        </div>

        {/* Divider */}

        <div className="border-t border-[#ECE7DF] my-8"></div>

        {/* Total */}

        <div className="flex items-center justify-between mb-5">

          <div>

            <p className="text-sm text-gray-500">
              Estimated Total
            </p>

            <h3 className="font-playfair text-2xl text-[#1C1C1C]">
              Rp850.000
            </h3>

          </div>

          <span className="px-4 py-2 rounded-full bg-[#FAF7F2] text-[#E67E22] font-semibold text-sm">
            Premium Member
          </span>

        </div>

        {/* Button */}

        <a
          href="/home_member"
          className="
            w-full
            flex
            items-center
            justify-center
            rounded-xl
            bg-[#1C1C1C]
            hover:bg-[#E67E22]
            text-white
            py-3
            font-semibold
            transition-all
            duration-300
            shadow-md
          "
        >
          Confirm Booking →
        </a>

        <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">

          By confirming your booking, you agree to our Terms of Service,
          Privacy Policy, and cancellation policy.

        </p>

      </section>

    </div>

  );

}