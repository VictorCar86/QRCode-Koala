import Image from "next/image";
import WaveBG from "../utils/WaveBG";
import { VideoPreviewProps } from "@/lib/types/video";
import CleanVideoPreview from "./placeholders/CleanVideoPreview";

const VideoPreview = (props: VideoPreviewProps) => {
  const {
    videos,
    socialNetworks,
    companyName,
    pageTitle,
    pageDescription,
    buttons,
    bgPrimaryColor,
    bgSecondaryColor,
    fonts,
    showDirectly,
    autoPlay,
  } = props;

  const showPreview = [
    !videos?.length,
    !companyName,
    !pageTitle,
    !pageDescription,
    !buttons?.length,
    !socialNetworks?.length,
  ].every((condition) => condition === true);

  const getVideoEmbedUrl = (videoUrl: string) => {
    const videoId = videoUrl.split("v=")[1]?.split("&")[0];
    const params = new URLSearchParams({
      rel: "0", // Disable related videos
      modestbranding: "1", // Remove YouTube logo
    });

    if (autoPlay) {
      params.append("autoplay", "1");
      params.append("mute", "0"); // Required for autoplay in most browsers
    }

    if (showDirectly) {
      params.append("fs", "1"); // Enable fullscreen
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  if (showPreview) {
    return <CleanVideoPreview {...props} />;
  } else {
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
                  {companyName}
                </h2>
                {/* Page Title */}
                <h1
                  className="text-lg font-bold break-words"
                  style={{ fontSize: fonts?.titleFontSize, fontFamily: fonts?.titleFont }}
                >
                  {pageTitle}
                </h1>
                {/* Page Description */}
                <p
                  className="text-sm font-medium break-words"
                  style={{
                    fontSize: fonts?.descriptionFontSize,
                    fontFamily: fonts?.descriptionFont,
                  }}
                >
                  {pageDescription}
                </p>
                {/* Video Buttons */}
                <div>
                  {buttons?.map((button) => (
                    <a
                      key={button.text}
                      className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-2 px-4 min-w-20 text-small gap-2 rounded-sm w-full [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-primary text-primary data-[hover=true]:opacity-hover font-semibold h-12"
                      href={button.url}
                      target="_blank"
                      style={{
                        color: "black",
                        borderColor: "black",
                        fontFamily: fonts?.descriptionFont,
                        fontSize: fonts?.descriptionFontSize,
                      }}
                    >
                      <span className="w-10/12 truncate">{button.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Videos */}
            <div className="relative px-6 -mt-20 pb-10 z-10 space-y-4">
              {videos?.map((video) => (
                <div className="space-y-4" key={video.url}>
                  <div className="space-y-1 p-2 bg-white border border-gray-300 rounded-md">
                    <div className="relative">
                      <iframe
                        width="100%"
                        height="100%"
                        src={getVideoEmbedUrl(video.url)}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        style={
                          showDirectly
                            ? { position: "fixed", top: 0, left: 0, zIndex: 50 }
                            : undefined
                        }
                      />
                    </div>
                    <p
                      className="text-left text-xs break-words"
                      style={{
                        fontFamily: fonts?.descriptionFont,
                        fontSize: fonts?.descriptionFontSize,
                      }}
                    >
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Social Networks */}
              <div className="space-y-4">
                {socialNetworks?.length ? (
                  <span
                    className="block text-left font-semibold"
                    style={{
                      fontFamily: fonts?.titleFont,
                      fontSize: fonts?.titleFontSize,
                    }}
                  >
                    Find me on
                  </span>
                ) : null}
                <div
                  className="space-y-2"
                  style={{
                    fontFamily: fonts?.descriptionFont,
                    fontSize: fonts?.descriptionFontSize,
                  }}
                >
                  {socialNetworks?.map((social) => (
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
};

export default VideoPreview;
