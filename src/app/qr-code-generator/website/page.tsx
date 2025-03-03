"use client";

import { useState } from "react";
import QRContentConfig from "@/components/QRContentConfig";
import WebsiteURLForm, { websiteURLSchema } from "@/components/accordions/WebsiteURLForm";
import QRNameForm from "@/components/accordions/QRNameForm";
import WebsitePreview from "@/components/previews/WebsitePreview";
// import { z } from "zod";

export default function WebsitePage() {
  const [websiteURL, setWebsiteURL] = useState("");
  const [qrName, setQrName] = useState("");

  const validateForm = (url: string) => {
    try {
      websiteURLSchema.parse({ websiteURL: url });
      return true;
    } catch {
      return false;
    }
  };

  const PreviewComponent = () => <WebsitePreview websiteURL={websiteURL} />;

  return (
    <QRContentConfig
      PreviewerComponent={PreviewComponent}
      isFormValid={validateForm(websiteURL)}
      QRCodeValue={websiteURL}
    >
      <WebsiteURLForm websiteURL={websiteURL} onWebsiteURLChange={setWebsiteURL} />
      <QRNameForm qrName={qrName} onQrNameChange={setQrName} />
    </QRContentConfig>
  );
}
