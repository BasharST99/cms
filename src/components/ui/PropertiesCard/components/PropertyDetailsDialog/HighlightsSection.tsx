"use client";

import { ArrowUpRight } from "lucide-react";

type HighlightsSectionProps = {
  title?: string | null;
  highlights: string[];
  description?: string;
};

export function HighlightsSection({
  title,
  highlights,
  description,
}: HighlightsSectionProps) {
  if (!title && !highlights.length && !description) return null;

  return (
    <section className="space-y-4">
      {title && <h4 className="font-semibold">{title}</h4>}
      {!!highlights.length && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <ArrowUpRight className="h-4 w-4 text-blue-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
      {description && (
        <div>
          <h5 className="mb-2 font-semibold">Description</h5>
          <p className="whitespace-pre-line text-gray-700">
            {description || "No description available."}
          </p>
        </div>
      )}
    </section>
  );
}
