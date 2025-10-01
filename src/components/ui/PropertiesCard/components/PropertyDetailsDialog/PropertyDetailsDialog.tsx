"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import type { PropertyCardData as Property } from "@/types/components";
import {
  computeImageUrls,
  computePricePerSqft,
  deriveCityMeta,
  extractFeatureList,
  fetchPropertyDetailsById,
  fetchRelatedProperties,
  RELATED_CARD_FIELDS,
  resolveAreaLabel,
  resolveCover,
} from "./helpers";
import { MediaCollage } from "./MediaCollage";
import { MetricsAndActions } from "./MetricsAndActions";
import { FeaturesSection } from "./FeaturesSection";
import { HighlightsSection } from "./HighlightsSection";
import { RelatedPropertiesSection } from "./RelatedPropertiesSection";
import { ContactForm } from "./ContactForm";

type PropertyDetailsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  property: Property;
  areaLabel: string;
  pricePerSqft: string;
  cover: string;
  imageUrls: string[];
  isLoading: boolean;
  error: string | null;
  onOpenLightbox: (index?: number) => void;
  features: string[];
  highlights: string[];
  onPropertyChange?: (property: Property) => void;
};

export function PropertyDetailsDialog({
  open,
  onOpenChange,
  property,
  areaLabel,
  pricePerSqft,
  cover,
  imageUrls,
  isLoading,
  error,
  onOpenLightbox,
  features,
  highlights,
  onPropertyChange,
}: PropertyDetailsDialogProps) {
  const [activeProperty, setActiveProperty] = useState<Property>(property);
  const [relatedSelectionId, setRelatedSelectionId] = useState<Property["id"] | null>(null);
  const [relatedError, setRelatedError] = useState<string | null>(null);

  useEffect(() => {
    setActiveProperty(property);
  }, [property]);

  useEffect(() => {
    if (!open) {
      setRelatedSelectionId(null);
      setRelatedError(null);
    }
  }, [open]);

  const isOriginalProperty = activeProperty.id === property.id;

  const activeAreaLabel = useMemo(() => {
    if (isOriginalProperty) return areaLabel;
    return resolveAreaLabel(activeProperty);
  }, [areaLabel, activeProperty, isOriginalProperty]);

  const activeCover = useMemo(() => {
    if (isOriginalProperty) return cover;
    return resolveCover(activeProperty, cover);
  }, [activeProperty, cover, isOriginalProperty]);

  const activeImageUrls = useMemo(() => {
    if (isOriginalProperty) return imageUrls;
    return computeImageUrls(activeProperty, activeCover);
  }, [activeProperty, activeCover, imageUrls, isOriginalProperty]);

  const activePricePerSqft = useMemo(() => {
    if (isOriginalProperty) return pricePerSqft;
    return computePricePerSqft(activeProperty);
  }, [activeProperty, isOriginalProperty, pricePerSqft]);

  const activeFeatures = useMemo(() => {
    if (isOriginalProperty) return features;
    return extractFeatureList(activeProperty.properties_list_features);
  }, [activeProperty.properties_list_features, features, isOriginalProperty]);

  const activeHighlights = useMemo(() => {
    if (isOriginalProperty) return highlights;
    return extractFeatureList(activeProperty.properties_list_special);
  }, [activeProperty.properties_list_special, highlights, isOriginalProperty]);

  const activeHighlightTitle =
    activeProperty.what_special ?? (isOriginalProperty ? property.what_special : undefined);
  const activeDescription =
    activeProperty.description ?? (isOriginalProperty ? property.description : undefined);

  const cityMeta = useMemo(() => deriveCityMeta(activeProperty.city_id), [activeProperty.city_id]);

  useEffect(() => {
    setRelatedError(null);
  }, [cityMeta?.value]);

  const relatedQuery = useQuery<Property[], Error>({
    queryKey: ["related-properties", cityMeta?.value ?? null, activeProperty.id],
    enabled: open && Boolean(cityMeta?.value),
    queryFn: async () => {
      if (!cityMeta?.value) return [];

      const params: Record<string, string> = {
        fields: RELATED_CARD_FIELDS,
        limit: "4",
        sort: "-subprice",
      };

      if (cityMeta.type === "id") {
        params["filter[city_id][_eq]"] = cityMeta.value;
      } else {
        params["filter[city_id][name][_eq]"] = cityMeta.value;
      }

      params["filter[id][_neq]"] = String(activeProperty.id);

      const response = await fetchRelatedProperties(params);

      return response
        .filter((item) => String(item.id) !== String(activeProperty.id))
        .slice(0, 3);
    },
    placeholderData: (previousData) => previousData ?? ([] as Property[]),
  });

  const relatedProperties = relatedQuery.data ?? [];

  const handleViewRelated = async (candidate: Property) => {
    if (String(candidate.id) === String(activeProperty.id)) return;

    try {
      setRelatedError(null);
      setRelatedSelectionId(candidate.id);
      const detailed = await fetchPropertyDetailsById(candidate.id);
      setActiveProperty(detailed);
      onPropertyChange?.(detailed);
    } catch (err) {
      console.error("Failed to load related property", err);
      setRelatedError("Unable to load property details. Please try again.");
    } finally {
      setRelatedSelectionId(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-[92vw] max-h-[90vh] overflow-y-auto lg:min-w-[70vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{activeProperty.title}</DialogTitle>
          <DialogDescription>
            View detailed information about this property including features, amenities, and pricing.
          </DialogDescription>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{activeAreaLabel || cityMeta?.label || ""}</span>
          </div>
        </DialogHeader>

        {isLoading ? (
          <div className="py-10 text-center text-gray-500">Loading property details…</div>
        ) : error ? (
          <div className="py-10 text-center text-red-500">{error}</div>
        ) : (
          <div className="space-y-6">
            <MediaCollage
              title={activeProperty.title}
              cover={activeCover}
              imageUrls={activeImageUrls}
              onOpenLightbox={onOpenLightbox}
            />

            <MetricsAndActions property={activeProperty} pricePerSqft={activePricePerSqft} />

            <FeaturesSection features={activeFeatures} />

            <HighlightsSection
              title={activeHighlightTitle}
              highlights={activeHighlights}
              description={activeDescription}
            />

            <RelatedPropertiesSection
              cityName={cityMeta?.label}
              properties={relatedProperties}
              isLoading={relatedQuery.isLoading && !relatedProperties.length}
              hasError={relatedQuery.isError}
              onSelect={handleViewRelated}
              activeId={activeProperty.id}
              loadingId={relatedSelectionId}
              errorMessage={relatedError}
            />

            <ContactForm property={activeProperty} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
