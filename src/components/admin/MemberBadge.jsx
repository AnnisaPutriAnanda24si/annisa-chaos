export default function MembershipBadge({
  level,
}) {
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