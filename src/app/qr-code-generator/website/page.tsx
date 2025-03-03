"use client";

import { useState } from "react";
import QRContentConfig from "@/components/QRContentConfig";
import WebsiteURLForm, { websiteURLSchema } from "@/components/accordions/WebsiteURLForm";
import QRNameForm from "@/components/accordions/QRNameForm";
import WebsitePreview from "@/components/previews/WebsitePreview";
import { useQRState } from "@/lib/states/qr-state";
import { createQRCode } from "@/lib/firebase/actions";
import { WebsiteQR } from "@/lib/types/firebase";
// import { z } from "zod";

export default function WebsitePage() {
  const [websiteURL, setWebsiteURL] = useState("");
  const [qrName, setQrName] = useState("");
  const { setIsCreating, setQrCodeValue } = useQRState();

  const validateForm = (url: string) => {
    try {
      websiteURLSchema.parse({ websiteURL: url });
      return true;
    } catch {
      return false;
    }
  };

  const PreviewComponent = () => <WebsitePreview websiteURL={websiteURL} />;

  const handleCreateQRCode = async () => {
    setIsCreating(true);
    try {
      const { qrCodeUrl } = await createQRCode<WebsiteQR>({
        type: "website",
        name: qrName || websiteURL,
        websiteURL: websiteURL,
      });
      setQrCodeValue(qrCodeUrl);
    } catch (error) {
      console.error("Error creating website QR:", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <QRContentConfig
      PreviewerComponent={PreviewComponent}
      isFormValid={validateForm(websiteURL)}
      QRCodeValue={websiteURL}
      handleCreateQRCode={handleCreateQRCode}
    >
      <WebsiteURLForm websiteURL={websiteURL} onWebsiteURLChange={setWebsiteURL} />
      <QRNameForm qrName={qrName} onQrNameChange={setQrName} />
    </QRContentConfig>
  );
}
