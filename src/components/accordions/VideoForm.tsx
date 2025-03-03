"use client";

import type React from "react";
import { Play, ChevronUp, ChevronDown, Trash2, Plus } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import AccordionForm from "@/components/ui/accordion-form";
import { VideoFormProps, VideoItem } from "@/lib/types/video";

export default function VideoForm({
  defaultOpen,
  required,
  formData,
  onChange,
}: VideoFormProps) {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const handleAddVideo = () => {
    if (!youtubeUrl) return;

    const videoId = youtubeUrl.split("v=")[1]?.split("&")[0];
    if (!videoId) return;

    const newVideo: VideoItem = {
      url: youtubeUrl,
      title: "Video " + (formData.videos.length + 1),
      description: "",
    };

    onChange({
      ...formData,
      videos: [...formData.videos, newVideo],
    });
    setYoutubeUrl("");
  };

  const handleRemoveVideo = (url: string) => {
    onChange({
      ...formData,
      videos: formData.videos.filter((video) => video.url !== url),
    });
  };

  const handleMoveVideo = (url: string, direction: "up" | "down") => {
    const index = formData.videos.findIndex((video) => video.url === url);
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === formData.videos.length - 1)
    )
      return;

    const newVideos = [...formData.videos];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    const temp = newVideos[index];
    newVideos[index] = newVideos[newIndex];
    newVideos[newIndex] = temp;

    onChange({
      ...formData,
      videos: newVideos,
    });
  };

  const handleDescriptionChange = (url: string, description: string) => {
    onChange({
      ...formData,
      videos: formData.videos.map((video) =>
        video.url === url ? { ...video, description } : video,
      ),
    });
  };

  const handleShowDirectlyChange = (checked: boolean) => {
    onChange({
      ...formData,
      showDirectly: checked,
    });
  };

  const handleAutoPlayChange = (checked: boolean) => {
    onChange({
      ...formData,
      autoPlay: checked,
    });
  };

  return (
    <AccordionForm
      id="video"
      icon={Play}
      title="Video"
      subtitle="Add one or more videos to your page."
      isRequired={required}
      defaultOpen={defaultOpen}
    >
      <div className="space-y-4">
        <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
          <Label htmlFor="youtube-url" className="text-base text-gray-600">
            YouTube Video URL (Only YouTube Allowed)
          </Label>
          <div className="flex gap-2 mt-1">
            <Input
              id="youtube-url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="bg-gray-50 flex-1"
            />
            <Button
              onClick={handleAddVideo}
              className="bg-gray-600 text-white hover:bg-gray-700"
            >
              <Plus className="h-4 w-4 mr-1" /> Add Video
            </Button>
          </div>
        </div>

        {formData.videos.map((video, index) => (
          <div
            key={video.url}
            className="bg-gray-100 border border-gray-300 p-3 rounded-md"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">{video.title}</h3>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleMoveVideo(video.url, "up")}
                  disabled={index === 0}
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleMoveVideo(video.url, "down")}
                  disabled={index === formData.videos.length - 1}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveVideo(video.url)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.url.split("v=")[1]?.split("&")[0]}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <Textarea
              placeholder="Add a description of your video"
              value={video.description}
              onChange={(e) => handleDescriptionChange(video.url, e.target.value)}
              className="bg-gray-50 mb-3"
            />
          </div>
        ))}

        <div className="space-y-2">
          <div className="flex items-center space-x-2 bg-gray-100 border border-gray-300 p-3 rounded-md">
            <Checkbox
              id="show-directly"
              checked={formData.showDirectly}
              onCheckedChange={(checked) => handleShowDirectlyChange(checked as boolean)}
            />
            <Label htmlFor="show-directly">Show video directly</Label>
          </div>

          <div className="flex items-center space-x-2 bg-gray-100 border border-gray-300 p-3 rounded-md">
            <Checkbox
              id="auto-play"
              checked={formData.autoPlay}
              onCheckedChange={(checked) => handleAutoPlayChange(checked as boolean)}
            />
            <Label htmlFor="auto-play">Auto play first video</Label>
          </div>
        </div>
      </div>
    </AccordionForm>
  );
}
