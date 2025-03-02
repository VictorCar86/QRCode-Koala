"use client";

import { Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AccordionForm from "../ui/accordion-form";
import { z } from "zod";
import { useState } from "react";

// Validation schema
export const wifiInfoSchema = z.object({
  networkName: z.string().min(1, "Network name is required"),
  password: z.string().min(1, "Password is required"),
  encryption: z.string().min(1, "Encryption type is required"),
});

type WifiInfo = z.infer<typeof wifiInfoSchema>;

interface WiFiInfoFormProps {
  wifiInfo: WifiInfo;
  onWifiInfoChange: (info: WifiInfo) => void;
}

export default function WiFiInfoForm({ wifiInfo, onWifiInfoChange }: WiFiInfoFormProps) {
  // Track which fields have been touched (focused and then blurred)
  const [touchedFields, setTouchedFields] = useState<Record<keyof WifiInfo, boolean>>({
    networkName: false,
    password: false,
    encryption: false,
  });

  // Validate individual fields
  const validateField = (field: keyof WifiInfo) => {
    try {
      const fieldSchema = wifiInfoSchema.shape[field];
      fieldSchema.parse(wifiInfo[field]);
      return { success: true, error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { success: false, error: error.errors[0]?.message };
      }
      return { success: false, error: "Invalid input" };
    }
  };

  const handleChange = (field: keyof WifiInfo, value: string) => {
    onWifiInfoChange({
      ...wifiInfo,
      [field]: value,
    });
  };

  const handleBlur = (field: keyof WifiInfo) => {
    setTouchedFields((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  // Get validation state for a field
  const getFieldError = (field: keyof WifiInfo) => {
    if (!touchedFields[field]) return null;
    const validation = validateField(field);
    return validation.error;
  };

  return (
    <AccordionForm
      id="wifi"
      icon={Info}
      title="Wi-Fi Information"
      subtitle="Provide your network information."
      defaultOpen
      isRequired
    >
      <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
        <Label
          htmlFor="network-name"
          className="text-gray-500 mb-2 text-sm break-words font-semibold"
          title="Network Name"
        >
          Network Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="network-name"
          placeholder="My Wi-Fi"
          value={wifiInfo.networkName}
          onInput={(e) => handleChange("networkName", e.currentTarget.value)}
          onBlur={() => handleBlur("networkName")}
          className={`bg-gray-50 ${getFieldError("networkName") ? "border-red-500 border-2" : ""}`}
        />
        {getFieldError("networkName") && (
          <p className="mt-1 text-red-600 text-xs">{getFieldError("networkName")}</p>
        )}
      </div>

      <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
        <Label
          htmlFor="password"
          className="text-gray-500 mb-2 text-sm break-words font-semibold"
          title="Password"
        >
          Password <span className="text-red-600">*</span>
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="1234567890"
          value={wifiInfo.password}
          onChange={(e) => handleChange("password", e.target.value)}
          onBlur={() => handleBlur("password")}
          className={`bg-gray-50 ${getFieldError("password") ? "border-red-500 border-2" : ""}`}
        />
        {getFieldError("password") && (
          <p className="mt-1 text-red-600 text-xs">{getFieldError("password")}</p>
        )}
      </div>

      <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
        <Label
          htmlFor="encryption"
          className="text-gray-500 mb-2 text-sm break-words font-semibold"
          title="Encryption Type"
        >
          Encryption Type <span className="text-red-500">*</span>
        </Label>
        <Select
          value={wifiInfo.encryption}
          onValueChange={(value) => handleChange("encryption", value)}
          onOpenChange={(open) => {
            if (!open) handleBlur("encryption");
          }}
        >
          <SelectTrigger
            id="encryption"
            className={`bg-gray-50 ${getFieldError("encryption") ? "border-red-500 border-2" : ""}`}
          >
            <SelectValue placeholder="E.g WEP" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="WPA/WPA2">WPA/WPA2</SelectItem>
            <SelectItem value="WPA3">WPA3</SelectItem>
            <SelectItem value="WEP">WEP</SelectItem>
            <SelectItem value="No Pass">No Pass</SelectItem>
          </SelectContent>
        </Select>
        {getFieldError("encryption") && (
          <p className="mt-1 text-red-600 text-xs">{getFieldError("encryption")}</p>
        )}
      </div>
    </AccordionForm>
  );
}
