import { createRoot } from "react-dom/client";
import Admin from "./pages/Admin";
import Guest from "./pages/Guest";
import "./styles/tailwind.css";
import { useState } from "react";

function SwitchView() {
  const [view, setView] = useState("guest");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar / Switcher Container */}
      <nav className="bg-white shadow-sm border-b p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-black tracking-tight text-gray-800">
            SERVICE<span className="text-blue-600">APP</span>
          </h1>

          <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">

            <button
              onClick={() => setView("guest")}
              className={`px-6 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                view === "guest"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            > Guest View </button>

            <button
              onClick={() => setView("admin")}
              className={`px-6 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                view === "admin"
                  ? "bg-white text-red-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            > Admin View </button>

          </div>
        </div>  
      </nav>

        {view === "guest" ? <Guest /> : <Admin />}
        
    </div>
  );
}

createRoot(document.getElementById("root")).render(<SwitchView />);