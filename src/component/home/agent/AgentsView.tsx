// src/component/agent/AgentsView.tsx (CLIENT)
"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AgentsView({
  title,
  subtitle,
  buttonLabel,
  agents,
}: any) {
  return (
    <section id="agents" className=" py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent: any, index: number) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl"
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="relative mx-auto size-24">
                    <Image
                      src={agent.imageUrl || "/assets/fallback.png"}
                      alt={agent.name}
                      fill
                      sizes="96px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  {agent.rating != null && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[#0B3557] text-white text-xs">
                        {agent.rating} ★
                      </Badge>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{agent.location}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{agent.salesLabel}:</span>
                    <span className="font-semibold">{agent.salesValue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {agent.experienceLabel}:
                    </span>
                    <span className="font-semibold">
                      {agent.experienceValue}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">
                    {agent.specialtiesLabel}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {agent.specialties.map((t: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    size="sm"
                    className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90"
                  >
                    <Mail className="h-3 w-3 mr-2" />
                    {agent.contactLabel}
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    <Phone className="h-3 w-3 mr-2" />
                    {agent.callLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#0B3557] text-[#0B3557] hover:bg-[#0B3557] hover:text-white"
          >
            {buttonLabel}
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
