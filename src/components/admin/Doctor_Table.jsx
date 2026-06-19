import React from "react";

// Star Rating display component
function RatingDisplay({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <svg
        className="w-4 h-4 text-amber-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-sm font-semibold text-gray-700">{rating}</span>
    </div>
  );
}

export default function DoctorsTable({ data }) {
  return (
    <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-100">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <th className="py-5 px-6 text-left hidden xl:table-cell">
                Doctor ID
              </th>
              <th className="py-5 px-6 text-left">
                Doctor Info
              </th>
              <th className="py-5 px-6 text-left hidden lg:table-cell">
                Experience
              </th>
              <th className="py-5 px-6 text-left">
                Rating
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {data.map((doctor) => (
              <tr
                key={doctor.id}
                className="hover:bg-gray-50/75 transition-colors"
              >
                {/* ID column */}
                <td className="px-6 py-5 text-sm text-gray-500 hidden xl:table-cell">
                  #{String(doctor.id).padStart(4, '0')}
                </td>

                {/* Profile column */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-11 h-11 rounded-full object-cover border border-gray-100"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        {doctor.name}
                      </p>
                      <p className="text-xs text-indigo-600 font-medium">
                        {doctor.role}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Experience column */}
                <td className="px-6 py-5 hidden lg:table-cell text-sm text-gray-600 font-medium">
                  {doctor.experience}
                </td>

                {/* Rating column */}
                <td className="px-6 py-5">
                  <RatingDisplay rating={doctor.rating} />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden p-4 space-y-4 bg-gray-50/50">
        {data.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {doctor.name}
                </h4>
                <p className="text-xs text-indigo-600 font-medium">
                  {doctor.role}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-gray-50">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Experience</span>
                <span className="font-medium text-gray-700 text-xs uppercase">{doctor.experience}</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Rating</span>
                <RatingDisplay rating={doctor.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}