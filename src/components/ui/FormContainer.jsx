// src/components/ui/FormContainer.jsx
export default function FormContainer({ children, className = "" }) {
  return (
    <div
      className={`bg-bg-primary p-5 md:p-[36px] gap-[36px] text-text-light-primary border border-border-default rounded-sm max-w-[360px] md:max-w-[590px] h-fit flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}
