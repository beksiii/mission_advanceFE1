export default function MainContainer({ children }) {
  return (
    <main className="max-w-[360px] md:max-w-[1440px] w-full h-fit bg-[#FFFDF3] flex flex-col items-center justify-center px-7 md:px-[120px] py-7 md:py-[64px] gap-6 md:gap-[36px]">
      {children}
    </main>
  );
}
