import Image from "next/image";
import Link from "next/link";
import {
  // Mail,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import GenerateHeader from "@/components/GenerateHeader";

export default function QRDownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <GenerateHeader />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Download Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/qr_koala_logo.webp"
                alt="QR Koala Mascot"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Download Your QR Code</h1>
              <p className="text-gray-600">Create an account to download your QR code</p>
            </div>

            <div className="space-y-6">
              {/* <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full"
                />
              </div> */}

              {/* <Button className="w-full bg-black text-white hover:bg-black/90">
                <Mail className="w-4 h-4 mr-2" />
                Continue with Email
              </Button> */}

              {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div> */}

              <Button
                variant="outline"
                className="w-full bg-[#4285f4]/10 hover:bg-[#4285f4]/20 text-gray-900"
              >
                <Image
                  src="https://www.qrcode-koala.com/svg/socials/google_review.svg"
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with Google
              </Button>

              <p className="text-xs text-center text-gray-500">
                By creating an account you agree to our{" "}
                <Link href="/terms" className="underline">
                  terms
                </Link>{" "}
                of service and{" "}
                <Link href="/privacy" className="underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Download your QR code in various formats",
                "Edit your QR code content, even post-printing",
                "Generate an unlimited number of QR codes",
                "Monitor your QR codes with robust analytics",
                "Manage all your QR codes from a single location",
                "And so much more!",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - QR Preview */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold">Your QR Code Is Ready</h2>
            </div>
            <p className="text-gray-600 mb-8">Scan it now to see how it works!</p>

            <div className="relative">
              {/* QR Code Preview Placeholder */}
              <div className="aspect-square w-full max-w-md mx-auto bg-gray-100 rounded-lg" />

              {/* Decorative Arrow */}
              <div className="hidden xl:block absolute -right-20 top-0 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1200"
                  width="150"
                  height="150"
                >
                  <path d="M261.6 1019.2c-55.562-141-42-329.28 110.4-404.4 70.801-35.039 163.68-26.879 222.6 27.84 45.719 42.48 48 115.8-18 136.68-47.027 12.961-97.422 2.367-135.24-28.441-142.92-114.84-17.281-303.36 106.92-366.84 144-73.801 317.64-66.961 459.84 6 20.641 10.559 38.879-20.52 18.238-31.078-154.2-79.078-340.68-86.039-496.32-6-126.84 65.039-231.72 211.08-166.32 355.92 13.953 30.867 35.914 57.434 63.598 76.953s60.086 31.273 93.844 34.047c54.719 4.559 124.56-16.801 144-74.16 22.68-65.52-35.281-129.96-88.559-159.36a239.943 239.943 0 0 0-96.121-28.16 239.97 239.97 0 0 0-99.242 13.52c-186.84 67.922-219.36 292.32-154.32 457.08 8.398 21.238 43.199 12 34.68-9.602z"></path>
                  <path d="M897.96 251.04A1613.345 1613.345 0 0 1 1032 384l3.719-28.199a1265.581 1265.581 0 0 0-187.92 118.92c-18.121 13.922 0 45.238 18.238 31.078v.004a1258.595 1258.595 0 0 1 187.8-118.92 18.24 18.24 0 0 0 3.719-28.321 1614.196 1614.196 0 0 0-133.56-132.96c-17.281-15.238-42.961 10.199-25.441 25.44z"></path>
                </svg>
              </div>

              <p className="text-sm text-center text-gray-600 mt-8">
                You can now scan your QR code with your phone to see it in action
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
