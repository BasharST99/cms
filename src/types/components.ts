// Central component-friendly types shared across the app
import type { ComponentType } from "react";

// Contact
export type ServiceOption = { key: string; label: string };

// Property listings (normalized shape used by the grid)
export type NormalizedProperty = {
  id: number | string;
  title: string;
  areas_id?: string | Areas | null;
  price: string; // e.g. "$1,234,567"
  beds: number;
  baths: number;
  sqft: number;
  type: string; // apartment | villa | ...
  featured: boolean;
  amenities?: string[];
  image: string; // resolved URL
  lat?: number;
  lon?: number;
  image_list?: Array<{
    id?: number;
    Properties_list_id?: number;
    directus_files_id?: string; // Directus file UUID
  }>;
  contact_agent_button?: string;
  request_tour_button?: string;
  properties_list_features?: PropertyFeature[];
  description?: string;
  what_special?: string;
  phone?: string;
  email?: string;
  name?: string;
  financing_info?: string;
  disclosure_notice?: string;
  contact_buyer?: string;
  contact_an_agent?: string;
  conatct_description?: string;
  properties_list_special?: PropertyFeature[];
  message?: string;
  
};

export type SortOption = { key: string; label: string };
export type PropertyFeature = {
  item: {
    id: number;
    feature: string;
  };
};

// Property card item used inside the client view
export type PropertyCardData = NormalizedProperty;
export type Areas = {
  id: number | string;
  name: string;
};

// Our Services cards
export type ServiceIcon = ComponentType<{ className?: string }>;
export type ServiceEntry = {
  icon: ServiceIcon;
  title: string;
  description: string;
  features: string[];
  cta: string;
};
