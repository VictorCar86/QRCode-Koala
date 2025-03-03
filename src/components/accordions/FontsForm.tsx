"use client";

import { Type } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AccordionForm from "@/components/ui/accordion-form";
import { FontsFormProps, FontConfig } from "@/lib/types/video";

const availableFonts = [
  "Nokora",
  "Lato",
  "Open Sans",
  "Roboto",
  "Oswald",
  "Raleway",
  "Merriweather",
  "Noto Sans",
];

const titleFontSizes = [
  "16px",
  "18px",
  "19px",
  "20px",
  "21px",
  "22px",
  "23px",
  "24px",
  "25px",
  "26px",
  "27px",
  "28px",
  "29px",
  "30px",
];
const descriptionFontSizes = [
  "12px",
  "14px",
  "15px",
  "16px",
  "17px",
  "18px",
  "19px",
  "20px",
  "21px",
  "22px",
];

export default function FontsForm({ defaultOpen, fonts, onChange }: FontsFormProps) {
  const handleFontChange = (field: keyof FontConfig, value: string) => {
    onChange({
      ...fonts,
      [field]: value,
    });
  };

  return (
    <AccordionForm
      id="fonts"
      icon={Type}
      title="Fonts"
      subtitle="Make your page unique with original fonts."
      defaultOpen={defaultOpen}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="mt-2 font-semibold">Title font and size</h3>
          <div className="bg-gray-50 p-4 rounded-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title-font">Title Font</Label>
              <Select
                value={fonts.titleFont || availableFonts[0]}
                onValueChange={(value) => handleFontChange("titleFont", value)}
              >
                <SelectTrigger id="title-font">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  {availableFonts.map((font) => (
                    <SelectItem
                      key={font}
                      value={font}
                      style={{ fontFamily: font }}
                      className="text-base"
                    >
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title-size">Title Size</Label>
              <Select
                value={fonts.titleFontSize || titleFontSizes[0]}
                onValueChange={(value) => handleFontChange("titleFontSize", value)}
              >
                <SelectTrigger id="title-size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {titleFontSizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="mt-2 font-semibold">Descriptions font and size</h3>
          <div className="bg-gray-50 p-4 rounded-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description-font">Description Font</Label>
              <Select
                value={fonts.descriptionFont || availableFonts[0]}
                onValueChange={(value) => handleFontChange("descriptionFont", value)}
              >
                <SelectTrigger id="description-font">
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  {availableFonts.map((font) => (
                    <SelectItem
                      key={font}
                      value={font}
                      style={{ fontFamily: font }}
                      className="text-base"
                    >
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description-size">Description Size</Label>
              <Select
                value={fonts.descriptionFontSize || descriptionFontSizes[0]}
                onValueChange={(value) => handleFontChange("descriptionFontSize", value)}
              >
                <SelectTrigger id="description-size">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {descriptionFontSizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </AccordionForm>
  );
}
