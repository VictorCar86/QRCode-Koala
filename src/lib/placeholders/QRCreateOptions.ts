import {
  Globe,
  FileText,
  UserSquare,
  List,
  Briefcase,
  Images,
  Video,
  AppWindow,
  Ticket,
  Music,
  FileCode,
  Wifi,
} from "lucide-react";

export type QRCreateOptions = {
  id: string;
  title: string;
  description: string;
  icon: typeof Globe;
};

export const QRCreateOptions: QRCreateOptions[] = [
  {
    id: "website",
    title: "Website",
    description: "Link to any website URL",
    icon: Globe,
  },
  {
    id: "pdf",
    title: "PDF",
    description: "Show a PDF",
    icon: FileText,
  },
  {
    id: "vcard",
    title: "vCard",
    description: "Share your digital business card",
    icon: UserSquare,
  },
  {
    id: "links",
    title: "List of links",
    description: "Share multiple links",
    icon: List,
  },
  {
    id: "business",
    title: "Business",
    description: "Share information about your business",
    icon: Briefcase,
  },
  {
    id: "images",
    title: "Images",
    description: "Share multiple images",
    icon: Images,
  },
  {
    id: "video",
    title: "Video",
    description: "Share a video",
    icon: Video,
  },
  {
    id: "application",
    title: "Application",
    description: "Redirect to an app store",
    icon: AppWindow,
  },
  {
    id: "coupon",
    title: "Coupon",
    description: "Share a coupon",
    icon: Ticket,
  },
  {
    id: "mp3",
    title: "MP3",
    description: "Share an audio file",
    icon: Music,
  },
  {
    id: "menu",
    title: "Menu",
    description: "Create a restaurant menu",
    icon: FileCode,
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description: "Connect to a Wi-Fi network",
    icon: Wifi,
  },
];
