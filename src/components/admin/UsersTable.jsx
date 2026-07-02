import React from "react";

// Sub-komponen untuk menampilkan badge Role
function RoleBadge({ role }) {
  const styles = {
    admin: "bg-red-100 text-red-700 font-bold border border-red-200",
    user: "bg-gray-100 text-gray-600",
    member: "bg-orange-100 text-orange-700",
  };

  const currentRole = role?.toLowerCase();

  return (
    <span
      className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium ${
        styles[currentRole] || styles.user
      }`}
    >
      {role}
    </span>
  );
}

// Tambahkan prop onEdit dan onDelete agar bisa mengirim aksi ke file utama (Users.jsx)
export default function UsersTable({ data, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-gray-100">
      {/* Tampilan Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-xs text-gray-400 uppercase tracking-wider">
              <th className="py-5 px-6 text-left hidden xl:table-cell">
                User ID
              </th>
              <th className="py-5 px-6 text-left">
                Profile / Username
              </th>
              <th className="py-5 px-6 text-left hidden lg:table-cell">
                Email
              </th>
              <th className="py-5 px-6 text-left">
                Password
              </th>
              <th className="py-5 px-6 text-left">
                Role
              </th>
              <th className="py-5 px-6 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr
                key={user.id}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                {/* ID Pengguna */}
                <td className="px-6 py-5 hidden xl:table-cell text-sm text-gray-500">
                  #{user.id}
                </td>

                {/* Profil & Username */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/150?img=${user.id + 10}`}
                      alt={user.username}
                      className="w-10 h-10 rounded-full border border-gray-200 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-zinc-800">
                        {user.username}
                      </p>
                      <p className="text-xs text-gray-400 md:hidden">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-5 hidden lg:table-cell text-sm text-gray-600">
                  {user.email}
                </td>

                {/* Password Tersembunyi */}
                <td className="px-6 py-5 font-mono text-xs text-gray-400">
                  {user.password ? "••••••••" : "—"}
                </td>

                {/* Badge Role */}
                <td className="px-6 py-5">
                  <RoleBadge role={user.role} />
                </td>

                {/* KELOMPOK TOMBOL AKSI DI DESKTOP */}
                <td className="px-6 py-5 text-center">
                  <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider">
                    <button
                      onClick={() => onEdit(user)}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      Edit
                    </button>
                    <span className="text-gray-300">|</span>
                    <button
                      onClick={() => onDelete(user.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tampilan Mobile */}
      <div className="md:hidden p-4 space-y-3 bg-gray-50/50">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/150?img=${user.id + 10}`}
                  alt={user.username}
                  className="w-12 h-12 rounded-full border border-gray-200 object-cover"
                />
                <div>
                  <h4 className="font-bold text-zinc-800">{user.username}</h4>
                  <p className="text-xs text-gray-400">ID: #{user.id}</p>
                </div>
              </div>
              
              {/* KELOMPOK TOMBOL AKSI DI MOBILE (Pojok kanan atas kartu) */}
              <div className="flex gap-2 text-[10px] font-bold uppercase tracking-wider">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-red-50 text-red-600 px-2.5 py-1 rounded-md"
                >
                  Del
                </button>
              </div>
            </div>

            <div className="space-y-2 border-t pt-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 uppercase tracking-wider">Email</span>
                <span className="text-gray-700 font-medium break-all max-w-[180px] text-right">
                  {user.email}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 uppercase tracking-wider">Password</span>
                <span className="font-mono text-gray-400">••••••••</span>
              </div>

              <div className="flex justify-between items-center text-xs pt-1">
                <span className="text-gray-400 uppercase tracking-wider">Role</span>
                <RoleBadge role={user.role} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}