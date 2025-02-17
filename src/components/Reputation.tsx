import { Headset, Users, WandSparkles } from "lucide-react";
import React from "react";

type ReputationItemType = {
  title: string;
  description: string;
  logo: React.ElementType;
};

const ReputationItems: ReputationItemType[] = [
  {
    title: "Best Services",
    description: "We provide the best services to our customers.",
    logo: Headset,
  },
  {
    title: "Best Teams",
    description:
      "We have the best teams to provide the best services to our customers.",
    logo: Users,
  },
  {
    title: "Best Designs",
    description:
      "We have the best designs to provide the best services to our customers.",
    logo: WandSparkles,
  },
];

export default function Reputation() {
  return (
    <div className="py-32">
      <p className="font-semibold text-slate-900 text-4xl text-center">
        Our Reputation
      </p>
      <div className="gap-16 grid lg:grid-cols-3 px-32 pt-16">
        {ReputationItems.map((item, index) => (
          <div key={index}>
            <ReputationItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface ReputationItemInterface {
  item: ReputationItemType;
}

const ReputationItem = ({ item }: ReputationItemInterface) => {
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
