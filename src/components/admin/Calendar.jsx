import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Calendar() {
  return (
    <div className="bg-white rounded-[28px] p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold">
          September 2028
        </h3>

        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-[#dff0e6] flex items-center justify-center">
            <FaChevronLeft />
          </button>

          <button className="w-8 h-8 rounded-full bg-[#dff0e6] flex items-center justify-center">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center text-xs text-gray-400 mb-4">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center text-sm">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              [2, 7, 8, 11, 15, 17, 19, 22, 24, 27, 29].includes(i)
                ? "bg-[#f3d1c8]"
                : ""
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}