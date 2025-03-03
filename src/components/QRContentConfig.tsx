"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GenerateHeader from "@/components/GenerateHeader";
import QRCodePreviewer from "@/components/previews/QRCodePreviewer";
import SwitchTabs, { SwitchTabsType } from "@/components/ui/switch-tabs";
import clsx from "clsx";
import { toast } from "sonner";
import QRCode from "react-qr-code";

interface QRContentConfigProps {
  children: React.ReactNode;
  PreviewerComponent: React.ComponentType;
  isFormValid: boolean;
  QRCodeValue: string;
}

export default function QRContentConfig({
  children,
  PreviewerComponent,
  isFormValid,
  QRCodeValue,
}: QRContentConfigProps) {
  const [currentTab, setCurrentTab] = useState<SwitchTabsType>("PREVIEW");

  const QRMainPreview = ({ showOnMobile }: { showOnMobile?: boolean }) => (
    <>
      <SwitchTabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        className={clsx("mx-auto", {
          "hidden xl:inline-flex": !showOnMobile,
        })}
        disabled={!isFormValid}
        disabledCallback={() => {
          toast.error(
            "This feature will be enabled after you fill in all required fields",
          );
        }}
      />
      <QRCodePreviewer showOnMobile={showOnMobile}>
        {currentTab === "PREVIEW" && <PreviewerComponent />}
        {currentTab === "QR" && (
          <section className={"w-full h-full grid place-content-center"}>
            <QRCode className="px-8" value={QRCodeValue} />
          </section>
        )}
      </QRCodePreviewer>
    </>
  );

  return (
    <>
      <GenerateHeader />
      <main className="min-h-screen pb-20 bg-custom-gray">
        <section className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-full xl:max-w-[720px]">
              <h1 className="text-xl md:text-2xl font-bold py-3 md:py-5">
                2. Add content to your QR code
              </h1>
              {/* Accordion Options */}
              {children}
            </div>
            <div className="flex flex-col gap-4 pt-4">
              <QRMainPreview />
            </div>
          </div>
        </section>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 z-40 py-2 bg-white">
        <nav className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-between">
            <li>
              <Link
                className="inline-flex items-center justify-center gap-2 w-fit min-w-20 h-10 sm:px-10 px-8 border-2 rounded appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 bg-transparent text-xs transition-all motion-reduce:transition-none border-primary text-primary hover:!text-primary-foreground hover:!bg-primary font-semibold"
                href="/qr-code-generator"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:block">QR Types</span>
              </Link>
            </li>
            <li className="flex gap-3">
              <div className="xl:hidden">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-full rounded border-2 border-primary"
                    >
                      <Smartphone className="w-4 h-4" />
                      Preview
                    </Button>
                  </DialogTrigger>
                  <DialogTitle className="hidden">Preview</DialogTitle>
                  <DialogDescription className="hidden">Description</DialogDescription>
                  <DialogContent className="flex flex-col gap-4 justify-center items-center">
                    <QRMainPreview showOnMobile />
                  </DialogContent>
                </Dialog>
              </div>
              <Link
                className={clsx(
                  "inline-flex items-center justify-center gap-2 h-10 px-8 py-2 whitespace-nowrap text-xs transition-all text-white rounded cursor-pointer font-light",
                  {
                    "opacity-50 cursor-not-allowed bg-gray-400 pointer-events-none":
                      !isFormValid,
                    "bg-black hover:bg-primary/90": isFormValid,
                  },
                )}
                href={isFormValid ? "/" : "#"}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
