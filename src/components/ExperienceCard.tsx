import { ExperienceItemType } from "@/types/types";

interface ExperienceCardProps {
  item: ExperienceItemType;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="relative space-y-4 hover:shadow-lg p-4 lg:p-8 hover:border rounded-lg transition-all">
      <p className="font-semibold text-blue-900 text-6xl">{item.number}</p>
      <img
        src={item.image}
        alt="Image"
        className="-top-8 lg:-top-12 -right-4 lg:-right-12 absolute w-20 lg:w-24 h-20 lg:h-24 object-cover"
      />
      <p className="pl-2 border-l-4 border-l-orange-500 font-semibold text-slate-600 text-xl">
        {item.title}
      </p>
    </div>
  );
}
