'use client'
import MapModal from "@/components/MapModel";
import markerbig from "@/components/LargeData";
import stagedata from "@/components/StageData";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { IoIosArrowDown } from "react-icons/io";

export function Detail() {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleItemClick = (e: React.MouseEvent, marker: Marker) => {
    e.stopPropagation(); // Prevent dropdown from closing prematurely
    setSelectedMarker(marker); // Set selected marker
    setDropdownOpen(false); // Close dropdown when modal opens
  };

  return (
    <>
      <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-1">
            Details <IoIosArrowDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Any</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Stages</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {stagedata.map((markerC) => (
                    <DropdownMenuItem key={markerC.id} onClick={(e) => handleItemClick(e , markerC)}>
                      <button>
                        {markerC.title}
                      </button>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            {markerbig.map((markerB) => (
              <DropdownMenuItem key={markerB.id} onClick={(e) => handleItemClick(e, markerB)}>
                <button >
                  {markerB.title}
                </button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Render Modal Outside Dropdown */}
      {selectedMarker && (
        <MapModal
          isOpen={!!selectedMarker}
          onClose={() => {
            setSelectedMarker(null);
            setDropdownOpen(false); // Ensure dropdown is reset when modal closes
          }}
          title={selectedMarker.title}
          imageSrc={selectedMarker.image}
          description={selectedMarker.description}
        />
      )}
    </>
  );
}
