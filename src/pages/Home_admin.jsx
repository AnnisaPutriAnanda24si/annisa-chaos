import React from 'react';

// --- Sub-Components ---

const FilterButton = ({ label }) => (
  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm text-xs font-bold text-[#1A1C1E] hover:bg-gray-50 transition-all">
    {label}
    <span className="material-icons-outlined !text-[18px] text-gray-400">expand_more</span>
  </button>
);

const StatCard = ({ title, value, subValue, trendData }) => (
  <div className="bg-white p-5 rounded-2xl border border-gray-50 shadow-sm flex flex-col justify-between h-full">
    <div>
      <p className="text-[10px] font-black text-[#B0B3B8] uppercase tracking-wider mb-3">{title}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black text-[#1A1C1E]">{value}</span>
        {subValue && <span className="text-sm font-bold text-[#D1D3D6]">/{subValue}</span>}
      </div>
    </div>
    {trendData && (
      <div className="mt-4 h-8 w-full flex items-end gap-0.5">
        {/* Placeholder Mini Sparkline */}
        {[30, 45, 35, 50, 40, 60].map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#1B59F8] rounded-t-[1px] opacity-20"></div>
        ))}
      </div>
    )}
  </div>
);

const TopicRow = ({ icon, title, percentage, colorClass }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden">
      <img src={`https://ui-avatars.com/api/?name=${title}&background=random`} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="flex-1">
      <p className="text-xs font-bold text-[#1A1C1E] mb-1.5">{title}</p>
      <div className="w-full bg-gray-50 h-2 rounded-full overflow-hidden">
        <div className={`${colorClass} h-full rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
    <div className="text-right min-w-[70px]">
      <span className="text-xs font-bold text-[#1A1C1E]">{percentage}% </span>
      <span className="text-[10px] font-bold text-[#B0B3B8]">Correct</span>
    </div>
  </div>
);

const LeaderboardRow = ({ rank, name, points, percentage, trend, isUser }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center gap-3">
      {isUser ? (
        <img src={`https://i.pravatar.cc/150?u=${name}`} className="w-8 h-8 rounded-full border border-gray-100" alt="" />
      ) : (
        <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">GRP</div>
      )}
      <div>
        <p className="text-xs font-bold text-[#1A1C1E]">{name}</p>
        <p className="text-[10px] font-bold text-[#B0B3B8]">{points} Points - {percentage}% Correct</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-[#1A1C1E]">{rank}</span>
      <span className={`material-icons-outlined !text-[14px] ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
        {trend === 'up' ? 'change_history' : 'details'}
      </span>
    </div>
  </div>
);

// --- Main Page Component ---

export default function Home_admin() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Filters */}
      <div className="flex gap-3">
        <FilterButton label="Timeframe: All-time" />
        <FilterButton label="People: All" />
        <FilterButton label="Topic: All" />
      </div>

      {/* Stats & Activity Section */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Left Stats Grid (6/12) */}
        <div className="xl:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Active Users" value="27" subValue="80" />
          <StatCard title="Questions Answered" value="3,298" />
          <StatCard title="Av. Session Length" value="2m 34s" />
          
          <StatCard title="Starting Knowledge" value="64%" trendData />
          <StatCard title="Current Knowledge" value="86%" trendData />
          <StatCard title="Knowledge Gain" value="+34%" trendData />
        </div>

        {/* Right Activity Chart (6/12) */}
        <div className="xl:col-span-6 bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <p className="text-[10px] font-black text-[#B0B3B8] uppercase tracking-wider">Activity</p>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#B0B3B8] cursor-pointer">
              Month <span className="material-icons-outlined !text-[14px]">expand_more</span>
            </div>
          </div>
          <div className="flex items-end justify-between h-40 gap-2 px-2">
            {[30, 45, 55, 75, 85, 60, 70, 40, 80, 90, 95, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  style={{ height: `${h}%` }} 
                  className="w-full bg-[#1B59F8] rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                ></div>
                <span className="text-[9px] font-bold text-[#B0B3B8] uppercase">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm space-y-6">
          <p className="text-[10px] font-black text-[#B0B3B8] uppercase tracking-wider">Weakest Topics</p>
          <TopicRow title="Food Safety" percentage={74} colorClass="bg-gradient-to-r from-orange-400 to-red-400" />
          <TopicRow title="Compliance Basics Procedures" percentage={52} colorClass="bg-gradient-to-r from-orange-400 to-red-400" />
          <TopicRow title="Company Networking" percentage={36} colorClass="bg-gradient-to-r from-orange-400 to-red-400" />
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm space-y-6">
          <p className="text-[10px] font-black text-[#B0B3B8] uppercase tracking-wider">Strongest Topics</p>
          <TopicRow title="Covid Protocols" percentage={95} colorClass="bg-emerald-400" />
          <TopicRow title="Cyber Security Basics" percentage={92} colorClass="bg-emerald-400" />
          <TopicRow title="Social Media Policies" percentage={89} colorClass="bg-emerald-400" />
        </div>
      </div>

      {/* Leaderboards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
          <p className="text-[10px] font-black text-[#B0B3B8] uppercase tracking-wider mb-6">User Leaderboard</p>
          <div className="space-y-5">
            <LeaderboardRow rank={1} name="Jesse Thomas" points={637} percentage={98} trend="up" isUser />
            <LeaderboardRow rank={2} name="Thisal Mathiyazhagan" points={637} percentage={89} trend="down" isUser />
            <LeaderboardRow rank={3} name="Helen Chuang" points={637} percentage={88} trend="up" isUser />
            <LeaderboardRow rank={4} name="Lura Silverman" points={637} percentage={88} trend="up" isUser />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm">
          <p className="text-[10px] font-black text-[#B0B3B8] uppercase tracking-wider mb-6">Groups Leaderboard</p>
          <div className="space-y-5">
            <LeaderboardRow rank={1} name="Houston Facility" points={52} percentage={97} trend="up" />
            <LeaderboardRow rank={2} name="Test Group" points={52} percentage={95} trend="down" />
            <LeaderboardRow rank={3} name="Sales Leadership" points={52} percentage={87} trend="up" />
            <LeaderboardRow rank={4} name="Northeast Region" points={52} percentage={87} trend="up" />
          </div>
        </div>
      </div>

    </div>
  );
}