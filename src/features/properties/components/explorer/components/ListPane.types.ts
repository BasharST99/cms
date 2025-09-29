import type { NormalizedProperty } from "@/types/components";

export type ListPaneProps = {
  properties: NormalizedProperty[];
  onCardClick: (property: NormalizedProperty, e: React.MouseEvent<HTMLDivElement>) => void;
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onLoadDetails?: (id: NormalizedProperty["id"]) => Promise<NormalizedProperty>;
};
