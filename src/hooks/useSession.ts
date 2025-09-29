"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";

export type SessionUser = {
  id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string | null;
  [key: string]: unknown;
};

export type SessionState =
  | { status: "loading"; user: null }
  | { status: "authenticated"; user: SessionUser }
  | { status: "unauthenticated"; user: null };

type SessionListener = () => void;

let sessionState: SessionState = { status: "loading", user: null };
const listeners = new Set<SessionListener>();
let inflight: Promise<SessionState> | null = null;

function emit() {
  listeners.forEach((listener) => listener());
}

function setState(next: SessionState) {
  sessionState = next;
  emit();
}

async function fetchSession(): Promise<SessionState> {
  try {
    const res = await fetch("/api/auth/session", { cache: "no-store" });
    if (!res.ok) throw new Error("not-authenticated");
    const json = await res.json();
    const user = (json?.user ?? null) as SessionUser | null;
    if (!user) throw new Error("missing-user");
    const next: SessionState = {
      status: "authenticated",
      user,
    };
    setState(next);
    return next;
  } catch (error) {
    const fallback: SessionState = { status: "unauthenticated", user: null };
    setState(fallback);
    return fallback;
  }
}

function startReload(): Promise<SessionState> {
  setState({ status: "loading", user: null });
  const promise = fetchSession().finally(() => {
    inflight = null;
  });
  inflight = promise;
  return promise;
}

export function reloadSession() {
  return inflight ?? startReload();
}

function subscribe(listener: SessionListener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => sessionState;

export function useSession() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  useEffect(() => {
    if (snapshot.status === "loading" && !inflight) {
      void reloadSession();
    }
  }, [snapshot.status]);

  return useMemo(
    () => ({
      ...snapshot,
      reload: reloadSession,
    }),
    [snapshot],
  );
}
