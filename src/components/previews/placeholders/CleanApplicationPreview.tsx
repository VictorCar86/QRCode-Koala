import Image from "next/image";
import WaveBG from "@/components/utils/WaveBG";

export default function CleanApplicationPreview({
  bgPrimaryColor,
  bgSecondaryColor,
}: {
  bgPrimaryColor?: string;
  bgSecondaryColor?: string;
}) {
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
          <div className="w-full p-5 pt-10 text-center flex justify-between flex-col gap-5 rounded-[38px]">
            <div className="space-y-2">
              <div className="space-y-1 pb-14" style={{ color: "white" }}>
                {/* App Name */}
                <h1
                  className="undefined text-lg font-bold break-words"
                  style={{ fontSize: "16px" }}
                >
                  Sound
                </h1>
                {/* App Developer/Company Name */}
                <h2 className="undefined text-sm block font-medium break-words">
                  Music &amp; Melody App
                </h2>
              </div>
              <div className="bg-white border border-gray-300 space-y-2 px-3 py-5 rounded-md relative text-black">
                {/* App Logo */}
                <div className="absolute -top-12 left-0 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBpY29ufGVufDB8fDB8fHww"
                    alt="Music App Logo"
                    className="w-24 h-24 object-cover !p-1 bg-white mx-auto border border-gray-100 rounded-md shadow-md"
                    width={96}
                    height={96}
                  />
                </div>
                {/* App Description */}
                <p
                  className="undefined text-sm pt-8 pb-2 font-medium break-words"
                  style={{ fontSize: "12px" }}
                >
                  Monitor your playlists and keep up with your music objectives with the
                  Sound app
                </p>
                {/* App Store Button */}
                <a
                  className="z-0 group relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 text-small gap-2 rounded-sm w-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-primary-foreground data-[hover=true]:opacity-hover h-14 bg-black px-6 justify-start"
                  role="button"
                  href="https://www.qrcode-koala.com"
                  target="_blank"
                >
                  <div aria-hidden="true" tabIndex={-1}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[0.6rem] block leading-none">
                      Download on the
                    </span>
                    <span className="block font-bold leading-none">App Store</span>
                  </div>
                </a>
                {/* Google Play Button */}
                <a
                  className="z-0 group relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 text-small gap-2 rounded-sm w-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-primary-foreground data-[hover=true]:opacity-hover h-14 bg-black px-6 justify-start"
                  role="button"
                  tabIndex={0}
                  href="https://www.qrcode-koala.com"
                  target="_blank"
                >
                  <div aria-hidden="true" tabIndex={-1}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[0.6rem] block leading-none">Get it on</span>
                    <span className="block font-bold leading-none">Google Play</span>
                  </div>
                </a>
                {/* Amazon Appstore Button */}
                <a
                  className="z-0 group relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 text-small gap-2 rounded-sm w-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none text-primary-foreground data-[hover=true]:opacity-hover h-14 bg-black px-6 justify-start"
                  role="button"
                  href="https://www.qrcode-koala.com"
                  target="_blank"
                >
                  <div aria-hidden="true" tabIndex={-1}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[0.6rem] block leading-none">Available at</span>
                    <span className="block font-bold leading-none">Amazon</span>
                  </div>
                </a>
              </div>
              {/* Website Link */}
              <div
                role="button"
                className="w-full bg-white p-3 rounded-md flex gap-2 items-center justify-between border border-gray-300 group hover:cursor-pointer"
              >
                <div className="flex-0 bg-gray-100 border border-gray-300 rounded-md text-gray-custom w-8 h-8 p-1 grid place-content-center group-hover:bg-gray-200">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1025.02 512c0-272.016-213.663-495.104-482.319-511.023-5.536-.608-11.088-1.009-16.72-1.009-1.664 0-3.328.176-4.992.224-2.992-.048-5.968-.224-8.992-.224C229.117-.032-1.026 229.664-1.026 512s230.144 512.032 513.023 512.032c3.024 0 6-.176 9.008-.24 1.664.064 3.328.24 4.992.24 5.632 0 11.184-.4 16.72-1.009 268.64-15.92 482.304-238.976 482.303-511.023zm-95.451 164.832c-17.632-5.12-61.92-16.24-140.064-25.392 6.464-44.192 10-90.896 10-139.44 0-38.256-2.208-75.343-6.288-111.008 99.008-11.824 142.384-26.72 145.296-27.745l-11.92-33.584c22.24 53.088 34.56 111.296 34.56 172.336 0 58.193-11.28 113.761-31.583 164.833zM285.488 512.001c0-35.808 2.37-70.77 6.705-104.401 51.888 4.08 113.936 7.088 186.863 7.792v222.064c-70.992.688-131.664 3.568-182.688 7.473-7.04-42.193-10.88-86.88-10.88-132.928zM542.945 68.223c78.464 22.736 145.648 131.695 175.744 276.111-48.368 3.856-106.624 6.673-175.744 7.33V68.223zm-63.886.783V351.63c-68.368-.688-126.88-3.473-176.063-7.232C333.7 201.79 401.428 93.646 479.059 69.006zm0 632.223l.001 253.743c-72.4-22.976-136.192-118.575-169.36-247.023 47.76-3.504 104.096-6.063 169.359-6.72zm63.888 254.543l-.001-254.56c65.952.623 122.064 3.28 169.217 6.928-32.608 130.128-96 226.416-169.216 247.632zm-.001-318.32l.001-222.032c73.311-.688 134.991-3.776 186.191-8a844.922 844.922 0 0 1 6.496 104.592c0 46.128-3.712 90.864-10.528 133.12-50.416-4.08-110.8-7.008-182.16-7.68zm371.858-323.52c-9.664 3.008-50.063 14.48-131.023 24.032-18.048-95.952-50.672-177.968-93.12-237.168C788.197 143.18 867.797 219.1 914.805 313.932zM358.82 90.589c-52.208 59.952-94.832 146.161-118.096 248.113-72.48-7.856-115.921-17.089-133.312-21.281 50.72-104.64 141.04-186.752 251.408-226.832zM83.637 377.182c12.32 3.344 58.913 14.941 145.553 24.525a795.86 795.86 0 0 0-7.68 110.305c0 48.273 4.368 94.721 12.24 138.688-74.4 8.033-120.16 17.649-140.688 22.609-19.44-50.096-30.208-104.447-30.208-161.312 0-46.96 7.312-92.256 20.783-134.815zm37.457 355.166c23.264-4.944 64.912-12.464 126.592-18.928 24.288 89.712 63.792 165.616 111.136 219.968-101.12-36.72-185.296-108.752-237.728-201.04zM690.662 923.18c38.224-53.264 68.48-125.024 87.296-208.801 63.408 7.28 103.216 15.792 123.296 20.864-48.016 83.072-121.855 149.393-210.592 187.937z"></path>
                  </svg>
                </div>
                <span className="text-xs text-blue-500 group-hover:underline truncate">
                  www.sound.com
                </span>
                <div className="flex-0 text-gray-custom group-hover:text-gray-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="48"
                      d="M184 112l144 144-144 144"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
