import React, { useState } from "react";

export default function ScheduleCard({
  id,
  month,
  date,
  title,
  doctor,
  time,
  status,
  onAction,
}) {
  const [showMenu, setShowMenu] = useState(false);

  const isCompleted =
    status?.toLowerCase() === "completed";

  return (
    <div
      className="
        relative
        flex
        items-center
        justify-between
        bg-white
        rounded-2xl
        border
        border-[#1C1C1C]/5
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        p-6
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-6">

        {/* Date */}
        <div
          className="
            w-16
            h-16
            rounded-xl
            bg-[#FAF7F2]
            flex
            flex-col
            justify-center
            items-center
            border
            border-[#1C1C1C]/5
          "
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#E67E22] font-semibold font-urbanist">
            {month}
          </span>

          <span className="font-playfair text-2xl text-[#1C1C1C] leading-none">
            {date}
          </span>
        </div>

        {/* Information */}
        <div>

          <h3 className="font-playfair text-xl text-[#1C1C1C]">
            {title}
          </h3>

          <p className="mt-1 text-sm text-[#555555] font-urbanist">
            {doctor}
          </p>

          <p className="text-sm text-[#E67E22] font-medium font-urbanist">
            {time}
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* Status */}
        {isCompleted ? (
          <span
            className="
              px-4
              py-2
              rounded-full
              bg-[#E8F7EE]
              text-[#1E8E5A]
              text-xs
              font-semibold
              font-urbanist
            "
          >
            ✓ Completed
          </span>
        ) : (
          <span
            className="
              px-4
              py-2
              rounded-full
              bg-[#FAF7F2]
              text-[#E67E22]
              text-xs
              font-semibold
              font-urbanist
            "
          >
            {status}
          </span>
        )}

        {/* Menu */}
        <div className="relative">

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="
              w-10
              h-10
              rounded-full
              bg-[#FAF7F2]
              hover:bg-[#E67E22]
              hover:text-white
              transition-all
              text-xl
              text-[#555555]
            "
          >
            ⋮
          </button>

          {showMenu && (
            <div
              className="
                absolute
                right-0
                mt-3
                w-44
                bg-white
                rounded-xl
                shadow-xl
                border
                border-[#1C1C1C]/5
                overflow-hidden
                z-20
              "
            >
              <button
                onClick={() => {
                  onAction(
                    id,
                    isCompleted ? "delete" : "cancel"
                  );
                  setShowMenu(false);
                }}
                className="
                  w-full
                  px-5
                  py-3
                  text-left
                  font-urbanist
                  text-sm
                  text-[#555555]
                  hover:bg-[#FAF7F2]
                  hover:text-[#E67E22]
                  transition-colors
                "
              >
                {isCompleted
                  ? "Delete History"
                  : "Cancel Appointment"}
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}