"use client";

import { useState } from "react";
import QRContentConfig from "@/components/QRContentConfig";
import WifiPreview from "@/components/previews/WifiPreview";
import QRNameForm from "@/components/accordions/QRNameForm";
import WiFiInfoForm, { wifiInfoSchema } from "@/components/accordions/WiFiInfoForm";

export default function WifiPage() {
  const [wifiInfo, setWifiInfo] = useState({
    networkName: "",
    password: "",
    encryption: "",
  });
  const [qrName, setQrName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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

  return (
    <QRContentConfig
      PreviewerComponent={PreviewComponent}
      isFormValid={isFormValid}
      QRCodeValue={`WIFI:S:${wifiInfo.networkName};T:${wifiInfo.encryption};P:${wifiInfo.password};;`}
    >
      <WiFiInfoForm wifiInfo={wifiInfo} onWifiInfoChange={handleWifiInfoChange} />
      <QRNameForm qrName={qrName} onQrNameChange={setQrName} />
    </QRContentConfig>
  );
}
