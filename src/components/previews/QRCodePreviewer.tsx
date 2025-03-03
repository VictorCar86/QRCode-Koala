import Image from "next/image";
import { SignalHigh, BatteryFull, Wifi } from "lucide-react";
import IphoneSVGImage from "../utils/IphoneSVGImage";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export default function QRCodePreviewer({
  children,
  showOnMobile = false,
  noPhone = false,
}: {
  children: React.ReactNode;
  showOnMobile?: boolean;
  noPhone?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex-col max-w-[281px] w-full h-[562px] relative py-[10px] px-[11px] pr-[14px] rounded-t-[40px] rounded-b-[43px] md:rounded-t-[45px] md:rounded-b-[48px] overflow-hidden",
        {
          "hidden xl:flex": !showOnMobile,
          flex: showOnMobile,
          "scale-[1.35]": noPhone,
        },
      )}
      style={{ aspectRatio: "276/560" }}
    >
      <div
        className={cn(
          "w-full h-full pt-[30px] text-center bg-white relative mobile-scrollbar overflow-hidden",
          {
            "rounded-t-xl rounded-b-[38px]": !noPhone,
          },
        )}
      >
        {!children ? (
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <Image
              src="/images/qr_koala_logo_XL.webp"
              alt="QR KOALA"
              width={80}
              height={80}
            />
            <p className="w-3/4 text-xl">Select a type of QR code to start</p>
          </div>
        ) : (
          children
        )}
      </div>
      {!noPhone ? (
        <>
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
        </>
      ) : null}
    </div>
  );
}
