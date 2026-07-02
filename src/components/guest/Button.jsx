import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-[#1C1C1C] text-white hover:bg-black",

  outline:
    "border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white",

  secondary:
    "bg-[#E67E22] text-white hover:bg-[#d86f13]",

  text:
    "text-[#1C1C1C] underline underline-offset-4 hover:text-[#E67E22] p-0",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  success:
    "bg-green-600 text-white hover:bg-green-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",

  md: "px-6 py-3 text-base",

  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  to,
  onClick,
  className = "",
  type = "button",
}) => {
  const base =
    "inline-flex items-center justify-center font-urbanist font-semibold transition-all duration-300 hover:scale-105";

  const radius =
    rounded === "full"
      ? "rounded-full"
      : rounded === "lg"
      ? "rounded-lg"
      : "rounded-md";

  const classes = `
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${radius}
        ${className}
    `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;