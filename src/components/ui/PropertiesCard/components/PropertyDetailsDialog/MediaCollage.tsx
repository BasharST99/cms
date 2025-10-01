"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type MediaCollageProps = {
  title: string;
  cover: string;
  imageUrls: string[];
  onOpenLightbox: (index?: number) => void;
};

export function MediaCollage({
  title,
  cover,
  imageUrls,
  onOpenLightbox,
}: MediaCollageProps) {
  const [primary, ...rest] = imageUrls;

  return (
    <div className="w-full space-y-4">
      <div className="grid h-[460px] grid-cols-3 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        <div className="relative row-span-2 overflow-hidden">
          <Image
            src={primary || cover}
            alt={title}
            fill
            sizes="(max-width:1024px) 100vw, 900px"
            className="object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {rest.slice(0, 4).map((src, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onOpenLightbox(index + 1)}
            className="relative overflow-hidden"
          >
            <Image
              src={src || cover}
              alt={`${title} photo ${index + 2}`}
              fill
              sizes="(max-width:1024px) 100vw, 300px"
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <Button variant="outline" className="w-full" onClick={() => onOpenLightbox(0)}>
          View All Photos
        </Button>
      </motion.div>
    </div>
  );
}
