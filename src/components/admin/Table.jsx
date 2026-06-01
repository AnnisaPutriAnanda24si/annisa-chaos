import React from "react";

export default function Table({
  title,
  buttonText,
  data,
}) {
  return (
    
    <div className="bg-white rounded-[28px] p-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <button className="bg-[#dff0e6] px-4 py-2 rounded-full text-sm">
          {buttonText}
        </button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400 border-b">
            <th className="pb-4">Patient</th>
            <th>Treatment</th>
            <th>Date & Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b last:border-none"
            >
              <td className="py-5">
                {row.patient}
              </td>

              <td>{row.treatment}</td>

              <td>{row.date}</td>

              <td>
                <span
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: row.color,
                  }}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}