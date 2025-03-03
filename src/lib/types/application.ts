import { z } from "zod";
import { DesignConfig, FontConfig } from "./video";

export interface PlatformLink {
  platform: string;
  url: string;
}

export interface AppInformation {
  appName: string;
  appDescription: string;
  appIcon: string;
  website: string;
  developer: string;
}

export interface ApplicationPageData {
  appInfo: AppInformation;
  platformLinks: PlatformLink[];
  design: DesignConfig;
  fonts: FontConfig;
}

// Validation schemas
export const platformLinkSchema = z.object({
  platform: z.string().min(1, "Platform is required"),
  url: z.string().url("Must be a valid URL"),
});

export const appInformationSchema = z.object({
  appName: z.string().min(1, "App name is required"),
  appDescription: z.string().min(1, "App description is required"),
  appIcon: z.string().min(1, "App icon is required"),
  website: z.string().url("Must be a valid URL"),
  developer: z.string(),
});

export const applicationPageSchema = z.object({
  appInfo: appInformationSchema,
  platformLinks: z.array(platformLinkSchema),
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

export const defaultFormData: ApplicationPageData = {
  appInfo: {
    appName: "",
    appDescription: "",
    appIcon: "",
    website: "",
    developer: "",
  },
  platformLinks: [],
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