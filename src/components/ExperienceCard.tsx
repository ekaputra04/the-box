import { ExperienceItemType } from "@/types/types";

interface ExperienceCardProps {
  item: ExperienceItemType;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="relative space-y-4 shadow-lg p-8 border rounded-lg">
      <p className="font-semibold text-blue-900 text-6xl">{item.number}</p>
      <img
        src={item.image}
        alt="Image"
        className="-top-12 -right-12 absolute w-24 h-24 object-cover"
      />
      <p className="pl-2 border-l-4 border-l-orange-500 font-semibold text-slate-600 text-xl">
        {item.title}
      </p>
    </div>
  );
}
