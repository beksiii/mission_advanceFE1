// src/components/ui/Divider.jsx
export default function Divider({ label = "atau" }) {
  return (
    <div className="flex items-center my-4">
      <hr className="flex-grow border-gray-300" />
      <span className="px-3 text-xs md:text-[16px] text-text-dark-secondary">
        {label}
      </span>
      <hr className="flex-grow border-gray-300" />
    </div>
  );
}
