import { z } from "zod";

// Base QR Code type that all QR types will extend
export interface BaseQRCode {
  id: string;
  name: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  qrImageUrl: string;
  scans: number;
}

// Schema for base QR validation
export const baseQRSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  type: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  qrImageUrl: z.string().url(),
  scans: z.number(),
});

// Specific QR type interfaces
export interface WebsiteQR extends BaseQRCode {
  websiteURL: string;
}

export interface WifiQR extends BaseQRCode {
  networkName: string;
  password: string;
  encryption: string;
}

export interface VideoQR extends BaseQRCode {
  videos: {
    url: string;
    title: string;
    description: string;
  }[];
  showDirectly: boolean;
  autoPlay: boolean;
  companyName: string;
  pageTitle: string;
  pageDescription: string;
  design: {
    primaryColor: string;
    secondaryColor: string;
  };
  fonts: {
    titleFont: string;
    titleFontSize: string;
    descriptionFont: string;
    descriptionFontSize: string;
  };
  buttons: {
    text: string;
    url: string;
  }[];
  socialNetworks: {
    name: string;
    icon: string;
    url: string;
  }[];
}

export interface ApplicationQR extends BaseQRCode {
  appInfo: {
    appName: string;
    appDescription: string;
    appIcon: string;
    website: string;
    developer: string;
  };
  platformLinks: {
    platform: string;
    url: string;
  }[];
  design: {
    primaryColor: string;
    secondaryColor: string;
  };
  fonts: {
    titleFont: string;
    titleFontSize: string;
    descriptionFont: string;
    descriptionFontSize: string;
  };
} 