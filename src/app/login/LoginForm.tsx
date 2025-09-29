"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { reloadSession } from "@/hooks/useSession";

type FormError = string | null;

type LoginResponse = {
  error?: string | { message?: string };
};

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<FormError>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const signupSuccessMessage = useMemo(() => {
    if (searchParams?.get("signup") === "success") {
      return "Account created! You can sign in now.";
    }
    return null;
  }, [searchParams]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const payload = (await response
          .json()
          .catch(() => null)) as LoginResponse | null;
        const message =
          typeof payload?.error === "string"
            ? payload.error
            : payload?.error?.message;
        throw new Error(message ?? "Invalid email or password");
      }

      await reloadSession();
      router.push("/");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to sign in right now"
      );
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {signupSuccessMessage && (
        <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100">
          {signupSuccessMessage}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="you@example.com"
          className="text-black placeholder:text-gray-400 bg-white"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <span className="text-xs text-slate-400">Forgot password?</span>
        </div>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          placeholder="••••••••"
          className="text-black placeholder:text-gray-400 bg-white"
        />
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="inline-flex w-full items-center justify-center bg-[#0B3557] hover:bg-[#0B3557]/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing you in…
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
}
