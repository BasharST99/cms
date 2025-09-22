import type { Metadata } from "next";

type Params = { slug: string };

export function generateMetadata({ params }: { params: Params }): Metadata {
  const title = `Page: ${params.slug} — Premium Real Estate`;
  const description = `Learn more about ${params.slug} at Premium Real Estate.`;
  return { title, description };
}

export default function Page({ params }: { params: Params }) {
  const { slug } = params;
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-4">{slug}</h1>
      <p className="text-gray-600">
        This is a dynamic page for <strong>{slug}</strong>. Hook this up to
        CMS-driven content or listings as needed.
      </p>
    </main>
  );
}

