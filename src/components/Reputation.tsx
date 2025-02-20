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
    <div className="space-y-16 py-24">
      <h2 className="font-semibold text-blue-900 text-2xl md:text-3xl lg:text-4xl text-center">
        Our Reputation
      </h2>
      <div className="gap-4 md:gap-8 lg:gap-16 grid lg:grid-cols-3 px-8 md:px-16 lg:px-32">
        {ReputationItems.map((item, index) => (
          <div key={index}>
            <ReputationCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
