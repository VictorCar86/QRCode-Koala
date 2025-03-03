"use client";

import { useState } from "react";
import QRContentConfig from "@/components/QRContentConfig";
import WifiPreview from "@/components/previews/WifiPreview";
import QRNameForm from "@/components/accordions/QRNameForm";
import WiFiInfoForm, { wifiInfoSchema } from "@/components/accordions/WiFiInfoForm";
import { useQRState } from "@/lib/states/qr-state";
import { createQRCode } from "@/lib/firebase/actions";
import { WifiQR } from "@/lib/types/firebase";

export default function WifiPage() {
  const [wifiInfo, setWifiInfo] = useState({
    networkName: "",
    password: "",
    encryption: "",
  });
  const [qrName, setQrName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { setIsCreating, setQrCodeValue } = useQRState();

  const handleWifiInfoChange = (info: typeof wifiInfo) => {
    validateForm(info);
    setWifiInfo(info);
  };

  const validateForm = (data: typeof wifiInfo) => {
    try {
      wifiInfoSchema.parse(data);
      setIsFormValid(true);
    } catch {
      setIsFormValid(false);
    }
  };

  const PreviewComponent = () => <WifiPreview networkName={wifiInfo.networkName} />;

  const handleCreateQRCode = async () => {
    setIsCreating(true);
    try {
      await createQRCode<WifiQR>({
        type: "wifi",
        name: qrName || wifiInfo.networkName,
        networkName: wifiInfo.networkName,
        password: wifiInfo.password,
        encryption: wifiInfo.encryption,
      });
      setQrCodeValue(
        `WIFI:S:${wifiInfo.networkName};T:${wifiInfo.encryption};P:${wifiInfo.password};;`,
      );
    } catch (error) {
      console.error("Error creating WiFi QR:", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <QRContentConfig
      PreviewerComponent={PreviewComponent}
      isFormValid={isFormValid}
      QRCodeValue={`WIFI:S:${wifiInfo.networkName};T:${wifiInfo.encryption};P:${wifiInfo.password};;`}
      handleCreateQRCode={handleCreateQRCode}
    >
      <WiFiInfoForm wifiInfo={wifiInfo} onWifiInfoChange={handleWifiInfoChange} />
      <QRNameForm qrName={qrName} onQrNameChange={setQrName} />
    </QRContentConfig>
  );
}
