import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Header({ fixed = false }: { fixed?: boolean }) {
  return (
    <header
      className={`${
        fixed ? "fixed top-0 left-0 right-0 z-50" : ""
      } border-b border-gray-200 py-2 backdrop-blur-lg backdrop-saturate-150 bg-background/70`}
    >
      <div className="container xl:max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            className="mr-2"
            src="/images/qr_koala_logo.webp"
            alt="QR KOALA"
            width={28}
            height={28}
          />
          <span className="font-black text-xl text-inherit">QR KOALA</span>
        </Link>
        <div className="flex items-center">
          <Button
            variant="outline"
            className="mr-2 cursor-pointer border-none shadow-none bg-transparent font-light"
          >
            Sign In
          </Button>
          <Button className="px-4 py-2 bg-black text-white rounded cursor-pointer font-light">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
