"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { getAssetURL } from "@/lib/directus/client";
import type { PropertyCardData as Property } from "@/types/components";

import { CardMedia } from "./components/CardMedia";
import { CardSummary } from "./components/CardSummary";
import { PropertyDetailsDialog } from "./components/PropertyDetailsDialog";
import { PropertyGalleryDialog } from "./components/PropertyGalleryDialog";

const FALLBACK_IMAGE = "/assets/fallback.png";

type PropertyCardProps = {
  property: Property;
  index: number;
  onFavorite: (id: number | string) => void;
  isFavorite: boolean;
  loadDetails?: () => Promise<Property>;
};

type DetailState = {
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialDetailState: DetailState = {
  isOpen: false,
  isLoading: false,
  error: null,
};

const toImageUrl = (item: unknown): string | null => {
  if (!item) return null;
  if (typeof item === "string") {
    return getAssetURL(item, { width: 1600, quality: 80 });
  }
  if (
    typeof item === "object" &&
    "directus_files_id" in (item as Record<string, unknown>) &&
    (item as { directus_files_id?: string | null }).directus_files_id
  ) {
    return getAssetURL(
      (item as { directus_files_id: string }).directus_files_id,
      {
        width: 1600,
        quality: 80,
      }
    );
  }
  return null;
};

function resolveAreaLabel(property: Property): string {
  if (typeof property.areas_id === "string") return property.areas_id;
  return property.areas_id?.name ?? "";
}

function computePricePerSqft(property: Property): string {
  const numericPrice = Number(String(property.price).replace(/[$,]/g, ""));
  const sqft = Number(property.sqft || 0);
  if (!Number.isFinite(numericPrice) || !Number.isFinite(sqft) || sqft <= 0) {
    return "—";
  }
  const value = Math.round(numericPrice / sqft).toLocaleString();
  return `$${value} per sq ft`;
}

export function PropertyCard({
  property,
  index,
  onFavorite,
  isFavorite,
  loadDetails,
}: PropertyCardProps) {
  const [detailState, setDetailState] =
    useState<DetailState>(initialDetailState);
  const [detailData, setDetailData] = useState<Property | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const displayProperty = detailData ?? property;

  const cover = useMemo(() => {
    return displayProperty.image || property.image || FALLBACK_IMAGE;
  }, [displayProperty.image, property.image]);

  const imageUrls = useMemo(() => {
    const source = displayProperty.image_list ?? property.image_list ?? [];
    if (!Array.isArray(source)) return [cover];
    const urls = source
      .map(toImageUrl)
      .filter((src): src is string => Boolean(src));
    return urls.length > 0 ? urls : [cover];
  }, [displayProperty.image_list, property.image_list, cover]);

  const areaLabel = useMemo(
    () => resolveAreaLabel(displayProperty),
    [displayProperty]
  );
  const pricePerSqft = useMemo(
    () => computePricePerSqft(displayProperty),
    [displayProperty]
  );
  const previewAreaLabel = useMemo(
    () => resolveAreaLabel(property),
    [property]
  );

  const featureList = useMemo(() => {
    return (displayProperty.properties_list_features ?? [])
      .map((entry: any) => entry?.item?.feature)
      .filter(Boolean) as string[];
  }, [displayProperty.properties_list_features]);

  const specialHighlights = useMemo(() => {
    return (displayProperty.properties_list_special ?? [])
      .map((entry: any) => entry?.item?.feature)
      .filter(Boolean) as string[];
  }, [displayProperty.properties_list_special]);

  const handleRelatedSelection = useCallback((next: Property) => {
    setDetailData(next);
  }, []);

  useEffect(() => {
    if (!detailState.isOpen) {
      setDetailState((prev) => ({ ...prev, error: null }));
    }
  }, [detailState.isOpen]);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [imageUrls.length]);

  const handleToggleFavorite = useCallback(() => {
    onFavorite(property.id);
  }, [onFavorite, property.id]);

  const handleViewDetails = useCallback(async () => {
    setDetailState((prev) => ({ ...prev, isOpen: true }));

    if (!loadDetails || detailData) return;

    const needsFetch =
      !Array.isArray(property.image_list) || property.image_list.length === 0;
    if (!needsFetch) return;

    try {
      setDetailState({ isOpen: true, isLoading: true, error: null });
      const fullData = await loadDetails();
      setDetailData(fullData);
      setDetailState({ isOpen: true, isLoading: false, error: null });
    } catch (error) {
      setDetailState({
        isOpen: true,
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to load property details.",
      });
    }
  }, [detailData, loadDetails, property.image_list]);

  const handleDetailVisibility = useCallback((open: boolean) => {
    setDetailState((prev) => ({ ...prev, isOpen: open }));
  }, []);

  const openLightbox = useCallback((index = 0) => {
    setActiveImageIdx(index);
    setLightboxOpen(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="
    h-full grid grid-rows-[auto_1fr]
    bg-white rounded-2xl overflow-hidden
    shadow-lg hover:shadow-xl transition-all duration-300 group
  "
      >
        <CardMedia
          property={property}
          cover={cover}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
          onQuickLook={handleViewDetails}
        />

        <CardSummary
          property={property}
          areaLabel={previewAreaLabel}
          onViewDetails={handleViewDetails}
        />
      </motion.div>

      <PropertyDetailsDialog
        open={detailState.isOpen}
        onOpenChange={handleDetailVisibility}
        property={displayProperty}
        areaLabel={areaLabel}
        pricePerSqft={pricePerSqft}
        cover={cover}
        imageUrls={imageUrls}
        isLoading={detailState.isLoading}
        error={detailState.error}
        onOpenLightbox={openLightbox}
        features={featureList}
        highlights={specialHighlights}
        onPropertyChange={handleRelatedSelection}
      />

      <PropertyGalleryDialog
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        propertyTitle={displayProperty.title}
        imageUrls={imageUrls}
        activeIndex={activeImageIdx}
        onSelect={setActiveImageIdx}
      />
    </>
  );
}

export default PropertyCard;
