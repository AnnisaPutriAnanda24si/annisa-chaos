export default function RoundButton({
  children,
  onClick,
  size = "md",
  bg = "#dff0e6",
  className = "",
}) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizes[size]}
        rounded-full
        flex
        items-center
        justify-center
        transition
        hover:opacity-90
        ${className}
      `}
      style={{ backgroundColor: bg }}
    >
      {children}
    </button>
  );
}