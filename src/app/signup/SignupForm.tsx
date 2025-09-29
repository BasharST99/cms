"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type SignupPayload = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

type SignupResponse = {
  error?: { message?: string } | string;
};

export function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<SignupPayload>({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof SignupPayload>(
    key: K,
    value: SignupPayload[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          first_name: form.first_name,
          last_name: form.last_name,
        }),
      });
      if (!response.ok && response.status !== 204) {
        const payload = (await response
          .json()
          .catch(() => null)) as SignupResponse | null;
        const message =
          typeof payload?.error === "string"
            ? payload.error
            : payload?.error?.message ?? "Unable to sign up";
        throw new Error(message);
      }

      router.push("/login?signup=success");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to sign up right now"
      );
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first_name">First name</Label>
          <Input
            id="first_name"
            value={form.first_name}
            onChange={(event) => update("first_name", event.target.value)}
            placeholder="Alex"
            required
            className="text-black placeholder:text-gray-400 bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last_name">Last name</Label>
          <Input
            id="last_name"
            value={form.last_name}
            onChange={(event) => update("last_name", event.target.value)}
            placeholder="Johnson"
            required
            className="text-black placeholder:text-gray-400 bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          placeholder="you@example.com"
          required
          className="text-black placeholder:text-gray-400 bg-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          value={form.password}
          onChange={(event) => update("password", event.target.value)}
          placeholder="••••••••"
          required
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
            Creating your account…
          </>
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  );
}
