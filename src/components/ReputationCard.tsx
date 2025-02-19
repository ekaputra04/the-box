import { ReputationItemType } from "@/types/types";

interface ReputationCardProps {
  item: ReputationItemType;
}

export const ReputationCard = ({ item }: ReputationCardProps) => {
  const Icon = item.logo;
  return (
    <>
      <div className="space-y-2 hover:bg-blue-50 p-4 border border-slate-200 hover:border-blue-200 rounded-sm transition-colors">
        <Icon color="#2947A9" className="w-8 h-8" />
        <p className="font-semibold text-xl">{item.title}</p>
        <p>{item.description}</p>
      </div>
    </>
  );
};
