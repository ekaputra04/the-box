import { ServicesItemType } from "@/types/types";

interface ServicesCardProps {
  item: ServicesItemType;
}

export default function ServicesCard({ item }: ServicesCardProps) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center space-y-4 p-8 border rounded-lg shadow-lg ${
          item.isPrimary ? "bg-blue-900" : ""
        }`}
      >
        <img src={item.image} alt="image" className="w-12 h-12 object-cover" />
        <p
          className={`${
            item.isPrimary ? "text-white" : "text-slate-900"
          } font-semibold text-xl`}
        >
          {item.name}
        </p>
      </div>
    </>
  );
}
