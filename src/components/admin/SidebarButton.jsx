export default function SidebarButton({
  children,
  icon: Icon,
  badge,
  type = "default",
}) {
  const types = {
    active: "bg-[#d9eee3] text-[#2f3a35]",
    default: "text-[#7c7c7c] hover:bg-[#f3efed]",
  };

  return (
    <button
      className={`
        w-full
        flex
        items-center
        justify-between
        px-3
        sm:px-5
        py-3
        sm:py-4
        rounded-2xl
        transition-all
        ${types[type]}
      `}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon className="text-[13px] sm:text-[14px]" />
        )}

        <span className="text-xs sm:text-sm">
          {children}
        </span>
      </div>

      {badge && (
        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f4b9aa] text-[10px] flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
}