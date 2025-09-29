"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import type { FiltersBarProps } from "./FiltersBar.types";

export default function FiltersBar({
  typeFilter,
  minBeds,
  minBaths,
  sortBy,
  areaSearch, // Add this prop
  onTypeChange,
  onMinBedsChange,
  onMinBathsChange,
  onSortChange,
  onAreaSearchChange, // Add this prop
  onReset,
  types,
  bedOptions,
  bathOptions,
  sortOptions,
}: FiltersBarProps) {
  return (
    <div className="bg-white border rounded-lg p-3 shadow-sm">
      <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-2">
        Filters
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3"> {/* Changed to 6 columns */}
        {/* Area Search Input */}
        <div className="md:col-span-2 relative"> {/* Span 2 columns on medium screens */}
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search area..."
            value={areaSearch || ""}
            onChange={(e) => onAreaSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={typeFilter} onValueChange={onTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            {types.map((t) => (
              <SelectItem key={t} value={t}>
                {t === "all" ? "All Types" : t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((s) => (
              <SelectItem key={s.key} value={s.key}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={String(minBeds)} onValueChange={(v) => onMinBedsChange(Number(v))}>
          <SelectTrigger>
            <SelectValue placeholder="Min Beds" />
          </SelectTrigger>
          <SelectContent>
            {bedOptions.map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n === 0 ? "Any Beds" : `${n}+ Beds`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={String(minBaths)} onValueChange={(v) => onMinBathsChange(Number(v))}>
          <SelectTrigger>
            <SelectValue placeholder="Min Baths" />
          </SelectTrigger>
          <SelectContent>
            {bathOptions.map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n === 0 ? "Any Baths" : `${n}+ Baths`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>


      </div>
    </div>
  );
}
