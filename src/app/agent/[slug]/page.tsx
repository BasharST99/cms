import type { Metadata } from "next";

type Params = { slug: string };

export function generateMetadata(): Metadata {
  return {
    title: "Dynamic Page — Premium Real Estate",
    description: "Dynamic content page",
  };
}

export default function Page({ params }: any) {
  const slug = params?.slug as string;
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
