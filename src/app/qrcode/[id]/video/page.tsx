import { getQRCodeById } from "@/lib/firebase/actions";
import { VideoQR } from "@/lib/types/firebase";
import VideoPreview from "@/components/previews/VideoPreview";
import QRCodePreviewer from "@/components/previews/QRCodePreviewer";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function VideoQRLandingPage({ params }: Props) {
  const { id } = await params;
  const { type, data } = await getQRCodeById(id);

  if (type !== "video" || !data) {
    return <div>Invalid QR code</div>;
  }

  console.log("🚀 ~ VideoQRLandingPage ~ data:", data);

  const videoData = data as VideoQR;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <QRCodePreviewer showOnMobile noPhone>
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
      </QRCodePreviewer>
    </main>
  );
}
