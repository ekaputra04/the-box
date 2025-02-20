import { ProjectItemType } from "@/types/types";

interface ProjectCardProps {
  item: ProjectItemType;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="shadow p-4 border rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="rounded w-full h-48 object-cover"
      />
      <h3 className="mt-4 font-semibold text-blue-900 text-lg">{item.name}</h3>
      <p className="text-gray-600">{item.street}</p>
      <span className="text-gray-500 text-sm">{item.type}</span>
    </div>
  );
}
