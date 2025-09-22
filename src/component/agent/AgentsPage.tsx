"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import AgentsView from "../home/agent/AgentsView";
import { motion } from "motion/react";

const API_BASE = "http://localhost:8055";

export default function AgentsPage({
  title,
  subtitle,
  buttonLabel,
  searchPlaceholder = "Search by name, specialties, etc.",
}: any) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [page, setPage] = useState(1);
  const [agents, setAgents] = useState<any[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageSize = 4;

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(t);
  }, [search]);

  // 👉 Load regions once (try aggregates; fallback to fetch+dedupe)
  useEffect(() => {
    const loadRegions = async () => {
      // Try aggregates (A)
      try {
        const urlA = `${API_BASE}/items/agents?fields=location&groupBy=location&limit=-1`;
        const resA = await fetch(urlA);
        if (resA.ok) {
          const jsonA = await resA.json();
          // groupBy returns rows with "location"
          const list = Array.from(
            new Set(
              (jsonA.data || [])
                .map((row: any) => row.location)
                .filter(Boolean)
                // optional split if you store "Riyadh & Jeddah" in one cell:
                .flatMap((loc: string) =>
                  String(loc)
                    .split("&")
                    .map((s) => s.trim())
                )
            )
          );
          setRegions(list);
          return;
        }
        // If 403 or not ok, fall through to fallback
      } catch {}

      // Fallback (B/C): fetch and dedupe
      try {
        const perPage = 200; // tune as needed
        let p = 1;
        const acc = new Set<string>();
        while (true) {
          const urlB = `${API_BASE}/items/agents?fields=location&limit=${perPage}&page=${p}&sort=location&meta=total_count`;
          const resB = await fetch(urlB);
          if (!resB.ok) break;
          const jsonB = await resB.json();
          const rows: any[] = jsonB.data || [];
          rows.forEach((r) => {
            if (r?.location) {
              String(r.location)
                .split("&")
                .map((s) => s.trim())
                .filter(Boolean)
                .forEach((v) => acc.add(v));
            }
          });
          const total = Number(jsonB?.meta?.total_count ?? rows.length);
          const pageCount = Math.max(1, Math.ceil(total / perPage));
          if (p >= pageCount || rows.length === 0) break;
          p++;
        }
        setRegions(Array.from(acc));
      } catch {
        setRegions([]); // last resort
      }
    };

    loadRegions();
  }, []);

  // Fetch agents with real pagination + count
  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      params.set("limit", String(pageSize));
      params.set("page", String(page));
      // get filtered count so pagination stays accurate when searching/filtering
      params.set("meta", "filter_count");

      if (debouncedSearch) {
        // global full-text search
        params.set("search", debouncedSearch);
      }
      if (region !== "all") {
        params.set("filter[location][_contains]", region);
      }

      const url = `${API_BASE}/items/agents?${params.toString()}`;
      const res = await fetch(url);
      const json = await res.json();

      setAgents(json.data || []);
      const count = json?.meta?.filter_count ?? json?.meta?.total_count ?? 0;
      setTotalPages(Math.max(1, Math.ceil(Number(count) / pageSize)));
      setLoading(false);
    };

    fetchAgents();
  }, [debouncedSearch, region, page]);

  return (
    <div className="py-10 bg-gray-50">
      {/* Filters */}
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
            placeholder={searchPlaceholder} // <- uses the prop
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select
            value={region}
            onValueChange={(val) => {
              setRegion(val);
              setPage(1);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              {regions.map((r) => (
                <SelectItem key={r} value={r}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Agents grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <AgentsView
          title={title}
          subtitle={subtitle}
          buttonLabel={buttonLabel}
          agents={agents.map((a: any) => ({
            id: a.id,
            name: a.name,
            location: a.location,
            salesLabel: a.sales,
            salesValue: a.sales_value,
            experienceLabel: a.experience,
            experienceValue: a.experience_value,
            specialtiesLabel: a.specialties,
            specialties: [a.specialties_tag1, a.specialties_tag2].filter(
              Boolean
            ),
            contactLabel: a.contact,
            callLabel: a.call,
            imageUrl: `${API_BASE}/assets/${a.image}`,
            rating: a.rating,
          }))}
        />
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <span className="px-3 py-1 border rounded-md bg-white">
          {page} / {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
