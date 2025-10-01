import { NextResponse } from "next/server";

type ContactAgentPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  property?: {
    id?: number | string;
  } | null;
};

const DIRECTUS_BASE =
  process.env.DIRECTUS_URL ?? process.env.NEXT_PUBLIC_DIRECTUS_URL ?? null;

const DIRECTUS_AUTH_TOKEN =
  process.env.DIRECTUS_TOKEN ?? process.env.NEXT_PUBLIC_DIRECTUS_TOKEN ?? null;

if (!DIRECTUS_BASE) {
  throw new Error(
    "DIRECTUS_URL or NEXT_PUBLIC_DIRECTUS_URL must be defined for contact agent submissions"
  );
}

function normalizePayload(input: ContactAgentPayload) {
  const email = input.email?.trim();
  const message = input.message?.trim();
  const propertyId = input.property?.id;

  if (!email || !message || !propertyId) {
    return {
      valid: false,
      error: "Missing email, message, or property id",
    } as const;
  }

  const phone = input.phone?.trim();
  const name = input.name?.trim();

  return {
    valid: true,
    payload: {
      email,
      phone: phone?.length ? phone : null,
      message,
      name: name?.length ? name : null,
      property: {
        id: typeof propertyId === "string" || typeof propertyId === "number"
          ? propertyId
          : null,
      },
      submitted_at: new Date().toISOString(),
    },
  } as const;
}

export async function POST(request: Request) {
  let body: ContactAgentPayload;

  try {
    body = (await request.json()) as ContactAgentPayload;
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON payload", details: error instanceof Error ? error.message : String(error) },
      { status: 400 }
    );
  }

  const result = normalizePayload(body);
  if (!result.valid || !result.payload.property.id) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    const response = await fetch(`${DIRECTUS_BASE}/items/contact_agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(DIRECTUS_AUTH_TOKEN ? { Authorization: `Bearer ${DIRECTUS_AUTH_TOKEN}` } : {}),
      },
      body: JSON.stringify({
        email: result.payload.email,
        phone: result.payload.phone,
        message: result.payload.message,
        name: result.payload.name,
        property: {
          id:
            typeof result.payload.property.id === "string"
              ? result.payload.property.id
              : Number(result.payload.property.id),
        },
        submitted_at: result.payload.submitted_at,
      }),
      cache: "no-store",
    });

    const json = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to submit contact request",
          details: json,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        data: json?.data ?? json,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unexpected error while submitting contact request",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
