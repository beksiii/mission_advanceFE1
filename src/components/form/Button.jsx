// src / components / form / Button.jsx;
const variantStyles = {
  primary: "bg-primary hover:bg-green-400 text-light-primary",
  shadow: "bg-primary-100 hover:bg-green-200 text-primary",
  outline:
    "border border-border-default hover:bg-gray-100 text-text-dark-secondary",
  contained:"bg-secondary hover:bg-secondary-200 text-text-light-primary",
  // contained:"bg-secondary rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-text-light-primary font-semibold text-sm md:text-base hover:bg-secondary-400 transition duration-300 w-full sm:w-auto"
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      className={`
        flex justify-center items-center w-full px-6 py-2 rounded-[10px] font-dm-sans text-xs md:text-[16px] gap-2 font-medium md:font-bold transition leading-myline-2 tracking-myletter-2 whitespace-nowrap
        ${variantStyles[variant] || variantStyles.primary}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
