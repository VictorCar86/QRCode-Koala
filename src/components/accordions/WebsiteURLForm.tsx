"use client";

import { Globe } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AccordionForm from "@/components/ui/accordion-form";
import { z } from "zod";
import { useState } from "react";

// Validation schema
export const websiteURLSchema = z.object({
  websiteURL: z
    .string()
    .url("Please enter a valid URL")
    .min(1, "Website URL is required"),
});

interface WebsiteURLFormProps {
  websiteURL: string;
  onWebsiteURLChange: (url: string) => void;
}

export default function WebsiteURLForm({
  websiteURL,
  onWebsiteURLChange,
}: WebsiteURLFormProps) {
  // Track if field has been touched (focused and then blurred)
  const [touched, setTouched] = useState(false);

  // Validate field
  const validateField = () => {
    try {
      websiteURLSchema.parse({ websiteURL });
      return { success: true, error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { success: false, error: error.errors[0]?.message };
      }
      return { success: false, error: "Invalid input" };
    }
  };

  const handleBlur = () => {
    setTouched(true);
  };

  // Get validation state for the field
  const getFieldError = () => {
    if (!touched) return null;
    const validation = validateField();
    return validation.error;
  };

  return (
    <AccordionForm
      id="website-url"
      icon={Globe}
      title="Website Information"
      subtitle="Enter the URL of the website you want to link to."
      defaultOpen
      isRequired
    >
      <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
        <Label
          htmlFor="website-url"
          className="text-gray-500 mb-2 text-sm break-words font-semibold"
          title="Website URL"
        >
          URL <span className="text-red-500">*</span>
        </Label>
        <Input
          id="website-url"
          placeholder="https://website.com"
          value={websiteURL}
          onChange={(e) => onWebsiteURLChange(e.target.value)}
          onBlur={handleBlur}
          className={`bg-gray-50 ${getFieldError() ? "border-red-500 border-2" : ""}`}
        />
        {getFieldError() && (
          <p className="mt-1 text-red-600 text-xs">{getFieldError()}</p>
        )}
      </div>
    </AccordionForm>
  );
}
