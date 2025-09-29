"use client";

import { Button } from "@/components/ui/button";
import type { PaginationProps } from "./Pagination.types";

export default function Pagination({ page, totalPages, onPrev, onNext }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <Button variant="outline" size="sm" disabled={page === 1} onClick={onPrev}>
        Prev
      </Button>
      <span className="px-3 py-1 border rounded-md bg-white text-sm">
        {page} / {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={page >= totalPages}
        onClick={onNext}
      >
        Next
      </Button>
    </div>
  );
}

