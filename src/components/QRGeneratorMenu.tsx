"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { QRCreateOptions } from "@/lib/placeholders/QRCreateOptions";
import QRCodePreviewer from "./previews/QRCodePreviewer";
import WifiPreview from "./previews/WifiPreview";
export default function QRGeneratorMenu() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="flex xl:justify-between justify-center items-center gap-16">
      {/* QR Code Types */}
      <div className="w-full md:w-max grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {QRCreateOptions.map(({ icon: Icon, id, title, description }) => (
          <Link href={`/qr-code-generator/${id}`} key={id}>
            <div
              className="relative group flex flex-row md:flex-col items-center md:justify-center gap-2 md:gap-0 p-3 w-full h-21 md:w-44 md:h-48 rounded-sm border cursor-pointer transition-all duration-200 hover:bg-black hover:text-white bg-white shadow-lg"
              onMouseEnter={() => setSelectedType(id)}
              onMouseLeave={() => setSelectedType(null)}
            >
              <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full md:mb-4 group-hover:outline-2 group-hover:outline-white bg-black">
                <div className="text-white">
                  <Icon className="h-10 w-10 md:h-12 md:w-12 stroke-[1.5]" />
                </div>
              </div>
              <div className="flex flex-col md:items-center items-start justify-center">
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-xs md:text-center group-hover:text-white">
                  {description}
                </p>
              </div>
              <i className="absolute block md:hidden top-1/2 right-2.5 -translate-y-1/2 scale-175 text-black/75">
                <ChevronRight size={16} />
              </i>
            </div>
          </Link>
        ))}
      </div>

      {/* QR Code Preview */}
      <QRCodePreviewer>{selectedType === "wifi" && <WifiPreview />}</QRCodePreviewer>
    </div>
  );
}
