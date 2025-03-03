"use client";

import { useState } from "react";
import AppInformationForm from "@/components/accordions/AppInformationForm";
import DesignForm from "@/components/accordions/DesignForm";
import FontsForm from "@/components/accordions/FontsForm";
import PlatformLinksForm from "@/components/accordions/LinksPlatformsForm";
import QRNameForm from "@/components/accordions/QRNameForm";
import ApplicationPreview from "@/components/previews/ApplicationPreview";
import QRContentConfig from "@/components/QRContentConfig";
import {
  ApplicationPageData,
  applicationPageSchema,
  defaultFormData,
} from "@/lib/types/application";
import { useQRState } from "@/lib/states/qr-state";
import { createQRCode } from "@/lib/firebase/actions";
import { ApplicationQR } from "@/lib/types/firebase";

export default function ApplicationQRCodeGenerator() {
  const [formData, setFormData] = useState<ApplicationPageData>(defaultFormData);
  const [qrName, setQrName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { qrCodeValue, setQrCodeValue, setIsCreating } = useQRState();

  const validateForm = (data: ApplicationPageData) => {
    try {
      applicationPageSchema.parse(data);
      setIsFormValid(true);
      return true;
    } catch {
      setIsFormValid(false);
      return false;
    }
  };

  const handleAppInfoChange = (appInfo: ApplicationPageData["appInfo"]) => {
    const newFormData = { ...formData, appInfo };
    validateForm(newFormData);
    setFormData(newFormData);
  };

  const handlePlatformLinksChange = (
    platformLinks: ApplicationPageData["platformLinks"],
  ) => {
    const newFormData = { ...formData, platformLinks };
    validateForm(newFormData);
    setFormData(newFormData);
  };

  const handleDesignChange = (design: ApplicationPageData["design"]) => {
    const newFormData = { ...formData, design };
    validateForm(newFormData);
    setFormData(newFormData);
  };

  const handleFontsChange = (fonts: ApplicationPageData["fonts"]) => {
    const newFormData = { ...formData, fonts };
    validateForm(newFormData);
    setFormData(newFormData);
  };

  const PreviewComponent = () => (
    <ApplicationPreview
      appInfo={formData.appInfo}
      platformLinks={formData.platformLinks}
      design={formData.design}
      fonts={formData.fonts}
    />
  );

  // Generate QR code value based on form data
  const handleCreateQRCode = async () => {
    setIsCreating(true);
    try {
      const { qrCodeUrl } = await createQRCode<ApplicationQR>({
        type: "application",
        name: qrName || formData.appInfo.appName,
        appInfo: formData.appInfo,
        platformLinks: formData.platformLinks,
        design: formData.design,
        fonts: formData.fonts,
      });
      setQrCodeValue(qrCodeUrl);
    } catch (error) {
      console.error("Error creating application QR:", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <QRContentConfig
      PreviewerComponent={PreviewComponent}
      isFormValid={isFormValid}
      QRCodeValue={qrCodeValue}
      handleCreateQRCode={handleCreateQRCode}
    >
      <AppInformationForm
        defaultOpen
        required
        formData={formData.appInfo}
        onChange={handleAppInfoChange}
      />
      <DesignForm defaultOpen design={formData.design} onChange={handleDesignChange} />
      <PlatformLinksForm
        defaultOpen
        platformLinks={formData.platformLinks}
        onChange={handlePlatformLinksChange}
      />
      <FontsForm fonts={formData.fonts} onChange={handleFontsChange} />
      <QRNameForm qrName={qrName} onQrNameChange={setQrName} />
    </QRContentConfig>
  );
}
