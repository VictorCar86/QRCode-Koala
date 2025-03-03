export interface VideoItem {
  url: string;
  title: string;
  description: string;
}

export interface ButtonItem {
  text: string;
  url: string;
}

export interface SocialNetworkItem {
  name: string;
  icon: string;
  url: string;
}

export interface DesignConfig {
  primaryColor: string;
  secondaryColor: string;
}

export interface FontConfig {
  titleFont: string;
  titleFontSize: string;
  descriptionFont: string;
  descriptionFontSize: string;
}

export interface VideoFormData {
  videos: VideoItem[];
  showDirectly: boolean;
  autoPlay: boolean;
}

export interface VideoInformationData {
  companyName: string;
  pageTitle: string;
  pageDescription: string;
  buttons: ButtonItem[];
}

export interface VideoPageData extends VideoFormData, VideoInformationData {
  socialNetworks: SocialNetworkItem[];
  design: DesignConfig;
  fonts: FontConfig;
}

// Props interfaces
export interface VideoPreviewProps extends Partial<VideoPageData> {
  bgPrimaryColor?: string;
  bgSecondaryColor?: string;
}

export interface VideoFormProps {
  defaultOpen?: boolean;
  required?: boolean;
  formData: VideoFormData;
  onChange: (data: VideoFormData) => void;
}

export interface VideoInformationFormProps {
  defaultOpen?: boolean;
  formData: VideoInformationData;
  onChange: (data: VideoInformationData) => void;
}

export interface DesignFormProps {
  defaultOpen?: boolean;
  design: DesignConfig;
  onChange: (design: DesignConfig) => void;
}

export interface FontsFormProps {
  defaultOpen?: boolean;
  fonts: FontConfig;
  onChange: (fonts: FontConfig) => void;
}

export interface SocialNetworksFormProps {
  defaultOpen?: boolean;
  socialNetworks: SocialNetworkItem[];
  onChange: (socialNetworks: SocialNetworkItem[]) => void;
} 