export default function InputField({
  placeholder,
  value,
  onChange,
  error
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border-b focus:outline-none focus:border-blue-500"
      />
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
