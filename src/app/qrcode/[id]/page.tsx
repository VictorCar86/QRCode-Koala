import {
  getQRCodeById,
  // incrementQRCodeScans
} from "@/lib/firebase/actions";
import { WebsiteQR } from "@/lib/types/firebase";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function QRCodeRedirectPage({ params }: Props) {
  const { id } = await params;

  try {
    // Get the QR code data
    const { type, data } = await getQRCodeById(id);
    console.log("🚀 ~ QRCodeRedirectPage ~ type:", type);
    console.log("🚀 ~ QRCodeRedirectPage ~ data:", data);

    if (!data) {
      console.log("QR code not found:", id);
      redirect("/404");
      return;
    }

    // try {
    //   // Increment scan count
    //   await incrementQRCodeScans(id);
    // } catch (error) {
    //   // Log the error but don't fail the redirect
    //   console.error("Error incrementing scan count:", error);
    // }

    // Handle different QR code types
    switch (type) {
      case "website":
        const websiteData = data as WebsiteQR;
        redirect(websiteData.websiteURL);
        break;

      case "wifi":
        redirect(`/qrcode/${id}/wifi`);
        break;

      case "video":
        redirect(`/qrcode/${id}/video`);
        break;

      case "application":
        redirect(`/qrcode/${id}/app`);
        break;

      default:
        redirect("/404");
    }
  } catch (error) {
    console.error("Error in QR code redirect:", error);
    redirect("/error");
  }
}
