// src/hooks/useHero.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { heroQueryOptions } from "@/lib/directus/queries";

export function useHero() {
  return useQuery(heroQueryOptions());
}
