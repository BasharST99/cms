"use client";

import { useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";

export type LogoutButtonProps = ButtonProps & {
  label?: string;
};

export function LogoutButton({ label = "Log out", onClick, ...props }: LogoutButtonProps) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();

  async function handleLogout(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    setLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" }).catch(() => undefined);
      await session.reload();
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleLogout} disabled={isLoading} {...props}>
      {isLoading ? "Signing out…" : label}
    </Button>
  );
}
