// Central component-friendly types shared across the app
import type { ComponentType } from "react";

// Contact
export type ServiceOption = { key: string; label: string };

// Property listings (normalized shape used by the grid)
export type NormalizedProperty = {
  id: number | string;
  title: string;
  location: string;
  price: string; // e.g. "$1,234,567"
  beds: number;
  baths: number;
  sqft: number;
  type: string; // apartment | villa | ...
  featured: boolean;
  amenities: string[];
  image: string; // resolved URL
};

export type SortOption = { key: string; label: string };

// Property card item used inside the client view
export type PropertyCardData = NormalizedProperty;

// Our Services cards
export type ServiceIcon = ComponentType<{ className?: string }>;
export type ServiceEntry = {
  icon: ServiceIcon;
  title: string;
  description: string;
  features: string[];
  cta: string;
};

