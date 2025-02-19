import { Headset, Users, WandSparkles } from "lucide-react";
import { ReputationCard } from "./ReputationCard";
import { ReputationItemType } from "@/types/types";

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
    <div className="space-y-16 py-32">
      <p className="font-semibold text-slate-900 text-4xl text-center">
        Our Reputation
      </p>
      <div className="gap-16 grid lg:grid-cols-3 px-32">
        {ReputationItems.map((item, index) => (
          <div key={index}>
            <ReputationCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
