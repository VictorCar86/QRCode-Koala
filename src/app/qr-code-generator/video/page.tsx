"use client";

import { useState } from "react";
import { z } from "zod";
import QRContentConfig from "@/components/QRContentConfig";
import QRNameForm from "@/components/accordions/QRNameForm";
import VideoPreview from "@/components/previews/VideoPreview";
import VideoForm from "@/components/accordions/VideoForm";
import VideoInformationForm from "@/components/accordions/VideoInformationForm";
import FontsForm from "@/components/accordions/FontsForm";
import SocialNetworksForm from "@/components/accordions/SocialNetworksForm";
import DesignForm from "@/components/accordions/DesignForm";
import {
  VideoPageData,
  VideoItem,
  ButtonItem,
  SocialNetworkItem,
  DesignConfig,
  FontConfig,
} from "@/lib/types/video";
import { createQRCode } from "@/lib/firebase/actions";
import { VideoQR } from "@/lib/types/firebase";
// import { useRouter } from "next/navigation";

// Validation schemas
const videoSchema = z.object({
  url: z.string().url("Must be a valid URL"),
  title: z.string(),
  description: z.string(),
});

const buttonSchema = z.object({
  text: z.string().min(1, "Button text is required"),
  url: z.string().url("Must be a valid URL"),
});

const socialNetworkSchema = z.object({
  name: z.string().min(1, "Name is required"),
  icon: z.string().min(1, "Icon is required"),
  url: z.string().url("Must be a valid URL"),
});

const videoPageSchema = z.object({
  videos: z.array(videoSchema),
  showDirectly: z.boolean(),
  autoPlay: z.boolean(),
  companyName: z.string(),
  pageTitle: z.string(),
  pageDescription: z.string(),
  buttons: z.array(buttonSchema),
  socialNetworks: z.array(socialNetworkSchema),
  design: z.object({
    primaryColor: z.string(),
    secondaryColor: z.string(),
  }),
  fonts: z.object({
    titleFont: z.string(),
    titleFontSize: z.string(),
    descriptionFont: z.string(),
    descriptionFontSize: z.string(),
  }),
});

export const defaultFormData: VideoPageData = {
  videos: [],
  showDirectly: false,
  autoPlay: false,
  companyName: "",
  pageTitle: "",
  pageDescription: "",
  buttons: [],
  socialNetworks: [],
  design: {
    primaryColor: "#f5902e",
    secondaryColor: "#f5902e",
  },
  fonts: {
    titleFont: "",
    titleFontSize: "",
    descriptionFont: "",
    descriptionFontSize: "",
  },
};

