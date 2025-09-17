"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import svgPaths from "@/imports/svg-nby02nlaqg";

type NavItem = { name: string; href: string; section?: string };

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Home-section anchors; ids must match your section wrappers
  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Buy", href: "/#property-listings", section: "buy" },
      { name: "Sell", href: "/#services", section: "sell" },
      { name: "Invest", href: "/invest" }, // real route
      { name: "Agents", href: "/#agents", section: "agents" },
      { name: "Market Insights", href: "/#insights", section: "insights" },
    ],
    []
  );

  // Smooth-scroll if we're already on home; otherwise push to "/#id"
  const handleNavClick = (item: NavItem) => {
    const isHash = item.href.includes("#");
    if (!isHash) {
      router.push(item.href);
      setIsMobileMenuOpen(false);
      return;
    }

    const id = item.href.split("#")[1];
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  // Active-section tracking on home with IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") return;

    const mapping: Record<string, string> = {
      "property-listings": "buy",
      services: "sell",
      agents: "agents",
      insights: "insights",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const section = mapping[id] ?? "home";
            setActiveSection(section);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    Object.keys(mapping).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Utility to style active links
  const isActive = (item: NavItem) => {
    if (item.href === "/invest") return pathname === "/invest";
    return pathname === "/" && item.section && activeSection === item.section;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo → Home */}
          <Link
            href="/"
            className="h-10 w-28 transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 114 38"
            >
              <g>
                <path d={svgPaths.p236b5800} fill="#1A3353" />
              </g>
            </svg>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`transition-colors duration-200 ${
                  isActive(item)
                    ? "text-[#0B3557] font-medium"
                    : "text-gray-600 hover:text-[#0B3557]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-[#0B3557] hover:bg-[#0B3557]/90">
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-left transition-colors duration-200 ${
                    isActive(item)
                      ? "text-[#0B3557] font-medium"
                      : "text-gray-600 hover:text-[#0B3557]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="justify-start">
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="bg-[#0B3557] hover:bg-[#0B3557]/90 justify-start"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
