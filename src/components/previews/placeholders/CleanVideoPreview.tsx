import Image from "next/image";
import WaveBG from "@/components/utils/WaveBG";
import { VideoPreviewProps } from "@/lib/types/video";
import { platforms } from "@/lib/placeholders/platforms";

export default function CleanVideoPreview(props: VideoPreviewProps) {
  const { bgPrimaryColor = "#f5902e", bgSecondaryColor = "#f5902e", fonts } = props;

  return (
    <div className="relative max-w-xs mx-auto h-full">
      <WaveBG
        className="absolute -top-10"
        topColor={bgPrimaryColor}
        bottomColor={bgSecondaryColor}
      />
      {/* Phone frame */}
      <div className="absolute top-0 bottom-0 space-y-3 h-full w-full overflow-y-auto pt-4 pb-6 px-6 shadow-xl">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Phone Frame Content */}
          <div className="relative pb-20 min-h-[20%]">
            <div
              className="relative z-10 space-y-2 px-6 pt-10 pb-6"
              style={{ color: "black" }}
            >
              {/* Company Name */}
              <h2
                className="text-sm font-medium break-words"
                style={{ fontSize: fonts?.descriptionFontSize }}
              >
                Sarah&apos;s Cuisine
              </h2>
              {/* Page Title */}
              <h1
                className="text-lg font-bold break-words"
                style={{ fontSize: fonts?.titleFontSize, fontFamily: fonts?.titleFont }}
              >
                Culinary Guide
              </h1>
              {/* Page Description */}
              <p
                className="text-sm font-medium break-words"
                style={{
                  fontSize: fonts?.descriptionFontSize,
                  fontFamily: fonts?.descriptionFont,
                }}
              >
                Follow our detailed culinary guide video and discover how to whip up a
                tasty dish swiftly!
              </p>
              {/* Video Buttons */}
              <div>
                <a
                  className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-2 px-4 min-w-20 text-small gap-2 rounded-sm w-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-primary text-primary data-[hover=true]:opacity-hover font-semibold h-12"
                  role="button"
                  tabIndex={0}
                  href="https://www.qrcode-koala.com"
                  target="_blank"
                  style={{
                    color: "black",
                    borderColor: "black",
                    fontFamily: fonts?.descriptionFont,
                    fontSize: fonts?.descriptionFontSize,
                  }}
                >
                  <span className="w-10/12 truncate">View More</span>
                </a>
              </div>
            </div>
          </div>
          {/* Videos */}
          <div className="relative px-6 -mt-20 pb-10 z-10 space-y-4">
            <div className="space-y-4">
              <div className="space-y-1 p-2 bg-white border border-gray-300 rounded-md">
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    style={{ aspectRatio: "16/9" }}
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D"
                    alt="Girl Cooking"
                    className="w-full h-auto object-cover rounded-md bg-white"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-1 bg-primary/60 rounded-full">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 256 256"
                        className="text-white cursor-pointer"
                        height="40"
                        width="40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm36.44,110.66-48,32A8.05,8.05,0,0,1,112,168a8,8,0,0,1-8-8V96a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p
                  className="text-left text-xs break-words"
                  style={{
                    fontFamily: fonts?.descriptionFont,
                    fontSize: fonts?.descriptionFontSize,
                  }}
                >
                  From the chopping board to the serving dish, master my top recipes like
                  a professional chef.
                </p>
              </div>
            </div>
            {/* Social Networks */}
            <div className="space-y-4">
              <span
                className="block text-left font-semibold"
                style={{ fontFamily: fonts?.titleFont, fontSize: fonts?.titleFontSize }}
              >
                Find me on
              </span>
              <div
                className="space-y-2"
                style={{
                  fontFamily: fonts?.descriptionFont,
                  fontSize: fonts?.descriptionFontSize,
                }}
              >
                {platforms.slice(20, 23).map((social) => (
                  <div
                    className="cursor-pointer"
                    key={social.name}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="flex gap-3 items-center justify-between p-2 rounded-md bg-white border border-gray-300">
                      <div className="flex gap-3 items-center justify-start w-9/12 flex-1">
                        <Image
                          width={100}
                          height={100}
                          src={social.icon}
                          alt={social.name}
                          className="w-8 h-8 object-cover rounded-md"
                        />
                        <div className="text-left">
                          <span className="text-sm font-medium block truncate">
                            {social.name}
                          </span>
                          <span className="text-xs block truncate">Social Account</span>
                        </div>
                      </div>
                      <div className="w-5 flex-0 flex justify-end">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="48"
                            d="M184 112l144 144-144 144"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
