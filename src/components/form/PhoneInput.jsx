// src/components/form/PhoneInput.jsx
export default function PhoneInput({ label, name, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1 text-text-dark-secondary">
      <label htmlFor={name} className="text-sm font-medium">
        {label} <span className="text-error-default">*</span>
      </label>
      <div className="flex rounded-md overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-green-200">
        {/* Country Code Dropdown */}
        <select
          className="bg-gray-100 px-2 md:px-3 text-sm md:text-base outline-none border-r border-gray-300"
          disabled
        >
          <option value="+62">🇮🇩 +62</option>
          {/* Bisa tambahkan opsi lain jika ingin */}
        </select>

        {/* Phone number input */}
        <input
          type="tel"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="8123456789"
          className="flex-1 px-3 py-2 outline-none text-sm md:text-base"
          required
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
