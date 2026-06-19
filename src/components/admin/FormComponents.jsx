import { FaChevronDown } from "react-icons/fa";

export function InputField({
  placeholder,
  icon: Icon,
  className = "",
  value,
  onChange,
}) {
  return (
<div
    className={`
        flex items-center gap-3
        bg-gray-50
        rounded-2xl
        h-14
        px-6
        ${className}
    `}
>
      {Icon && (
        <Icon className="text-gray-500 text-xl" />
      )}

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          flex-1
          bg-transparent
          outline-none
          text-base
          placeholder:text-gray-400
        "
      />
    </div>
  );
}

export function Dropdown({
  label,
  icon: Icon,
  className = "",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
className={`
    h-14
    px-6
    rounded-2xl
    bg-green-50
    flex items-center gap-3
    text-base font-medium
    whitespace-nowrap
    ${className}
`}
    >
      {Icon && <Icon />}

      <span>{label}</span>

      <FaChevronDown className="text-xs" />
    </button>
  );
}