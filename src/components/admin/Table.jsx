import React from "react";

function MembershipBadge({ level }) {
  const styles = {
    Regular: "bg-gray-100 text-gray-600",
    Silver: "bg-slate-100 text-slate-700",
    Gold: "bg-amber-100 text-amber-700",
    Platinum: "bg-purple-100 text-purple-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[level] || styles.Regular
      }`}
    >
      {level}
    </span>
  );
}

export default function PatientsTable({ data }) {
  return (
    <div className="bg-white rounded-[28px] overflow-hidden">
      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-xs text-gray-400">
              <th className="py-5 px-6 text-left hidden xl:table-cell">
                Patient ID
              </th>

              <th className="py-5 px-6 text-left">
                Patient
              </th>

              <th className="py-5 px-6 text-left hidden lg:table-cell">
                Gender
              </th>

              <th className="py-5 px-6 text-left">
                Membership
              </th>

              <th className="py-5 px-6 text-left hidden xl:table-cell">
                Total Visits
              </th>

              <th className="py-5 px-6 text-left">
                Last Visit
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((patient) => (
              <tr
                key={patient.id}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-5 hidden xl:table-cell">
                  {patient.patient_code}
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/150?img=${patient.id + 20}`}
                      alt={patient.full_name}
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <p className="font-medium">
                        {patient.full_name}
                      </p>

                      <p className="text-xs text-gray-400">
                        {patient.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 hidden lg:table-cell">
                  {patient.gender}
                </td>

                <td className="px-6 py-5">
                  <MembershipBadge
                    level={patient.membership_level}
                  />
                </td>

                <td className="px-6 py-5 hidden xl:table-cell">
                  {patient.total_visits}
                </td>

                <td className="px-6 py-5">
                  {patient.last_visit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden p-4 space-y-3">
        {data.map((patient) => (
          <div
            key={patient.id}
            className="border rounded-2xl p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={`https://i.pravatar.cc/150?img=${patient.id + 20}`}
                alt={patient.full_name}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h4 className="font-medium">
                  {patient.full_name}
                </h4>

                <p className="text-sm text-gray-400">
                  {patient.patient_code}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">
                Membership
              </span>

              <MembershipBadge
                level={patient.membership_level}
              />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Visits
              </span>

              <span>{patient.total_visits}</span>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-500">
                Last Visit
              </span>

              <span>{patient.last_visit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}