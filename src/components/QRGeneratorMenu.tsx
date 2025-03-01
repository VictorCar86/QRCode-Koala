"use client";

// import Image from "next/image";
import { useState } from "react";
import { Wifi, BatteryFull, SignalHigh, ChevronRight } from "lucide-react";
import IphoneSVGImage from "./utils/IphoneSVGImage";
import WifiPreview from "./previews/WifiPreview";
import { QRCreateOptions } from "@/lib/placeholders/QRCreateOptions";

export default function QRGeneratorMenu() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="flex xl:justify-between justify-center items-center gap-16">
      {/* QR Code Types */}
      <div className="w-full md:w-max grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {QRCreateOptions.map(({ icon: Icon, id, title, description }) => (
          <div
            key={id}
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
        ))}
      </div>

      {/* QR Code Preview */}
      <div
        className="hidden xl:flex flex-col max-w-[281px] w-full h-auto relative py-[10px] px-[11px] pr-[14px] rounded-t-[40px] rounded-b-[43px] md:rounded-t-[45px] md:rounded-b-[48px] overflow-hidden"
        style={{ aspectRatio: "276/560" }}
      >
        <div className="w-full h-full pt-[30px] text-center rounded-b-[38px] bg-white relative mobile-scrollbar overflow-hidden">
          <WifiPreview />
          {/* {selectedType === "wifi" && <WifiPreview />} */}
          {/* {!selectedType && (
            <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
              <Image
                src="/images/qr_koala_logo_XL.webp"
                alt="QR KOALA"
                width={80}
                height={80}
              />
              <p className="w-3/4 text-xl">Select a type of QR code to start</p>
            </div>
          )} */}
        </div>
        <div className="absolute top-5 left-8 right-8 flex items-center justify-between z-10">
          <span className="text-xs font-bold">9:41</span>
          <div className="flex gap-1 items-center">
            <SignalHigh size={16} />
            <Wifi size={16} />
            <BatteryFull size={16} />
          </div>
        </div>
        <div className="absolute w-full h-full inset-0 pointer-events-none flex z-10">
          <IphoneSVGImage />
        </div>
      </div>
    </div>
  );
}
