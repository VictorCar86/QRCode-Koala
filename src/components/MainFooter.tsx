import Image from "next/image";

export default function MainFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="pt-12 pb-4 px-5 md:px-10 space-y-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                className="mr-2"
                src="/images/qr_koala_logo.webp"
                alt="QR KOALA"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl text-extrabold">QR KOALA</span>
            </div>
            <p className="w-full md:w-[70%] text-gray-300 text-sm">
              Powerful, yet simple QR code generator suited to all your QR code needs as a
              business or as an individual.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between w-1/2 mt-12 md:mt-0 text-sm">
            {/* Resources */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-md mb-2">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Create QR Code
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Plans and Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-md mb-2">Terms</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-md mb-2">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Sales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Public Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    General Inquires
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white">© 2024 QR Code Koala · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
