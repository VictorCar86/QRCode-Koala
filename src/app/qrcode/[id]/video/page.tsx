import { getQRCodeById } from "@/lib/firebase/actions";
import { VideoQR } from "@/lib/types/firebase";
import VideoPreview from "@/components/previews/VideoPreview";

export default async function VideoQRLandingPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { type, data } = await getQRCodeById(id);

  if (type !== "video" || !data) {
    return <div>Invalid QR code</div>;
  }

  const videoData = data as VideoQR;

  return (
    <VideoPreview
      videos={videoData.videos}
      bgPrimaryColor={videoData.design.primaryColor}
      bgSecondaryColor={videoData.design.secondaryColor}
      companyName={videoData.companyName}
      pageTitle={videoData.pageTitle}
      pageDescription={videoData.pageDescription}
      // buttons={videoData.buttons}
      // socialNetworks={videoData.socialNetworks}
      fonts={videoData.fonts}
    />
  );
}
