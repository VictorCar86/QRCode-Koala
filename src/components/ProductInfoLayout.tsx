import {
  ArrowRight,
  Download,
  MousePointerClick,
  Smartphone,
  Infinity,
  Printer,
  PaintBucket,
  BarChart4,
  QrCode,
} from "lucide-react";
import { faqItems } from "@/lib/placeholders/faqItems";
import QRGeneratorMenu from "@/components/QRGeneratorMenu";
import MainFooter from "@/components/MainFooter";

export function CreateQRCodeBtn() {
  return (
    <a
      className="cursor-pointer flex items-center justify-center py-2 px-4 rounded bg-black text-white font-light hover:bg-gray-800"
      style={{ paddingInline: "30px" }}
      href="#qr-code-generator"
    >
      Create QR Code <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  );
}

function InfoCard({
  Icon,
  title,
  description,
}: {
  Icon: typeof QrCode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="flex items-center justify-center">
        <Icon className="h-[86px] w-[86px]" />
      </div>
      <h3 className="text-xl font-extrabold">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="space-y-2">
      <h4 className="font-extrabold text-base md:text-lg">{question}</h4>
      <p className="text-justify text-base md:text-lg">{answer}</p>
    </div>
  );
}

export function ProductInfoLayout() {
  return (
    <>
      {/* Steps Section */}
      <section className="w-full py-6 md:py-10 lg:py-20">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center">
              Your QR Code in 3 Steps
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Creating your QR codes is extremely simple
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
            <InfoCard
              Icon={MousePointerClick}
              title="Select"
              description="Choose the type of QR code that you need"
            />
            <InfoCard
              Icon={Smartphone}
              title="Design"
              description="Customize and design of your QR code"
            />
            <InfoCard
              Icon={Download}
              title="Download"
              description="Download and print your new QR code"
            />
          </div>
          <div className="flex justify-center mt-12">
            <CreateQRCodeBtn />
          </div>
        </div>
      </section>

      {/* QR Code Generator Menu Section */}
      <section
        className="w-full py-6 md:py-10 lg:py-20 bg-custom-gray"
        id="qr-code-generator"
      >
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-xl md:text-3xl font-extrabold text-center">
            QR Codes For Everything
          </h2>
          <p className="mx-auto max-w-[700px] md:text-md">
            Whatever type of QR code you need, we&apos;ve got you covered.
          </p>
        </div>
        <div className="px-4 md:px-6 max-w-6xl mx-auto">
          <QRGeneratorMenu />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-6 md:py-10 lg:py-20">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center">Benefits</h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Packed with everything you need in a QR Code Generator.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-16">
            <InfoCard
              Icon={BarChart4}
              title="Track Scans & Analytics"
              description="Track where your scans are coming from (country, city, device, browser)"
            />
            <InfoCard
              Icon={Printer}
              title="Editable After Printing"
              description="You can edit your codes even after printing them"
            />
            <InfoCard
              Icon={PaintBucket}
              title="Full Customization"
              description="Customize your QR code to match your brand guidelines"
            />
            <InfoCard
              Icon={Infinity}
              title="Unlimited QR Codes"
              description="Create as many QR codes as you need"
            />
            <InfoCard
              Icon={Infinity}
              title="Unlimited Scans"
              description="No limit of scans for any of your QR codes"
            />
            <InfoCard
              Icon={QrCode}
              title="QR Codes For Every Need"
              description="We have a QR code for every need you may have"
            />
          </div>
          <div className="flex justify-center mt-12">
            <CreateQRCodeBtn />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-6 md:py-10 lg:py-20 bg-custom-gray">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              If you have another question reach out at{" "}
              <a
                className="text-blue-500 hover:underline"
                href="mailto:hello@qrcode-koala.com"
              >
                hello@qrcode-koala.com
              </a>
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-10 mt-16 mb-16">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <CreateQRCodeBtn />
          </div>
        </div>
      </section>

      {/* Footer */}
      <MainFooter />
    </>
  );
}
