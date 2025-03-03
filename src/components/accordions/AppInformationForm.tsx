"use client";

import type React from "react";
import { Info, Upload } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import AccordionForm from "@/components/ui/accordion-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AppInformation } from "@/lib/types/application";

interface AppInformationFormProps {
  defaultOpen?: boolean;
  required?: boolean;
  formData: AppInformation;
  onChange: (data: AppInformation) => void;
}

export default function AppInformationForm({
  defaultOpen,
  required,
  formData,
  onChange,
}: AppInformationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          ...formData,
          appIcon: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          ...formData,
          appIcon: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (field: keyof AppInformation, value: string) => {
    onChange({
      ...formData,
      [field]: value,
    });
  };

  return (
    <AccordionForm
      id="app-information"
      icon={Info}
      title="App Information"
      subtitle="Provide information about your app."
      isRequired={required}
      defaultOpen={defaultOpen}
    >
      <div className="space-y-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <Label htmlFor="app-name" className="text-base text-gray-600">
            App name {required && <span className="text-red-500">*</span>}
          </Label>
          <Input
            id="app-name"
            placeholder="E.g. My App"
            value={formData.appName}
            onChange={(e) => handleChange("appName", e.target.value)}
          />
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <Label htmlFor="developer" className="text-base text-gray-600">
            Developer/Company
          </Label>
          <Input
            id="developer"
            placeholder="Name of app developer"
            value={formData.developer}
            onChange={(e) => handleChange("developer", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base text-gray-600">
            Logo {required && <span className="text-red-500">*</span>}
          </Label>
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8",
              "hover:bg-gray-50 transition-colors cursor-pointer",
            )}
            onClick={triggerFileInput}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {formData.appIcon ? (
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={formData.appIcon}
                    alt="App logo preview"
                    fill
                    className="object-contain"
                  />
                </div>
                <Button variant="outline" onClick={triggerFileInput}>
                  Change logo
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <Upload className="h-10 w-10 text-gray-400 mb-4" />
                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-black/90 mb-2"
                >
                  Select your logo
                </Button>
                <p className="text-sm text-gray-500">Or drop your files here</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileSelect}
          />
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <Label htmlFor="description" className="text-base text-gray-600">
            Description {required && <span className="text-red-500">*</span>}
          </Label>
          <Textarea
            id="description"
            placeholder="E.g. Health and Wellness app"
            value={formData.appDescription}
            onChange={(e) => handleChange("appDescription", e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <Label htmlFor="website" className="text-base text-gray-600">
            Website {required && <span className="text-red-500">*</span>}
          </Label>
          <Input
            id="website"
            placeholder="E.g. https://qrcode-koala.com"
            value={formData.website}
            onChange={(e) => handleChange("website", e.target.value)}
          />
        </div>
      </div>
    </AccordionForm>
  );
}
