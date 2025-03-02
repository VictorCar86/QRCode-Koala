"use client";

import type * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";

interface FormSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  isRequired?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function AccordionForm({
  id,
  icon: Icon,
  title,
  subtitle,
  isRequired = false,
  defaultOpen = false,
  children,
}: FormSectionProps) {
  return (
    <div className="w-full xl:max-w-2xl">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={defaultOpen ? id : undefined}
      >
        <AccordionItem
          value={id}
          className="border border-gray-200 rounded-md shadow-lg bg-white"
        >
          <AccordionTrigger className="px-4 hover:no-underline cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="rounded-sm border border-gray-400 p-2">
                <Icon className="h-9 w-9 text-gray-500" />
              </div>
              <div className="h-min text-left">
                <h3 className="text-base font-medium flex items-center gap-1">
                  {title}
                  {isRequired && <span className="text-red-600">*</span>}
                </h3>
                <p className="text-sm text-gray-500 font-normal">{subtitle}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="w-full h-[1px] bg-gray-200" />
            <div className="space-y-4 pt-2">{children}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
