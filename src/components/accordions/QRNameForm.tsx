"use client";

import { QrCode } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import AccordionForm from "@/components/ui/accordion-form";

interface QRNameFormProps {
  qrName: string;
  onQrNameChange: (name: string) => void;
}

export default function QRNameForm({ qrName, onQrNameChange }: QRNameFormProps) {
  return (
    <AccordionForm
      id="qr-name"
      icon={QrCode}
      title="Name of the QR Code"
      subtitle="Give your QR code a name."
    >
      <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
        <Label
          htmlFor="qr-name"
          className="text-gray-500 mb-2 text-sm break-words font-semibold"
          title="QR Name"
        >
          QR Name
        </Label>
        <Input
          id="qr-name"
          placeholder="E.g My first QR code"
          value={qrName}
          onChange={(e) => onQrNameChange(e.target.value)}
          className="bg-gray-50"
        />
      </div>
    </AccordionForm>
  );
}
