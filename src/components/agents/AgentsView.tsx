"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import AgentsCards from "@/component/home/agent/AgentsView";
import { motion } from "motion/react";
import {
  areasQueryOptions,
  citiesQueryOptions,
  agentsQueryOptions,
  type Agent,
} from "@/lib/agents/queries";

const pageSize = 4;

export default function AgentsView({
  title,
  subtitle,
  buttonLabel,
  searchPlaceholder = "Search by name, specialties, etc.",
}: {
  title: string;
  subtitle: string;
  buttonLabel: string;
  searchPlaceholder?: string;
}) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedArea, setSelectedArea] = useState<string | number>("all");
  const [selectedCity, setSelectedCity] = useState<string | number>("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  const areasQ = useQuery(areasQueryOptions());
  const citiesQ = useQuery({
    ...citiesQueryOptions(selectedArea),
    enabled: selectedArea !== "all",
  });
  const agentsQ = useQuery(
    agentsQueryOptions({
      search: debouncedSearch,
      areaId: selectedArea,
      cityId: selectedCity,
      page,
      pageSize,
    })
  );

  const totalPages = useMemo(() => {
    const meta = agentsQ.data?.meta ?? {};
    const count = (meta.filter_count ?? meta.total_count ?? 0) as number;
    return Math.max(1, Math.ceil(count / pageSize));
  }, [agentsQ.data]);

  const agents = useMemo(
    () =>
      (agentsQ.data?.data ?? []).map((a: Agent) => ({
        id: a.id,
        name: a.name,
        location: a.location,
        salesLabel: a.sales,
        salesValue: a.sales_value,
        experienceLabel: a.experience,
        experienceValue: a.experience_value,
        specialtiesLabel: a.specialties,
        specialties: [a.specialties_tag1, a.specialties_tag2].filter(
          (v): v is string => typeof v === "string" && v.length > 0,
        ),
        contactLabel: a.contact,
        callLabel: a.call,
        imageUrl: a.image ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${a.image}` : null,
        rating:
          typeof a.rating === "string"
            ? Number(a.rating)
            : typeof a.rating === "number"
            ? a.rating
            : undefined,
      })),
    [agentsQ.data]
  );

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            value={String(selectedArea)}
            onValueChange={(v) => {
              setSelectedArea(v);
              setSelectedCity("all");
              setPage(1);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Areas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Areas</SelectItem>
              {(areasQ.data?.data ?? []).map((area) => (
                <SelectItem key={area.id} value={String(area.id)}>
                  {area.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={String(selectedCity)}
            onValueChange={(v) => {
              setSelectedCity(v);
              setPage(1);
            }}
            disabled={selectedArea === "all"}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  selectedArea === "all" ? "Select area first" : "All Cities"
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {(citiesQ.data?.data ?? []).map((city) => (
                <SelectItem key={city.id} value={String(city.id)}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {agentsQ.isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <AgentsCards
          title={title}
          subtitle={subtitle}
          buttonLabel={buttonLabel}
          agents={agents}
        />
      )}

      <div className="flex justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </Button>
        <span className="px-3 py-1 border rounded-md bg-white">
          {page} / {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
