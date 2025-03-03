"use client";
import { Palette, Pencil, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AccordionForm from "@/components/ui/accordion-form";
import { DesignFormProps } from "@/lib/types/video";

interface GradientPair {
  primary: string;
  secondary: string;
}

const defaultGradients: GradientPair[] = [
  { primary: "#00FFC2", secondary: "#00B890" }, // Turquoise to teal
  { primary: "#5400F5", secondary: "#5D2DB5" }, // Purple to dark purple
  { primary: "#84FF00", secondary: "#4CAD00" }, // Lime to green
  { primary: "#F5902E", secondary: "#B5662E" }, // Orange to brown
  { primary: "#D373FF", secondary: "#9B4FBF" }, // Light purple to dark purple
  { primary: "#2E7BF5", secondary: "#2E5BB5" }, // Light blue to dark blue
];

export default function DesignForm({ defaultOpen, design, onChange }: DesignFormProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleGradientSelect = (gradient: GradientPair) => {
    onChange({
      primaryColor: gradient.primary,
      secondaryColor: gradient.secondary,
    });
  };

  const handleColorChange = (type: "primaryColor" | "secondaryColor", value: string) => {
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      onChange({
        ...design,
        [type]: value,
      });
    }
  };

  const swapColors = () => {
    onChange({
      primaryColor: design.secondaryColor,
      secondaryColor: design.primaryColor,
    });
  };

  const isSelected = (gradient: GradientPair) =>
    gradient.primary === design.primaryColor &&
    gradient.secondary === design.secondaryColor;

  return (
    <AccordionForm
      id="design"
      icon={Palette}
      title="Design"
      subtitle="Choose the colors of your page."
      defaultOpen={defaultOpen}
    >
      <div className="space-y-6">
        <div>
          <Label className="text-base text-gray-600 mb-3 block">Color Palette</Label>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 p-4 bg-gray-50 rounded-lg">
            {defaultGradients.map((gradient, index) => (
              <button
                key={index}
                className={cn(
                  "h-16 rounded-md transition-all overflow-hidden",
                  "hover:ring-2 hover:ring-gray-400 hover:ring-offset-2",
                  "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
                  isSelected(gradient) && "ring-2 ring-black ring-offset-2",
                )}
                onClick={() => handleGradientSelect(gradient)}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(to right, ${gradient.primary}, ${gradient.secondary})`,
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-gray-600">Primary Color</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded"
                  style={{ backgroundColor: design.primaryColor }}
                />
                <Input
                  value={design.primaryColor.toUpperCase()}
                  onChange={(e) => handleColorChange("primaryColor", e.target.value)}
                  className="pl-9"
                  disabled={!isEditing}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsEditing(!isEditing)}
                className={cn("hover:bg-gray-100", isEditing && "bg-gray-100")}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-600">Secondary Color</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded"
                  style={{ backgroundColor: design.secondaryColor }}
                />
                <Input
                  value={design.secondaryColor.toUpperCase()}
                  onChange={(e) => handleColorChange("secondaryColor", e.target.value)}
                  className="pl-9"
                  disabled={!isEditing}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsEditing(!isEditing)}
                className={cn("hover:bg-gray-100", isEditing && "bg-gray-100")}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={swapColors}
            className="rounded-full h-10 w-10"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Preview */}
        <div className="p-4 rounded-lg overflow-hidden">
          <div
            className="h-24 rounded-lg"
            style={{
              background: `linear-gradient(to right, ${design.primaryColor}, ${design.secondaryColor})`,
            }}
          />
        </div>
      </div>
    </AccordionForm>
  );
}
