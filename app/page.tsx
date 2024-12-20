import ModalBasic from "@/components/ModalBasic";

export default function Home() {
  return (
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh]">
      <ModalBasic/>
      <section
        className="h-[88dvh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/map-image.jpg')" }}
      >
        <div className="bg-opacity-50 text-white p-8 text-center rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse">
          <h1 className="text-4xl font-bold mb-4">Explore the Map</h1>
          <p className="text-lg">Discover the details in every corner.</p>
        </div>
      </section>
    </div>
  );
}
