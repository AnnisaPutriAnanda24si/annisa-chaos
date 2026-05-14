export default function SelectField({
  options,
  value,
  onChange,
  placeholder
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full p-2 border-b"
    >
      <option value="">{placeholder}</option>
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  );
}
