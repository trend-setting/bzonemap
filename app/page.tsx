import ModalBasic from "@/components/ModalBasic";
import Image from "next/image";
export default function Home() {
  return (
    <div className="p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] relative overflow-hidden">
      <ModalBasic />
      <Image
        src="https://github.com/trend-setting/gallery/blob/main/maplg.webp?raw=true"
        alt="map"
        fill
        className="hidden md:block object-contain"
      />
      <Image
        src="https://github.com/trend-setting/gallery/blob/main/mapsm.webp?raw=true"
        alt="map"
        fill
        className="md:hidden object-contain"
      />
    </div>
  );
}