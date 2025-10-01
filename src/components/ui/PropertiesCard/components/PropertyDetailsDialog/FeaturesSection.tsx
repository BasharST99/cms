"use client";

import { CheckCircle2 } from "lucide-react";

type FeaturesSectionProps = {
  features: string[];
};

export function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features.length) return null;

  return (
    <section>
      <h4 className="mb-3 font-semibold">Property Features</h4>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
