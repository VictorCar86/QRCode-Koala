import { Metadata } from "next";
import MainHeader from "@/components/MainHeader";
import CurvedArrow from "@/components/utils/CurvedArrow";
import QRGeneratorMenu from "@/components/QRGeneratorMenu";
import { ProductInfoLayout } from "@/components/ProductInfoLayout";

export const metadata: Metadata = {
  title: "Generate QR Code - QR Koala",
  description: "Generate your QR code easily with QR Koala",
};

export default function GeneratePage() {
  return (
    <>
      <MainHeader fixed />
      <main className="min-h-screen mt-12 pb-26 bg-custom-gray">
        <section className="relative max-w-6xl mx-auto px-4">
          <h1 className="py-11 text-3xl md:text-5xl font-extrabold text-center">
            Create Your QR Code Now
          </h1>
          <CurvedArrow className="absolute -top-[6%] -left-[15%] rotate-90 z-20" />
          <QRGeneratorMenu />
        </section>
      </main>
      <ProductInfoLayout />
    </>
  );
}
