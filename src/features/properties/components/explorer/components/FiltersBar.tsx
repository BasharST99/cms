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
  areaSearch,
  onTypeChange,
  onMinBedsChange,
  onMinBathsChange,
  onSortChange,
  onAreaSearchChange,
  onReset,
  types,
  bedOptions,
  bathOptions,
  sortOptions,
  selectedArea,
  selectedCity,
  onAreaChange,
  onCityChange,
  areaOptions,
  cityOptions,
  isCityDisabled,
}: FiltersBarProps) {
  return (
    <div className="bg-white border rounded-lg p-3 shadow-sm">
      <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-2">
        Filters
      </p>

      {/* grid on mobile, flex+wrap on md+ so items stay tight */}
      <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center">
        {/* Search */}
        <div className="relative md:flex-none">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="text"
            placeholder="Search area..."
            value={areaSearch || ""}
            onChange={(e) => onAreaSearchChange(e.target.value)}
            className="pl-10 w-full md:w-64"
          />
        </div>

        {/* Area */}
        <div className="md:flex-none">
          <Select value={selectedArea} onValueChange={onAreaChange}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="All Areas" />
            </SelectTrigger>
            <SelectContent>
              {areaOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div className="md:flex-none">
          <Select
            value={selectedCity}
            onValueChange={onCityChange}
            disabled={isCityDisabled}
          >
            <SelectTrigger className="w-full md:w-48">
              <SelectValue
                placeholder={isCityDisabled ? "Select area first" : "All Cities"}
              />
            </SelectTrigger>
            <SelectContent>
              {cityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type */}
        <div className="md:flex-none">
          <Select value={typeFilter} onValueChange={onTypeChange}>
            <SelectTrigger className="w-full md:w-40">
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
        </div>

        {/* Sort (wider ~ “1.25 col” feel) */}
        <div className="md:flex-none">
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-full md:w-56">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="w-[var(--radix-select-trigger-width)]">
              {sortOptions.map((s) => (
                <SelectItem key={s.key} value={s.key}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>



        {/* Reset */}
        <Button variant="outline" onClick={onReset} className="w-full md:flex-none md:w-28">
          Reset
        </Button>
      </div>
    </div>
  );
}
