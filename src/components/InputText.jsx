export default function InputText({
  id,
  type,
  placeholder,
  label,
  value,
  onChange,
  error,
}) {
  return (
    <div className="w-11/12 pr-3 ">
      <label htmlFor={id} className="block font-bold mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}
