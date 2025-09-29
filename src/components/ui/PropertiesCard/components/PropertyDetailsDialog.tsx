import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Bath,
  Bed,
  Calendar,
  CheckCircle2,
  Mail,
  MapPin,
  Maximize2,
} from "lucide-react";

import type { PropertyCardData as Property } from "@/types/components";

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
}: PropertyDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto min-w-[92vw] lg:min-w-[70vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{property.title}</DialogTitle>
          <DialogDescription>
            View detailed information about this property including features,
            amenities, and pricing.
          </DialogDescription>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{areaLabel}</span>
          </div>
        </DialogHeader>

        {isLoading ? (
          <div className="py-10 text-center text-gray-500">Loading property details…</div>
        ) : error ? (
          <div className="py-10 text-center text-red-500">{error}</div>
        ) : (
          <div className="space-y-6">
            <MediaCollage
              title={property.title}
              cover={cover}
              imageUrls={imageUrls}
              onOpenLightbox={onOpenLightbox}
            />

            <MetricsAndActions
              property={property}
              pricePerSqft={pricePerSqft}
            />

            <FeaturesSection features={features} />
            <HighlightsSection
              title={property.what_special}
              highlights={highlights}
              description={property.description}
            />

            <ContactForm property={property} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

type MediaCollageProps = {
  title: string;
  cover: string;
  imageUrls: string[];
  onOpenLightbox: (index?: number) => void;
};

function MediaCollage({ title, cover, imageUrls, onOpenLightbox }: MediaCollageProps) {
  const [primary, ...rest] = imageUrls;

  return (
    <div className="w-full space-y-4">
      <div className="grid h-[460px] grid-cols-3 grid-rows-2 gap-2 rounded-xl overflow-hidden">
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

type MetricsAndActionsProps = {
  property: Property;
  pricePerSqft: string;
};

function MetricsAndActions({ property, pricePerSqft }: MetricsAndActionsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-5">
        <MetricCard icon={<Bed className="h-6 w-6 text-[#0B3557]" />} label="Bedrooms" value={property.beds} />
        <MetricCard icon={<Bath className="h-6 w-6 text-[#0B3557]" />} label="Bathrooms" value={property.baths} />
        <MetricCard icon={<Maximize2 className="h-6 w-6 text-[#0B3557]" />} label="Sq Ft" value={property.sqft} />
        <div className="p-3">
          <div className="text-3xl font-bold text-[#0B3557] mb-2">{property.price}</div>
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

type FeaturesSectionProps = {
  features: string[];
};

function FeaturesSection({ features }: FeaturesSectionProps) {
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

type HighlightsSectionProps = {
  title?: string | null;
  highlights: string[];
  description?: string;
};

function HighlightsSection({ title, highlights, description }: HighlightsSectionProps) {
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

type ContactFormProps = {
  property: Property;
};

function ContactForm({ property }: ContactFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white p-8 shadow-2xl"
    >
      <h3 className="mb-6 text-2xl font-semibold text-gray-900">
        {property.contact_buyer}
      </h3>
      <p className="mb-6 text-gray-700">{property.conatct_description}</p>
      <form className="space-y-4">
        <FormField label={property.name} type="text" placeholder={property.name || "Your Name"} required />
        <FormField label={property.email} type="email" placeholder={property.email || "Your Email"} required />
        <FormField
          label={property.phone}
          type="tel"
          placeholder={property.phone || "Your Phone Number"}
        />
        <TextareaField label={property.message} placeholder="Your message..." />
        <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90">Send Message</Button>
      </form>
    </motion.div>
  );
}

type FormFieldProps = {
  label?: string | null;
  type: string;
  placeholder: string;
  required?: boolean;
};

function FormField({ label, type, placeholder, required }: FormFieldProps) {
  return (
    <div>
      {label && <p className="mb-1 font-medium">{label}</p>}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3557]"
      />
    </div>
  );
}

type TextareaFieldProps = {
  label?: string | null;
  placeholder: string;
};

function TextareaField({ label, placeholder }: TextareaFieldProps) {
  return (
    <div>
      {label && <p className="mb-1 font-medium">{label}</p>}
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3557]"
      />
    </div>
  );
}