export default function VideoPage() {
  const [formData, setFormData] = useState<VideoPageData>(defaultFormData);
  const [qrName, setQrName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  console.log("🚀 ~ VideoPage ~ isCreating:", isCreating);
  // const router = useRouter();

  // Separate validation from QR code creation
  const validateForm = (data: VideoPageData): boolean => {
    try {
      videoPageSchema.parse(data);
      setIsFormValid(true);
      return true;
    } catch {
      setIsFormValid(false);
      return false;
    }
  };

  // Handle QR code creation separately
  const handleCreateQRCode = async (data: VideoPageData) => {
    setIsCreating(true);
    try {
      const { qrCodeUrl } = await createQRCode<VideoQR>({
        type: "video",
        name: data.pageTitle || "Untitled Video QR",
        videos: data.videos,
        showDirectly: data.showDirectly,
        autoPlay: data.autoPlay,
        companyName: data.companyName,
        pageTitle: data.pageTitle,
        pageDescription: data.pageDescription,
        design: data.design,
        fonts: data.fonts,
        // buttons: data.buttons,
        // socialNetworks: data.socialNetworks,
      });

      setQrCodeValue(qrCodeUrl);
      return qrCodeUrl;
    } catch (error) {
      console.error("Error creating video QR:", error);
      setQrCodeValue(""); // Reset on error
      throw error; // Rethrow to handle in the component
    } finally {
      setIsCreating(false);
    }
  };

  // Modify the handlers to use validation only
  const handleVideoFormChange = async (data: {
    videos: VideoItem[];
    showDirectly: boolean;
    autoPlay: boolean;
  }) => {
    const newFormData = { ...formData, ...data };
    const isValid = validateForm(newFormData);
    setFormData(newFormData);

    if (isValid) {
      try {
        await handleCreateQRCode(newFormData);
      } catch (error) {
        // Handle error (maybe show a toast notification)
        console.error("Failed to update QR code:", error);
      }
    }
  };

  const handleVideoInfoChange = async (data: {
    companyName: string;
    pageTitle: string;
    pageDescription: string;
    buttons: ButtonItem[];
  }) => {
    const newFormData = { ...formData, ...data };
    const isValid = validateForm(newFormData);
    setFormData(newFormData);

    if (isValid) {
      try {
        await handleCreateQRCode(newFormData);
      } catch (error) {
        console.error("Failed to update QR code:", error);
      }
    }
  };

  const handleSocialNetworksChange = async (socialNetworks: SocialNetworkItem[]) => {
    const newFormData = { ...formData, socialNetworks };
    const isValid = validateForm(newFormData);
    setFormData(newFormData);

    if (isValid) {
      try {
        await handleCreateQRCode(newFormData);
      } catch (error) {
        console.error("Failed to update QR code:", error);
      }
    }
  };

  const handleDesignChange = async (design: DesignConfig) => {
    const newFormData = { ...formData, design };
    const isValid = validateForm(newFormData);
    setFormData(newFormData);

    if (isValid) {
      try {
        await handleCreateQRCode(newFormData);
      } catch (error) {
        console.error("Failed to update QR code:", error);
      }
    }
  };

  const handleFontsChange = async (fonts: FontConfig) => {
    const newFormData = { ...formData, fonts };
    const isValid = validateForm(newFormData);
    setFormData(newFormData);

    if (isValid) {
      try {
        await handleCreateQRCode(newFormData);
      } catch (error) {
        console.error("Failed to update QR code:", error);
      }
    }
  };

  const PreviewComponent = () => (
    <VideoPreview
      videos={formData.videos}
      bgPrimaryColor={formData.design.primaryColor}
      bgSecondaryColor={formData.design.secondaryColor}
      companyName={formData.companyName}
      pageTitle={formData.pageTitle}
      pageDescription={formData.pageDescription}
      buttons={formData.buttons}
      socialNetworks={formData.socialNetworks}
      fonts={formData.fonts}
    />
  );

  // Generate QR code value based on form data
  // const generateQRValue = (data: VideoPageData) => {
  //   const qrData = {
  //     type: "video",
  //     ...data,
  //   };
  //   // console.log("🚀 ~ generateQRValue ~ qrData:", qrData);
  //   return JSON.stringify(qrData);
  // };

  return (
    <QRContentConfig
      PreviewerComponent={PreviewComponent}
      isFormValid={isFormValid}
      QRCodeValue={qrCodeValue}
      isCreating={isCreating}
    >
      <VideoForm
        defaultOpen
        required
        formData={{
          videos: formData.videos,
          showDirectly: formData.showDirectly,
          autoPlay: formData.autoPlay,
        }}
        onChange={handleVideoFormChange}
      />
      <DesignForm defaultOpen design={formData.design} onChange={handleDesignChange} />
      <VideoInformationForm
        defaultOpen
        formData={{
          companyName: formData.companyName,
          pageTitle: formData.pageTitle,
          pageDescription: formData.pageDescription,
          buttons: formData.buttons,
        }}
        onChange={handleVideoInfoChange}
      />
      <SocialNetworksForm
        defaultOpen
        socialNetworks={formData.socialNetworks}
        onChange={handleSocialNetworksChange}
      />
      <FontsForm fonts={formData.fonts} onChange={handleFontsChange} />
      <QRNameForm qrName={qrName} onQrNameChange={setQrName} />
    </QRContentConfig>
  );
}
