// src/component/ourServices/OurServicesSection.tsx (SERVER)
import { dxGet } from "@/lib/directus/server";
import ServicesView from "./ServicesView";

type OurServices = { id:number; title?:string; subtitle?:string; services_data?: { item: any }[] };

export default async function ServicesSection() {
  const { data } = await dxGet<{ data: OurServices[] }>("/items/our_services", {
    fields: ["*","services_data.item.*"].join(","),
    limit: "1",
  }, 300);

  const row = data?.[0] ?? null;
  if (!row) return null;
  return <ServicesView data={row} />;
}
