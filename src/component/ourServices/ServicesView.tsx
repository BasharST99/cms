// src/component/ourServices/ServicesView.tsx (CLIENT)
"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowUpRight,
  Home,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const iconByTitle: Record<string, any> = {
  "Property Buying": Home,
  "Property Selling": DollarSign,
  "Real Estate Investment": TrendingUp,
};

export default function ServicesView({ data }: { data: any }) {
  const heading = data?.titel ?? data?.title ?? "Our Services";
  const subheading =
    data?.subtitle ??
    "Comprehensive real estate solutions tailored to your needs";
  const services = (data?.services_data ?? []).map((row: any) => {
    const item = row.item ?? {};
    const Icon = iconByTitle[item.title ?? ""] ?? Home;
    const features = [
      item.label1,
      item.label2,
      item.lable3,
      item.label4,
    ].filter(Boolean);
    return {
      icon: Icon,
      title: item.title ?? "",
      description: item.subtitle ?? "",
      features,
      cta: item.button_label ?? "Learn More",
    };
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#0B3557] rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* content block grows */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* button pinned to bottom */}
              <Button
                className="mt-auto w-full bg-[#0B3557] hover:bg-[#0B3557]/90"
                onClick={() => {
                  if (service.cta === "Explore Investments") {
                    // navigate...
                  }
                }}
              >
                {service.cta}
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
