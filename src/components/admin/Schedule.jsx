import React from "react";
import { FaCheck, FaPlus } from "react-icons/fa";

export default function Schedule({ schedules }) {
  return (
    <div className="bg-white rounded-[28px] p-6">
      <div className="flex justify-between mb-5">
        <div>
          <h3 className="font-semibold">
            Surgery Schedules
          </h3>

          <p className="text-xs text-gray-400">
            Tuesday, 5 Sep 2028
          </p>
        </div>

        <FaPlus />
      </div>

      <div className="space-y-5">
        {schedules.map((item, index) => (
          <div
            key={index}
            className="flex gap-3"
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                item.active
                  ? "bg-[#cfe8db]"
                  : "border border-gray-300"
              }`}
            >
              {item.active && (
                <FaCheck className="text-[10px]" />
              )}
            </div>

            <div className="flex-1">
              <h4 className="font-medium">
                {item.doctor}
              </h4>

              <p className="text-sm text-gray-400">
                {item.patient}
              </p>

              <div className="flex justify-between mt-2">
                <span className="bg-[#f3d1c8] px-3 py-1 rounded-full text-xs">
                  {item.room}
                </span>

                <span className="text-xs text-gray-400">
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full py-3 rounded-full bg-[#cfe8db]">
        View All Schedule
      </button>
    </div>
  );
}