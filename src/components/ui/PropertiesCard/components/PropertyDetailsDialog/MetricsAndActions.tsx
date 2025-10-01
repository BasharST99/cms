"use client";

import type { ReactNode } from "react";
import { Calendar, Mail, Bed, Bath, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PropertyCardData as Property } from "@/types/components";

type MetricsAndActionsProps = {
  property: Property;
  pricePerSqft: string;
};

export function MetricsAndActions({ property, pricePerSqft }: MetricsAndActionsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
        <MetricCard icon={<Bed className="h-6 w-6 text-[#0B3557]" />} label="Bedrooms" value={property.beds} />
        <MetricCard icon={<Bath className="h-6 w-6 text-[#0B3557]" />} label="Bathrooms" value={property.baths} />
        <MetricCard icon={<Maximize2 className="h-6 w-6 text-[#0B3557]" />} label="Sq Ft" value={property.sqft} />

        <div className="p-3">
          <div className="mb-2 text-3xl font-bold text-[#0B3557]">{property.price}</div>
          <div className="text-lg text-gray-600">{pricePerSqft}</div>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Tour
          </Button>
          <Button variant="outline" className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Contact Agent
          </Button>
        </div>
      </div>
    </div>
  );
}

type MetricCardProps = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

function MetricCard({ icon, label, value }: MetricCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-gray-50 p-3">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
        {icon}
      </div>
      <div className="font-semibold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
