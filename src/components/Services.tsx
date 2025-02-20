import { ServicesItemType } from "@/types/types";
import ServicesCard from "./ServicesCard";

const services: ServicesItemType[] = [
  {
    image: "/images/construction.png",
    name: "Construction",
    isPrimary: false,
  },
  {
    image: "/images/renovation.png",
    name: "Renovation",
    isPrimary: true,
  },
  {
    image: "/images/consultation.png",
    name: "Consultation",
    isPrimary: false,
  },
  {
    image: "/images/repair.png",
    name: "Repair Services",
    isPrimary: true,
  },
  {
    image: "/images/architecture.png",
    name: "Architecture",
    isPrimary: false,
  },
  {
    image: "/images/electric.png",
    name: "Electric",
    isPrimary: true,
  },
];

export default function Services() {
  return (
    <div className="space-y-16 lg:px-32 py-24">
      <p className="font-semibold text-slate-900 text-4xl text-center">
        Services
      </p>
      <div className="gap-8 grid lg:grid-cols-3">
        {services.map((item, index) => (
          <ServicesCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
