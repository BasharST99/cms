"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // ✅ use framer-motion (not "motion/react")
import {
  TrendingUp,
  Shield,
  Calendar,
  Award,
  Phone,
} from "lucide-react";

type IconKey = "calendar" | "phone" | "award" | "shield" | "trending-up";

const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  "calendar": Calendar,
  "phone": Phone,
  "award": Award,
  "shield": Shield,
  "trending-up": TrendingUp,
};

function getIcon(name?: string) {
  const key = (name ?? "").toLowerCase() as IconKey;
  return iconMap[key] ?? Award;
}

export default function InvestmentCTAView({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  features,
}: {
  title: string;
  subtitle: string;
  primaryButton: { label: string; icon?: string; href: string };
  secondaryButton: { label: string; icon?: string; href: string };
  features: { icon?: string; title: string; description: string }[];
}) {
  const PrimaryIcon = getIcon(primaryButton.icon);
  const SecondaryIcon = getIcon(secondaryButton.icon);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B3557] to-[#2d5f7f]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#bb9a74] hover:bg-[#bb9a74]/90 text-white" asChild>
              <a href={primaryButton.href}>
                <PrimaryIcon className="h-5 w-5 mr-2" />
                {primaryButton.label}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0B3557]"
              asChild
            >
              <a href={secondaryButton.href}>
                <SecondaryIcon className="h-5 w-5 mr-2" />
                {secondaryButton.label}
              </a>
            </Button>
          </div>

          {features?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.slice(0, 6).map((f, i) => {
                const Icon = getIcon(f.icon);
                return (
                  <div key={`${f.title}-${i}`} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                    <p className="text-white/80 text-sm">{f.description}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
