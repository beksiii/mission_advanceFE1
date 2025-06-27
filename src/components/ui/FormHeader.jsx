// src/components/ui/FormHeader.jsx
export default function FormHeader({ title, subtitle }) {
  return (
    <div className="max-w-[360px] h-fit gap-[10px] md:h-[67px] md:w-[525px] flex flex-col items-center justify-center">
      <h2 className="font-poppins font-semibold text-[24px] md:text-[32px] text-text-dark-primary leading-myline-1 tracking-myletter-1">
        {title}
      </h2>
      {subtitle && (
        <p className="flex flex-col items-center justify-center font-dm-sans font-normal md:text-[16px] text-[12px] leading-myline-2 text-base text-text-dark-secondary tracking-myletter-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
