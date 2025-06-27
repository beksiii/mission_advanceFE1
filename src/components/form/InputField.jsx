// src/components/form/InputField.jsx
import { forwardRef } from "react";

const InputField = forwardRef(
  (
    { label, name, type = "text", placeholder, error, icon, required, ...rest },
    ref
  ) => (
    <div className="w-full max-w[280px] md:max-w[518px]  h-fit flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className="text-[12px] md:text-[16px] font-sans font-normal leading-myline-2 tracking-myletter-2 text-text-dark-secondary md:w-[110px] md:min-h-7 h-fit pr-4 pb-1 flex gap-1 whitespace-nowrap"
        >
          {label}
          {required && <span className="text-error-default">*</span>}
        </label>
      )}
      <div className="relative w-full max-w-[280px] md:max-w-[518px] h-fit flex items-center text-text-dark-primary">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          required={required}
          className={`
          w-full w-max-[518px] h-fit py-1 px-[10px] border rounded-md focus:outline-none focus:ring-2 placeholder:text-text-dark-disable placeholder:text-xs md:placeholder:text-[16px]

          ${
            error
              ? "border-red-500 focus:ring-red-300"
              : "border-gray-300 focus:ring-green-200"
          }
        `}
          {...rest}
        />
        {icon && (
          <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
            {icon}
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
);

export default InputField;
