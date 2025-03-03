"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { QRCreateOptions } from "@/lib/placeholders/QRCreateOptions";

type Step = {
  id: number;
  name: [string, string]; // [desktop, mobile]
  href: string;
};

const steps: Step[] = [
  { id: 1, name: ["Select QR type", "Type"], href: "/qr-code-generator" },
  { id: 2, name: ["Add content", "Content"], href: "/qr-code-generator" },
  { id: 3, name: ["Design QR code", "Design"], href: "/qr-code-generator" },
  { id: 4, name: ["Download QR code", "Download"], href: "/qr-code-generator" },
];

interface StepsNavigationProps {
  className?: string;
}

export function StepsNavigation({ className }: StepsNavigationProps) {
  const pathname = usePathname();

  // Extract the QR type from the pathname
  const qrType = pathname?.split("/")[2];

  // Validate if the QR type exists in QRCreateOptions
  const isValidQRType = qrType
    ? QRCreateOptions.some((option) => option.id === qrType)
    : true;

  // Find current step based on pathname and pattern matching
  const getCurrentStep = () => {
    if (pathname === "/qr-code-generator") return 1;
    if (!isValidQRType) return 1;

    if (pathname?.match(/^\/qr-code-generator\/[^/]+$/)) return 2;
    if (pathname?.match(/^\/qr-code-generator\/[^/]+\/design$/)) return 4; // TODO: change to 3 ~ design
    if (pathname?.match(/^\/qr-code-generator\/[^/]+\/download$/)) return 4;

    return 1;
  };

  const currentStep = getCurrentStep();

  // Generate the correct href based on step and QR type
  const getStepHref = (step: Step) => {
    if (step.id === 1) return step.href;
    if (!qrType || !isValidQRType) return step.href;

    // Add the QR type and additional path segments based on the step
    switch (step.id) {
      case 2:
        return `${step.href}/${qrType}`;
      // case 3:
      //   return `${step.href}/${qrType}/design`;
      case 4:
        return `${step.href}/${qrType}/download`;
      default:
        return step.href;
    }
  };

  return (
    <nav className={cn("flex flex-1 items-center justify-center space-x-2", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <Link
            href={getStepHref(step)}
            className={cn(
              "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md",
              step.id === currentStep
                ? "text-black"
                : step.id < currentStep
                  ? "text-black hover:text-gray-700"
                  : "text-gray-400 pointer-events-none",
            )}
          >
            <span
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full text-xs mr-2",
                step.id === currentStep
                  ? "bg-black text-white"
                  : step.id < currentStep
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600",
              )}
            >
              {step.id}
            </span>
            <span className="hidden md:inline">{step.name[0]}</span>
            <span className="md:hidden">{step.name[1]}</span>
          </Link>
          {index < steps.length - 1 && (
            <ArrowRight
              className={cn(
                "h-4 w-4 mx-2",
                step.id < currentStep ? "text-black" : "text-gray-300",
              )}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
