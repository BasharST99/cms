"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import svgPaths from "@/imports/svg-nby02nlaqg";
import { getAssetURL } from "@/lib/directus/client";
import { footerQueryOptions } from "@/lib/directus/queries";
import type { FooterRecord } from "@/types/directus";

function extOrHash(url?: string | null) {
  return url && url.trim().length ? url : "#";
}

function SocialIcon({ platform }: { platform?: string }) {
  const value = (platform ?? "").toLowerCase();
  if (value.includes("facebook")) return <Facebook className="w-5 h-5" />;
  if (value.includes("linkedin")) return <Linkedin className="w-5 h-5" />;
  if (value === "x" || value.includes("twitter")) return <Twitter className="w-5 h-5" />;
  return <span className="block w-5 h-5 rounded bg-white" />;
}

export default function FooterSectionClient() {
  const { data } = useQuery(footerQueryOptions());
  const row: FooterRecord | undefined = data?.data?.[0];

  if (!row) return null;

  const logoUrl = row.logo
    ? getAssetURL(row.logo, { width: 224, quality: 80 })
    : null;

  const legal = (row.legal_links ?? []).map(({ item }) => {
    const record = (item ?? {}) as Record<string, any>;
    return {
      label: record.label ?? "",
      href: extOrHash(record.url as string | null | undefined),
    };
  });

  const locations = (row.locations ?? []).map(({ item }) => {
    const record = (item ?? {}) as Record<string, any>;
    return {
      label: record.city ?? "",
      href: extOrHash(record.url as string | null | undefined),
    };
  });

  const servicesBucket = ((row.services ?? [])[0]?.item ?? {}) as Record<string, any>;
  const services = [
    servicesBucket.buy ? { label: servicesBucket.buy, href: "#" } : null,
    servicesBucket.sell ? { label: servicesBucket.sell, href: "#" } : null,
    servicesBucket.invest ? { label: servicesBucket.invest, href: "/invest" } : null,
    servicesBucket.valuation ? { label: servicesBucket.valuation, href: "#" } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  const socials = (row.social_links ?? []).map(({ item }) => {
    const record = (item ?? {}) as Record<string, any>;
    return {
      platform: record.platform ?? "",
      href: extOrHash(record.url as string | null | undefined),
    };
  });

  const contact = ((row.contact ?? [])[0]?.item ?? {}) as Record<string, any>;

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="h-10 w-28">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt="Logo" className="h-10 w-28 object-contain" />
              ) : (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 38">
                  <g>
                    <path d={svgPaths.p236b5800} fill="white" />
                  </g>
                </svg>
              )}
            </div>
            <p className="text-gray-400">{row.description ?? ""}</p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <Link
                  key={`${social.platform}-${index}`}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.platform}
                >
                  <SocialIcon platform={social.platform} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              {locations.map((location) => (
                <li key={location.label}>
                  <Link href={location.href} className="hover:text-white transition-colors">
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{contact.title ?? "Contact"}</h4>
            <ul className="space-y-2 text-gray-400">
              {contact.mobile_number && <li>{contact.mobile_number}</li>}
              {contact.email && <li>{contact.email}</li>}
              {contact.location && (
                <li
                  dangerouslySetInnerHTML={{
                    __html: String(contact.location).replace(/\n/g, "<br />"),
                  }}
                />
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Premium Real Estate. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            {legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
