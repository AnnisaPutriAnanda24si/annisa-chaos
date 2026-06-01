import React from "react";

export default function Review({
  title,
  treatments,
}) {
  return (
    <div className="bg-white rounded-[28px] p-6">
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <span>•••</span>
      </div>

      {treatments.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 py-4 border-b last:border-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#f3d1c8] flex items-center justify-center font-medium">
            #{index + 1}
          </div>

          <div>
            <p className="font-medium">
              {item.name}
            </p>

            <p className="text-xs text-gray-400">
              ⭐ {item.rating} • {item.reviews} reviews
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}