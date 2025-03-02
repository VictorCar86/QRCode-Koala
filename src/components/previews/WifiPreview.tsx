import React from "react";
import { Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveBG from "../utils/WaveBG";

const WifiPreview = ({ networkName }: { networkName?: string }) => {
  return (
    <div className="relative max-w-xs mx-auto h-full">
      <WaveBG className="absolute -top-10 text-black" />
      {/* Phone frame */}
      <div className="absolute top-0 bottom-0 grid place-content-center h-full overflow-hidden pt-4 pb-6 px-6 shadow-xl">
        {/* Wi-Fi content section */}
        <div className="flex flex-col items-center justify-center gap-4 w-52 px-2 py-12 mb-4 flex-grow rounded-sm shadow-md bg-white">
          {/* Wi-Fi icon */}
          <Wifi size={110} strokeWidth={2.5} />
          {/* Wi-Fi prompt text */}
          <div className="text-center">
            <h3 className="font-bold text-xl">
              Join the &quot;{networkName || "Hotel"}&quot; Wi-fi network?
            </h3>
          </div>
        </div>

        {/* Buttons section */}
        <div className="space-y-3">
          <Button className="w-full bg-black text-white hover:bg-gray-800 font-medium text-lg py-6 rounded-sm font-bold cursor-pointer">
            Connect
          </Button>

          <Button
            variant="outline"
            className="w-full border-2 text-lg font-medium py-6 rounded-sm font-bold cursor-pointer"
          >
            Close
          </Button>
        </div>

        {/* Phone home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="h-1 w-24 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default WifiPreview;
