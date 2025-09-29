import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PropertyGalleryDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  propertyTitle: string;
  imageUrls: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function PropertyGalleryDialog({
  open,
  onOpenChange,
  propertyTitle,
  imageUrls,
  activeIndex,
  onSelect,
}: PropertyGalleryDialogProps) {
  const activeImage = imageUrls[activeIndex] ?? imageUrls[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>Photos — {propertyTitle}</DialogTitle>
          <DialogDescription>Click any thumbnail to set as the main image.</DialogDescription>
        </DialogHeader>

        <div className="relative mb-4 h-[420px] w-full overflow-hidden rounded-lg">
          <Image
            src={activeImage}
            alt={`${propertyTitle} photo ${activeIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {imageUrls.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-md ring-2 ${
                index === activeIndex ? "ring-[#0B3557]" : "ring-transparent"
              }`}
            >
              <Image
                src={src}
                alt={`${propertyTitle} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="200px"
              />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
