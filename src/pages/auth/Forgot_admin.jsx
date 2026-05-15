import React from 'react';

export default function Forgot_admin() {
  return (
    <>
      {/* Back Link */}
      <a href="/login" className="mb-6 flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to login
      </a>

      <h1 className="text-4xl font-bold text-gray-900">Forgot your password?</h1>
      <p className="mt-4 text-gray-500 leading-relaxed">
        Don't worry, happens to all of us. Enter your email below to recover your password
      </p>

      <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Email Input */}
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500">Email</label>
          <input
            type="email"
            placeholder="john.doe@gmail.com"
            className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>

        {/* Submit Button */}
        <button className="w-full rounded-xl bg-indigo-600 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700">
          Submit
        </button>

        {/* Social Login */}
        <div className="relative flex items-center py-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-xs font-semibold text-gray-400">Or login with</span>
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