import Link from "next/link";
import Image from "next/image";
import { StepsNavigation } from "@/components/StepsNavigation";

export default function GenerateHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6">
          <Image
            src="/images/qr_koala_logo.webp"
            alt="QR Koala Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="sr-only">QR Koala</span>
        </Link>
        <StepsNavigation className="hidden md:flex" />
      </div>
    </header>
  );
}
