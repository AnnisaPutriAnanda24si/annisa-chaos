import React from 'react';

export default function Login_admin() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900">Login</h1>
      <p className="mt-4 text-gray-500">
        Login to access your <span className="font-semibold text-gray-800">travelwise</span> account
      </p>

      <form className="mt-10 space-y-7" onSubmit={(e) => e.preventDefault()}>
        {/* Input Email */}
        <div className="relative group">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500 group-focus-within:text-indigo-600">
            Email
          </label>
          <input
            type="email"
            defaultValue="john.doe@gmail.com"
            className="w-full rounded-xl border border-gray-300 p-4 outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>

        {/* Input Password */}
        <div className="relative group">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-gray-500 group-focus-within:text-indigo-600">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type="password"
              defaultValue="••••••••••••••••"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition-all focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
            <button type="button" className="absolute right-4 text-gray-400 hover:text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Helper Links */}
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-sm font-bold text-red-400 hover:text-red-500 transition-colors">
            Forgot Password
          </a>
        </div>

        {/* Submit Button */}
        <button className="w-full rounded-xl bg-indigo-600 py-4 text-center text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-[0.99]">
          Login
        </button>

        <p className="text-center text-sm font-medium text-gray-600">
          Don't have an account? <a href="#" className="font-bold text-red-400 hover:underline">Sign up</a>
        </p>

        {/* Divider */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 flex-shrink text-xs font-semibold uppercase tracking-widest text-gray-400">Or login with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-4">
          {['f', 'G', ''].map((icon, idx) => (
            <button key={idx} className="flex items-center justify-center rounded-xl border border-gray-200 py-3 transition-colors hover:bg-gray-50">
              <span className={`text-xl font-black ${idx === 0 ? 'text-blue-600' : idx === 1 ? 'text-red-500' : 'text-black'}`}>
                {icon}
              </span>
            </button>
          ))}
        </div>
      </form>
    </>
  );
}