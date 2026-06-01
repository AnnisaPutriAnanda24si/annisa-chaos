import React from "react";

export default function Overview({
  title,
  filter,
  centerLabel,
  total,
  items,
}) {
  const gradient = items
    .map((item, index) => {
      const start = items
        .slice(0, index)
        .reduce((acc, cur) => acc + cur.percent, 0);

      const end = start + item.percent;

      return `${item.color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="bg-white rounded-[28px] p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">
          {title}
        </h3>

        <button className="bg-[#dff0e6] rounded-full px-4 py-2 text-xs">
          {filter}
        </button>
      </div>

      <div className="flex justify-center py-5">
        <div className="relative w-40 h-40">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(${gradient})`,
            }}
          />

          <div className="absolute inset-5 rounded-full bg-white flex flex-col items-center justify-center">
            <span className="text-xs text-gray-400">
              {centerLabel}
            </span>

            <span className="text-3xl font-semibold">
              {total}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span>{item.label}</span>
            </div>

            <span>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}