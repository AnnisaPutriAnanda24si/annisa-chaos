import React from 'react';

export default function Register_admin() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900">Sign up</h1>
      <p className="mt-4 text-gray-500">
        Let's get you all set up so you can access your personal account.
      </p>

      <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Row: First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full rounded-xl border border-gray-300 p-3.5 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full rounded-xl border border-gray-300 p-3.5 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>
        </div>

        {/* Row: Email & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500">Email</label>
            <input
              type="email"
              placeholder="john.doe@gmail.com"
              className="w-full rounded-xl border border-gray-300 p-3.5 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>
          <div className="relative">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500">Phone Number</label>
            <input
              type="tel"
              placeholder="+62 812..."
              className="w-full rounded-xl border border-gray-300 p-3.5 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>
        </div>

        {/* Password */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500">Password</label>
          <input
            type="password"
            placeholder="••••••••••••••••"
            className="w-full rounded-xl border border-gray-300 p-3.5 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••••••••••"
            className="w-full rounded-xl border border-gray-300 p-3.5 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>

        {/* Terms and Policies */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
          <span className="text-sm font-medium text-gray-700">
            I agree to all the <span className="text-red-400 font-bold">Terms</span> and <span className="text-red-400 font-bold">Privacy Policies</span>
          </span>
        </div>

        {/* Submit Button */}
        <button className="w-full rounded-xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700">
          Create account
        </button>

        <p className="text-center text-sm font-medium text-gray-600">
          Already have an account? <a href="/login" className="font-bold text-red-400 hover:underline">Login</a>
        </p>

        {/* Social Login */}
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-xs font-semibold text-gray-400">Or Sign up with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button className="flex justify-center rounded-xl border border-gray-200 py-3 hover:bg-gray-50">
            <span className="text-blue-600 font-bold text-xl">f</span>
          </button>
          <button className="flex justify-center rounded-xl border border-gray-200 py-3 hover:bg-gray-50">
             <span className="text-red-500 font-bold text-xl">G</span>
          </button>
          <button className="flex justify-center rounded-xl border border-gray-200 py-3 hover:bg-gray-50">
            <span className="text-black text-xl"></span>
          </button>
        </div>
      </form>
    </>
  );
}