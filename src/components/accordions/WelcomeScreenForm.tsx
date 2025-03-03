"use client";

import type React from "react";

import { VenetianMaskIcon as Mask, Eye, Trash2, Upload, Pencil } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import AccordionForm from "@/components/ui/accordion-form";

interface WelcomeScreenImage {
  url: string;
  file: File | null;
}

export default function WelcomeScreenForm({ defaultOpen }: { defaultOpen?: boolean }) {
  const [image, setImage] = useState<WelcomeScreenImage | null>(null);
  const [time, setTime] = useState([2.5]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage({ url, file });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage({ url, file });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDelete = () => {
    if (image?.url) {
      URL.revokeObjectURL(image.url);
    }
    setImage(null);
  };

  const handlePreview = () => {
    // Implement preview functionality
    console.log("Preview welcome screen");
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <AccordionForm
      id="welcome-screen"
      icon={Mask}
      title="Welcome Screen"
      subtitle="Display an image while your page loads."
      defaultOpen={defaultOpen}
    >
      <div className="space-y-4">
        <h3 className="text-base text-gray-600">Welcome Screen</h3>

        {image ? (
          <div className="relative">
            <div className="relative aspect-video w-full max-w-md border rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={image.url || "/placeholder.svg"}
                alt="Welcome screen preview"
                fill
                className="object-contain"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                onClick={triggerFileInput}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" className="w-full" onClick={handlePreview}>
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button
                variant="outline"
                className="w-full text-red-600 hover:text-red-600 hover:bg-red-50"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8",
              "hover:bg-gray-50 transition-colors",
              "flex flex-col items-center justify-center text-center",
            )}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Upload className="h-10 w-10 text-gray-400 mb-4" />
            <Button
              variant="default"
              className="bg-black text-white hover:bg-black/90 mb-2"
              onClick={triggerFileInput}
            >
              Select your welcome screen image
            </Button>
            <p className="text-sm text-gray-500">Or drop your files here</p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
        />

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Time (seconds)</label>
          <div className="pt-2">
            <Slider
              value={time}
              onValueChange={setTime}
              min={2.5}
              max={10}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-gray-500">2.5s</span>
              <span className="text-sm text-gray-500">10s</span>
            </div>
          </div>
        </div>
      </div>
    </AccordionForm>
  );
}
