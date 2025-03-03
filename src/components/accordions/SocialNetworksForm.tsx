"use client";

import Image from "next/image";
import { Share2, ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AccordionForm from "@/components/ui/accordion-form";
import { Platform, platforms } from "@/lib/placeholders/platforms";
import { SocialNetworksFormProps, SocialNetworkItem } from "@/lib/types/video";

export default function SocialNetworksForm({
  defaultOpen,
  socialNetworks,
  onChange,
}: SocialNetworksFormProps) {
  const handleAddPlatform = (platform: Platform) => {
    const isAlreadyAdded = socialNetworks.some((link) => link.name === platform.name);
    if (isAlreadyAdded) return;

    const newLink: SocialNetworkItem = {
      name: platform.name,
      icon: platform.icon,
      url: platform.urlPattern || "",
    };

    onChange([...socialNetworks, newLink]);
  };

  const handleRemoveLink = (index: number) => {
    const newLinks = [...socialNetworks];
    newLinks.splice(index, 1);
    onChange(newLinks);
  };

  const handleMoveLink = (index: number, direction: "up" | "down") => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === socialNetworks.length - 1)
    )
      return;

    const newLinks = [...socialNetworks];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    const temp = newLinks[index];
    newLinks[index] = newLinks[newIndex];
    newLinks[newIndex] = temp;
    onChange(newLinks);
  };

  const handleLinkChange = (index: number, field: "url", value: string) => {
    const newLinks = [...socialNetworks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    onChange(newLinks);
  };

  return (
    <AccordionForm
      id="social-networks"
      icon={Share2}
      title="Social Networks"
      subtitle="Add social media links to your page."
      defaultOpen={defaultOpen}
    >
      <div className="space-y-4">
        {socialNetworks.map((link, index) => (
          <div key={index} className="bg-gray-100 border border-gray-300 p-3 rounded-md">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white p-2 flex-shrink-0">
                <Image
                  src={link.icon || "/placeholder.svg"}
                  alt={link.name}
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <Label
                    htmlFor={`url-${index}`}
                    className="text-sm text-gray-600 mb-1 block"
                  >
                    URL <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id={`url-${index}`}
                    value={link.url}
                    onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleMoveLink(index, "up")}
                  disabled={index === 0}
                  className="h-8 w-8"
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleMoveLink(index, "down")}
                  disabled={index === socialNetworks.length - 1}
                  className="h-8 w-8"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveLink(index)}
                  className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-100 border border-gray-300 p-4 rounded-md">
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {platforms.map((platform) => {
              const isAdded = socialNetworks.some((link) => link.name === platform.name);
              return (
                <button
                  key={platform.id}
                  onClick={() => handleAddPlatform(platform)}
                  disabled={isAdded}
                  className={cn(
                    "relative p-2 rounded-lg border bg-white hover:bg-gray-50 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
                    isAdded && "opacity-50 cursor-not-allowed",
                  )}
                >
                  <Image
                    src={platform.icon || "/placeholder.svg"}
                    alt={platform.name}
                    width={32}
                    height={32}
                    className="w-full h-auto"
                  />
                  {isAdded && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 text-white"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AccordionForm>
  );
}
