'use client';
import ModalBasic from "@/components/ModalBasic";
import Image from "next/image";
import { useState } from "react";
import MapModal from "@/components/MapModel";

interface Marker {
  id: number;
  title: string;
  description: string;
  image: string;
  position: { top: string; left: string };
  positions?: { top: string; left: string };
}

const markers: Marker[] = [
  {
    id: 1,
    title: "Store",
    description: "This is the campus store where you can buy essentials.",
    image: "/store.jpg",
    position: { top: "46%", left: "78%" },
  },
  {
    id: 2,
    title: "Hostel Block",
    description: "The hostel block for students.",
    image: "/hostel.jpg",
    position: { top: "65%", left: "52%" },
  },
  {
    id: 3,
    title: "Canteen",
    description: "Enjoy a variety of meals and snacks here.",
    image: "/canteen.jpg",
    position: { top: "26%", left: "69%" },
  },
];

export default function Home() {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  return (
    <div className="p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-[85dvh] md:h-[90dvh] relative overflow-hidden">
      <ModalBasic />
        <Image
          src='https://github.com/trend-setting/gallery/blob/main/maplg.webp?raw=true'
          alt="map"
          layout="fill" // Ensures the image stretches to fill the parent
          objectFit="contain" // Ensures the entire image is visible without cropping
          className="hidden md:block" // Rotate image on small screens
        />
        <Image
          src='https://github.com/trend-setting/gallery/blob/main/mapsm.webp?raw=true'
          alt="map"
          layout="fill" // Ensures the image stretches to fill the parent
          objectFit="contain" // Ensures the entire image is visible without cropping
          className="md:hidden" // Rotate image on small screens
        />

        {/* Markers */}
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-blue-500 text-2xl"
          style={{ top: marker.position.top, left: marker.position.left }}
          onClick={() => setSelectedMarker(marker)}
        >
          📌
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