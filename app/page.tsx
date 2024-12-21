"use client";
import ModalBasic from "@/components/ModalBasic";
import Image from "next/image";


import { useState } from "react";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="p-0 md:p-1 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] overflow-x-hidden overflow-y-hidden">
      <ModalBasic />
      <section
        className="h-[88dvh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/map-image.jpg')" }}
      >
        <div
          className={`relative rounded-lg shadow-lg transition-transform duration-300 ${
            isZoomed ? "scale-125" : "scale-100"
          }`}
          onClick={toggleZoom}
        >
          <Image
            className="hidden md:block m-0 object-cover cursor-pointer rounded-lg"
            src="https://github.com/trend-setting/gallery/blob/main/maplg.webp?raw=true"
            alt="map image"
            width={800}
            height={600}
          />
          <Image
            className="block md:hidden m-0 object-cover cursor-pointer rounded-lg "
            src="https://github.com/trend-setting/gallery/blob/main/mapsm.webp?raw=true"
            alt="map image"
            width={400}
            height={300}
          />
        </div>
      </section>
    </div>
  );
}

  // export default function Home() {
  //   return (
  //     <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] overflow-x-scroll">
  //       <ModalBasic />
  //       <section
  //         className="h-[88dvh] bg-cover bg-center flex items-center justify-center"
  //         style={{ backgroundImage: "url('/map-image.jpg')" }}
  //       >
  //         <img
  //         className="m-0 object-cover rounded-lg shadow-lg"
  //           src="https://github.com/trend-setting/gallery/blob/main/maplg.webp?raw=true"
  //           alt="map image"
  //         />
  //       </section>
  //     </div>
  //   );
  // }