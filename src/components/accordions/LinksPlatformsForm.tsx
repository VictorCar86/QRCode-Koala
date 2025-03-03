"use client";

import { Link2 } from "lucide-react";
import Image from "next/image";
import AccordionForm from "@/components/ui/accordion-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlatformLink } from "@/lib/types/application";

export interface Platform {
  id: string;
  name: string;
  icon: string;
  placeholder: string;
  url: string;
}

export const platformsForLinks: Platform[] = [
  {
    id: "google",
    name: "Google Play",
    icon: "https://www.qrcode-koala.com/svg/apps/google.svg",
    placeholder: "https://play.google.com/store/apps/details?id=com.example.app",
    url: "",
  },
  {
    id: "apple",
    name: "App Store",
    icon: "https://www.qrcode-koala.com/svg/apps/app_store.svg",
    placeholder: "https://apps.apple.com/us/app/example-app/id123456789",
    url: "",
  },
  {
    id: "amazon",
    name: "Amazon Appstore",
    icon: "https://www.qrcode-koala.com/svg/apps/amazon.svg",
    placeholder: "https://www.amazon.com/gp/mas/dl/android?p=com.example.app",
    url: "",
  },
];

interface PlatformLinksFormProps {
  defaultOpen?: boolean;
  platformLinks: PlatformLink[];
  onChange: (links: PlatformLink[]) => void;
}

export default function PlatformLinksForm({
  defaultOpen,
  platformLinks,
  onChange,
}: PlatformLinksFormProps) {
  const handleAddPlatform = (platformId: string) => {
    if (!platformLinks.find((p) => p.platform === platformId)) {
      onChange([
        ...platformLinks,
        {
          platform: platformId,
          url: "",
        },
      ]);
    }
  };

  const handleRemovePlatform = (platformId: string) => {
    onChange(platformLinks.filter((p) => p.platform !== platformId));
  };

  const handleUrlChange = (platformId: string, url: string) => {
    onChange(
      platformLinks.map((platform) =>
        platform.platform === platformId ? { ...platform, url } : platform,
      ),
    );
  };

  return (
    <AccordionForm
      id="platform-links"
      icon={Link2}
      title="Links to the Different Platforms"
      subtitle="Link your app to different app stores."
      defaultOpen={defaultOpen}
    >
      <div className="space-y-4">
        <h3 className="text-base font-medium">
          Choose at least one store below and add a link to your app
        </h3>

        {platformLinks.length === 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {platformsForLinks.map((platform) => (
              <Button
                key={platform.id}
                variant="outline"
                className="h-auto py-6 flex flex-col items-center gap-2"
                onClick={() => handleAddPlatform(platform.id)}
              >
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span>{platform.name.split(" ")[0]}</span>
              </Button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {platformLinks.map((link) => {
              const platform = platformsForLinks.find((p) => p.id === link.platform);
              if (!platform) return null;

              return (
                <div
                  key={link.platform}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0">
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        width={48}
                        height={48}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex-grow">
                      <Label className="text-base text-gray-600">
                        {platform.name} <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex gap-2 mt-1">
                        <Input
                          placeholder={platform.placeholder}
                          value={link.url}
                          onChange={(e) => handleUrlChange(link.platform, e.target.value)}
                          className="flex-grow"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleRemovePlatform(link.platform)}
                          className="flex-shrink-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <span className="sr-only">Remove {platform.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {platformLinks.length < platformsForLinks.length && (
              <div className="grid grid-cols-3 gap-4">
                {platformsForLinks
                  .filter((p) => !platformLinks.find((link) => link.platform === p.id))
                  .map((platform) => (
                    <Button
                      key={platform.id}
                      variant="outline"
                      className="h-auto py-6 flex flex-col items-center gap-2"
                      onClick={() => handleAddPlatform(platform.id)}
                    >
                      <Image
                        src={platform.icon}
                        alt={platform.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                      <span>{platform.name.split(" ")[0]}</span>
                    </Button>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </AccordionForm>
  );
}
