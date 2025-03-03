import { getQRCodeById } from "@/lib/firebase/actions";
import { ApplicationQR } from "@/lib/types/firebase";
import ApplicationPreview from "@/components/previews/ApplicationPreview";
import QRCodePreviewer from "@/components/previews/QRCodePreviewer";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function VideoQRLandingPage({ params }: Props) {
  const { id } = await params;
  const { type, data } = await getQRCodeById(id);

  if (type !== "application" || !data) {
    return <div>Invalid QR code</div>;
  }

  const videoData = data as ApplicationQR;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <QRCodePreviewer showOnMobile noPhone>
        <ApplicationPreview
          appInfo={videoData.appInfo}
          platformLinks={videoData.platformLinks}
          design={videoData.design}
          fonts={videoData.fonts}
        />
      </QRCodePreviewer>
    </main>
  );
}
