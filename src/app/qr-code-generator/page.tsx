import { Metadata } from "next";
import MainHeader from "@/components/MainHeader";
import QRGeneratorMenu from "@/components/QRGeneratorMenu";

export const metadata: Metadata = {
  title: "Create QR Code - QR Koala",
  description: "Create your QR code easily with QR Koala",
};

export default function QRCodeGenerator() {
  return (
    <>
      <MainHeader />
      <main className="min-h-screen pb-20 bg-custom-gray">
        <section className="max-w-6xl mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold py-3 md:py-5">
            1. Select a type of QR Code
          </h1>
          <QRGeneratorMenu />
        </section>
      </main>
    </>
  );
}
