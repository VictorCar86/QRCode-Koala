import React from "react";
import { Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";
import WaveBG from "../utils/WaveBG";

const WebsitePreview = ({ websiteURL }: { websiteURL?: string }) => {
  return (
    <div className="relative max-w-xs mx-auto h-full">
      <WaveBG className="absolute -top-10" bgColor="#2c68f5" />
      {/* Phone frame */}
      <div
        className="absolute top-0 bottom-0 space-y-3 h-full w-full overflow-y-auto pt-4 pb-6 px-6 shadow-xl"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Website URL */}
        <div className="text-xs text-white font-semibold px-2 py-2 border border-white bg-white bg-opacity-30 rounded-full flex items-center gap-2">
          <Globe className="w-6 h-6" />
          <p className="max-w-[150px] truncate">
            {websiteURL || "https://www.qrcode-koala.com"}
          </p>
        </div>
        {/* Website container skeleton */}
        <div className="w-full p-3 bg-white space-y-9 rounded-md border border-gray-300">
          <div className="space-y-4">
            <div className="w-full h-[200px] bg-gray-200 rounded-md"></div>
            <div className="w-full h-3 bg-gray-200 rounded-full"></div>
            <div className="w-full h-3 bg-gray-200 rounded-full"></div>
            <div className="w-8/12 mx-auto h-3 bg-gray-200 rounded-full"></div>
          </div>
          <div className="rounded-md bg-gray-300 w-full px-10 py-4">
            <div className="w-full h-3 bg-gray-400 rounded-full"></div>
          </div>
          {/* Website links skeleton */}
          <div className="w-full grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="w-full h-fit space-y-1" key={index}>
                <div className="w-10 h-10 bg-gray-200 rounded-full mx-auto"></div>
                <div className="w-full h-3 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;
