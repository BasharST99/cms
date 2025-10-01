"use client";

import { useMutation } from "@tanstack/react-query";

type ContactAgentInput = {
  name?: string;
  email: string;
  phone?: string;
  message: string;
  propertyId: number | string;
};

type ContactAgentResponse = {
  ok: boolean;
  data?: unknown;
};

type ContactAgentError = Error & {
  details?: unknown;
};

async function submitContactAgent(payload: ContactAgentInput): Promise<ContactAgentResponse> {
  const body = {
    name: payload.name?.trim() || undefined,
    email: payload.email,
    phone: payload.phone?.trim() || undefined,
    message: payload.message,
    property: { id: payload.propertyId },
  };

  const response = await fetch("/api/contact_agent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(
      (json as { error?: string } | null)?.error ?? "Failed to submit contact request"
    ) as ContactAgentError;
    if (json && typeof json === "object" && "details" in json) {
      error.details = (json as { details?: unknown }).details;
    }
    throw error;
  }

  return (json as ContactAgentResponse) ?? { ok: true };
}

export function useContactAgentMutation() {
  return useMutation<ContactAgentResponse, ContactAgentError, ContactAgentInput>({
    mutationFn: submitContactAgent,
  });
}
