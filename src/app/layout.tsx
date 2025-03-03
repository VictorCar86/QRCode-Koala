import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Import Google Fonts
import {
  Nokora,
  Lato,
  Open_Sans,
  Roboto,
  Oswald,
  Raleway,
  Merriweather,
  Noto_Sans,
  Montserrat,
} from "next/font/google";

// Initialize fonts
const nokora = Nokora({ weight: ["400", "700"], subsets: ["khmer"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const merriweather = Merriweather({ weight: ["400", "700"], subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Your QR Codes With QR Koala",
  description:
    "Generate QR codes easily with QR Koala. Try our free QR code generator tool now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
          .font-nokora {
            font-family: ${nokora.style.fontFamily};
          }
          .font-lato {
            font-family: ${lato.style.fontFamily};
          }
          .font-open-sans {
            font-family: ${openSans.style.fontFamily};
          }
          .font-roboto {
            font-family: ${roboto.style.fontFamily};
          }
          .font-oswald {
            font-family: ${oswald.style.fontFamily};
          }
          .font-raleway {
            font-family: ${raleway.style.fontFamily};
          }
          .font-merriweather {
            font-family: ${merriweather.style.fontFamily};
          }
          .font-noto-sans {
            font-family: ${notoSans.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
