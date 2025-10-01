"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogoutButton } from "@/features/auth/components/LogoutButton";
import { useSession } from "@/hooks/useSession";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import svgPaths from "@/imports/svg-nby02nlaqg";
import icon from 'public/assets/icon.png';
import Image from "next/image";
type NavItem = { name: string; href: string; section?: string };

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const session = useSession();

  const isAuthenticated = session.status === "authenticated";
  const isLoadingSession = session.status === "loading";
  const user = isAuthenticated ? session.user : null;

  const fullName = [user?.first_name, user?.last_name].filter(Boolean).join(" ").trim();
  const displayName = fullName || user?.email?.split("@")[0] || "Account";
  const initials = useMemo(() => {
    const parts = [user?.first_name, user?.last_name].filter(Boolean);
    if (parts.length) {
      return parts
        .map((part) => part?.charAt(0)?.toUpperCase() ?? "")
        .join("")
        .slice(0, 2);
    }
    const email = user?.email ?? "";
    if (email) return email.charAt(0).toUpperCase();
    return "U";
  }, [user?.first_name, user?.last_name, user?.email]);

  // Home-section anchors; ids must match your section wrappers
  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Buy", href: "/#property-listings", section: "buy" },
      { name: "Sell", href: "/#services", section: "sell" },
      { name: "Invest", href: "/invest" }, // real route
      { name: "Agents", href: "/agent" },
      { name: "Properties", href: "/properties" },
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
            <Image src={icon.src} alt="Logo" className="h-full w-full object-contain" width={100} height={100}/>
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
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white/50 px-3 py-2">
                  <Avatar className="size-9 border border-[#0B3557]/20">
                    <AvatarFallback className="bg-[#0B3557]/10 text-[#0B3557] text-sm font-semibold">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-0">
                    <p className="text-sm font-semibold text-[#0B3557]">{displayName}</p>
                    {user?.email && (
                      <p className="text-xs text-gray-500">{user.email}</p>
                    )}
                  </div>
                </div>
                <LogoutButton
                  variant="outline"
                  size="sm"
                  className="border-[#0B3557] text-[#0B3557] hover:bg-[#0B3557]/10"
                />
              </>
            ) : isLoadingSession ? (
              <div className="h-9 w-32 animate-pulse rounded-full bg-gray-200" />
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild size="sm" className="bg-[#0B3557] hover:bg-[#0B3557]/90">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </>
            )}
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
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2">
                      <Avatar className="size-9 border border-[#0B3557]/20">
                        <AvatarFallback className="bg-[#0B3557]/10 text-[#0B3557] text-sm font-semibold">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-[#0B3557]">{displayName}</p>
                        {user?.email && (
                          <p className="text-xs text-gray-500">{user.email}</p>
                        )}
                      </div>
                    </div>
                    <LogoutButton
                      variant="ghost"
                      size="sm"
                      className="justify-start text-[#0B3557] hover:bg-[#0B3557]/10"
                      onClick={closeMobileMenu}
                    />
                  </>
                ) : isLoadingSession ? (
                  <div className="h-9 w-full animate-pulse rounded-lg bg-gray-200" />
                ) : (
                  <>
                    <Button asChild variant="ghost" size="sm" className="justify-start">
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="justify-start bg-[#0B3557] hover:bg-[#0B3557]/90"
                    >
                      <Link href="/signup">Get Started</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
