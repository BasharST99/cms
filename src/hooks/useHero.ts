// src/hooks/useHero.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchHero } from "@/lib/directus";

export function useHero() {
  return useQuery({
    queryKey: ["hero"],
    queryFn: fetchHero,
  });
}
