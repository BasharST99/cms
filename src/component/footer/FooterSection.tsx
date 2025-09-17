// SERVER COMPONENT (no "use client")
import Link from "next/link";
import svgPaths from "@/imports/svg-nby02nlaqg";
import { dxGet, getAssetURL } from "@/lib/directus/server";
import { Facebook, Linkedin, Twitter } from "lucide-react";

type LegalLink = { id: number; label?: string; url?: string | null };
type LocationItem = { id: number; city?: string; url?: string | null; title?: string | null };
type SocialItem = { id: number; platform?: string; url?: string | null };
type ServicesItem = { id: number; buy?: string; sell?: string; invest?: string; valuation?: string; title?: string | null };
type ContactItem = { id: number; title?: string; mobile_number?: string; email?: string; location?: string };

type FooterRow = {
  id: number;
  description?: string;
  logo?: string | null; // Directus asset id
  legal_links?: { item: LegalLink }[];
  locations?: { item: LocationItem }[];
  social_links?: { item: SocialItem }[];
  services?: { item: ServicesItem }[];
  contact?: { item: ContactItem }[];
};

function extOrHash(url?: string | null) {
  return url && url.trim().length ? url : "#";
}

function SocialIcon({ platform }: { platform?: string }) {
  const p = (platform ?? "").toLowerCase();
  if (p.includes("facebook")) return <Facebook className="w-5 h-5" />;
  if (p.includes("linkedin")) return <Linkedin className="w-5 h-5" />;
  // map X → Twitter icon for now
  if (p === "x" || p.includes("twitter")) return <Twitter className="w-5 h-5" />;
  return <span className="block w-5 h-5 rounded bg-white" />; // neutral fallback box
}

export default async function FooterSection() {
  const { data } = await dxGet<{ data: FooterRow[] }>(
    "/items/footer",
    { fields: "*,services.item.*,legal_links.item.*,locations.item.*,social_links.item.*,contact.item.*", limit: "1" },
    3600 // ISR: 1h; tune as needed
  );

  const row = data?.[0];
  if (!row) return null;

  const logoUrl = row.logo ? getAssetURL(row.logo, { width: 224, quality: 80 }) : null;

  const legal = (row.legal_links ?? []).map(({ item }) => ({
    label: item.label ?? "",
    href: extOrHash(item.url),
  }));

  const locations = (row.locations ?? []).map(({ item }) => ({
    label: item.city ?? "",
    href: extOrHash(item.url),
  }));

  // Services block is a key/value bucket (buy/sell/invest/valuation)
  const servicesKV = row.services?.[0]?.item ?? {};
  const services: { label: string; href: string }[] = [
    servicesKV.buy ? { label: servicesKV.buy, href: "#" } : null,
    servicesKV.sell ? { label: servicesKV.sell, href: "#" } : null,
    servicesKV.invest ? { label: servicesKV.invest, href: "/invest" } : null,
    servicesKV.valuation ? { label: servicesKV.valuation, href: "#" } : null,
  ].filter(Boolean) as any[];

  const socials = (row.social_links ?? []).map(({ item }) => ({
    platform: item.platform ?? "",
    href: extOrHash(item.url),
  }));

  const contact = row.contact?.[0]?.item ?? {};

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="h-10 w-28">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt="Logo" className="h-10 w-28 object-contain" />
              ) : (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 38">
                  <g><path d={svgPaths.p236b5800} fill="white" /></g>
                </svg>
              )}
            </div>
            <p className="text-gray-400">{row.description ?? ""}</p>
            <div className="flex space-x-4">
              {socials.map((s, i) => (
                <Link
                  key={`${s.platform}-${i}`}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={s.platform}
                >
                  <SocialIcon platform={s.platform} />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-400">
              {locations.map((loc) => (
                <li key={loc.label}>
                  <Link href={loc.href} className="hover:text-white transition-colors">
                    {loc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{contact.title ?? "Contact"}</h4>
            <ul className="space-y-2 text-gray-400">
              {contact.mobile_number && <li>{contact.mobile_number}</li>}
              {contact.email && <li>{contact.email}</li>}
              {contact.location && (
                <li dangerouslySetInnerHTML={{ __html: contact.location.replace(/\n/g, "<br />") }} />
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Premium Real Estate. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
