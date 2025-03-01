import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import { ProductInfoLayout, CreateQRCodeBtn } from "@/components/ProductInfoLayout";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Header */}
      <MainHeader fixed />

      {/* Hero Section */}
      <section className="flex-1">
        <div className="w-full py-12 md:py-24 bg-custom-gray">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl md:text-6xl font-extrabold text-center">
                Powerful Yet Simple
                <br />
                QR Code Generator
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Easily create, track, and manage your QR codes
              </p>
              <div className="space-x-4 mt-4">
                <CreateQRCodeBtn />
              </div>
            </div>
            <Image
              className="w-[75%] mt-12 mx-auto"
              src="https://res.cloudinary.com/dj9wbpm5v/image/upload/v1740843720/dashboard-1_ah6n9s.webp"
              alt="QR Code Generator"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      {/* Product Info Layout */}
      <ProductInfoLayout />
    </main>
  );
}
