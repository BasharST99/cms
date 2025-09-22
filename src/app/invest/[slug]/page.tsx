import type { Metadata } from "next";

type Params = { slug: string };

export function generateMetadata(): Metadata {
  return { title: "Invest — Dynamic", description: "Investment dynamic page" };
}

export default function InvestSlugPage({ params }: any) {
  const slug = params?.slug as string;
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">Invest: {slug}</h1>
      <p className="text-gray-600">
        Dynamic invest page for <strong>{slug}</strong>. Wire to Directus data or
        investment detail modules.
      </p>
    </main>
  );
}
