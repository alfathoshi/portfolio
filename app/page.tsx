import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f2f2f5] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] flex justify-center items-center flex-col mx-auto p-2.5 lg:p-3.5 overflow-clip transition-colors duration-300">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
