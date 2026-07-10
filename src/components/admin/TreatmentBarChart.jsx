import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ImSpinner2 } from 'react-icons/im';
import DashboardCard from './DashboardCard'; // Sesuaikan path komponen DashboardCard kamu
import { bookingAPI } from '@/services/bookingAPI'; // Sesuaikan path API kamu

export default function TreatmentBarChart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        // 1. Ambil data booking mentah dari database
        const bookings = await bookingAPI.fetchBookings();

        // 2. Hitung total frekuensi kemunculan tiap nama treatment
        // Hasil akhir tracker akan berbentuk: { "Nails Polishing": 3, "Surgeries": 1 }
        const treatmentTracker = {};

        bookings.forEach((item) => {
          const name = item.treatment?.treatment_name || "Unknown Treatment";
          if (treatmentTracker[name]) {
            treatmentTracker[name] += 1;
          } else {
            treatmentTracker[name] = 1;
          }
        });

        // 3. Ubah format objek tracker menjadi Array format Recharts: [{ name: '...', total: ... }]
        const formattedData = Object.keys(treatmentTracker).map((key) => ({
          name: key,
          total: treatmentTracker[key],
        }));

        // 4. Masukkan ke dalam state chart
        setChartData(formattedData);
      } catch (err) {
        console.error("Gagal memproses data grafik:", err);
        setError("Failed to load chart data");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <DashboardCard title="Popular Treatments" filterText="Live Data">
      <div className="w-full h-64 mt-2 flex items-center justify-center">
        {loading ? (
          // Status Loading
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <ImSpinner2 className="animate-spin text-[#00B074] text-lg" />
            Loading Chart...
          </div>
        ) : error ? (
          // Status Error
          <div className="text-xs text-red-500 font-medium">⚠️ {error}</div>
        ) : chartData.length === 0 ? (
          // Status jika data kosong
          <div className="text-xs text-zinc-400">No booking data found</div>
        ) : (
          // 🌟 TAMPILKAN GRAFIK JIKA DATA REAL SUDAH SIAP
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
              
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9CA3AF', fontSize: 11 }}
              />
              
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9CA3AF', fontSize: 11 }}
                allowDecimals={false} // Jumlah booking tidak mungkin desimal (misal 1.5)
              />
              
              <Tooltip 
                cursor={{ fill: '#F9FAFB' }}
                contentStyle={{ 
                  backgroundColor: '#1A2E26', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }}
                itemStyle={{ color: '#addbc0' }}
              />
              
              <Bar 
                dataKey="total" 
                fill="#00B074" 
                radius={[8, 8, 0, 0]} 
                maxBarSize={40}       
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </DashboardCard>
  );
}