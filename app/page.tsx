'use client';
import ModalBasic from "@/components/ModalBasic";
import Image from "next/image";
import { useState } from "react";
import MapModal from "@/components/MapModel";
import markerbig from "@/components/LargeData"
import markersmall from "@/components/SmallData";

export default function Home() {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  return (
    <div className="p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] relative overflow-hidden">
      <ModalBasic />
      <Image
        src="https://github.com/trend-setting/gallery/blob/main/maplg.webp?raw=true"
        alt="map"
        layout="fill"
        objectFit="contain"
        className="hidden md:block"
      />
      <Image
        src="https://github.com/trend-setting/gallery/blob/main/mapsm.webp?raw=true"
        alt="map"
        layout="fill"
        objectFit="contain"
        className="md:hidden"
      />

      {/* Markers Big*/}
      {markerbig.map(
        (markerB) => (
          console.log(markerB),
          (
            <div
              key={markerB.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-black text-2xl"
              style={{ top: markerB.position.top, left: markerB.position.left }}
              onClick={() => setSelectedMarker(markerB)}
            >
              <span
                className={`flex items-center justify-center rounded border border-black
                ${
                  markerB.id === 1
                    ? "w-6 h-5"
                    : markerB.id === 2
                    ? "w-6 h-5"
                    : markerB.id === 3
                    ? "w-6 h-5"
                    : markerB.id === 4
                    ? "w-6 h-5"
                    : markerB.id === 5
                    ? "w-6 h-50"
                    : markerB.id === 6
                    ? "w-6 h-5"
                    : "bg-red-500 px-10 py-5"
                }`}
              ></span>
            </div>
          )
        )
      )}

      {/* Markers Small*/}
      {markersmall.map((markerS) => (
        <div
          key={markerS.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-blue-500 text-2xl md:hidden"
          style={{ top: markerS.position.top, left: markerS.position.left }}
          onClick={() => setSelectedMarker(markerS)}
        >
          <span
            className={`flex items-center justify-center rounded border border-black
                ${
                  markerS.id === 1
                    ? "w-6 h-5"
                    : markerS.id === 2
                    ? "w-6 h-5"
                    : markerS.id === 3
                    ? "w-6 h-5"
                    : markerS.id === 4
                    ? "w-6 h-5"
                    : markerS.id === 5
                    ? "w-6 h-5"
                    : markerS.id === 6
                    ? "w-6 h-5"
                    : markerS.id === 7
                    ? "w-6 h-5"
                    : markerS.id === 8
                    ? "w-6 h-5"
                    : markerS.id === 9
                    ? "w-6 h-5"
                    : markerS.id === 10
                    ? "w-12 h-12"
                    : markerS.id === 11
                    ? "w-12 h-12"
                    : markerS.id === 12
                    ? "w-10 h-20"
                    : markerS.id === 13
                    ? "w-6 h-16"
                    : markerS.id === 14
                    ? "w-16 h-32"
                    : markerS.id === 15
                    ? "w-10 h-10"
                    : markerS.id === 16
                    ? "w-16 h-10"
                    : markerS.id === 17
                    ? "w-8 h-10"
                    : markerS.id === 18
                    ? "w-10 h-14"
                    : markerS.id === 19
                    ? "w-16 h-12"
                    : " px-10 py-5"
                }`}
          ></span>
        </div>
      ))}

      {/* Modal */}
      {selectedMarker && (
        <MapModal
          isOpen={!!selectedMarker}
          onClose={() => setSelectedMarker(null)}
          title={selectedMarker.title}
          imageSrc={selectedMarker.image}
          description={selectedMarker.description}
        />
      )}
    </div>
  );
}