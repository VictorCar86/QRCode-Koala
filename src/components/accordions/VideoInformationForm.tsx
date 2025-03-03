"use client";

import { Info, Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AccordionForm from "@/components/ui/accordion-form";
import { VideoInformationFormProps } from "@/lib/types/video";

export default function VideoInformationForm({
  defaultOpen,
  formData,
  onChange,
}: VideoInformationFormProps) {
  const handleAddButton = () => {
    onChange({
      ...formData,
      buttons: [...formData.buttons, { text: "", url: "" }],
    });
  };

  const handleRemoveButton = (index: number) => {
    const newButtons = [...formData.buttons];
    newButtons.splice(index, 1);
    onChange({
      ...formData,
      buttons: newButtons,
    });
  };

  const handleButtonChange = (index: number, field: "text" | "url", value: string) => {
    const newButtons = [...formData.buttons];
    newButtons[index] = { ...newButtons[index], [field]: value };
    onChange({
      ...formData,
      buttons: newButtons,
    });
  };

  return (
    <AccordionForm
      id="video-information"
      icon={Info}
      title="Video information"
      subtitle="Add some context to your video page."
      defaultOpen={defaultOpen}
    >
      <div className="space-y-4">
        <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
          <Label htmlFor="company" className="text-sm text-gray-600 mb-2 block">
            Company
          </Label>
          <Input
            id="company"
            placeholder="E.g. My Company"
            value={formData.companyName}
            onChange={(e) => onChange({ ...formData, companyName: e.target.value })}
            className="bg-white"
          />
        </div>

        <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
          <Label htmlFor="video-title" className="text-sm text-gray-600 mb-2 block">
            Video title
          </Label>
          <Input
            id="video-title"
            placeholder="E.g. My Video"
            value={formData.pageTitle}
            onChange={(e) => onChange({ ...formData, pageTitle: e.target.value })}
            className="bg-white"
          />
        </div>

        <div className="bg-gray-100 border border-gray-300 p-3 rounded-md">
          <Label htmlFor="description" className="text-sm text-gray-600 mb-2 block">
            Description
          </Label>
          <Textarea
            id="description"
            placeholder="E.g. Here is a video about..."
            value={formData.pageDescription}
            onChange={(e) => onChange({ ...formData, pageDescription: e.target.value })}
            rows={4}
            className="bg-white"
          />
        </div>

        {formData.buttons.map((button, index) => (
          <div key={index} className="bg-gray-100 border border-gray-300 p-3 rounded-md">
            <div className="grid grid-cols-[1fr,1fr,auto] gap-4">
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">
                  Button Text <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="E.g. View images"
                  value={button.text}
                  onChange={(e) => handleButtonChange(index, "text", e.target.value)}
                  className="bg-white"
                />
              </div>
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">Button URL</Label>
                <Input
                  placeholder="E.g. https://"
                  value={button.url}
                  onChange={(e) => handleButtonChange(index, "url", e.target.value)}
                  className="bg-white"
                />
              </div>
              <div className="flex items-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveButton(index)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full" onClick={handleAddButton}>
          <Plus className="h-4 w-4 mr-2" />
          Add Button
        </Button>
      </div>
    </AccordionForm>
  );
}
