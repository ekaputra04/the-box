import { ExperienceItemType } from "@/types/types";
import ExperienceCard from "./ExperienceCard";
import { Button } from "./ui/button";

const experiences: ExperienceItemType[] = [
  {
    image: "/images/projects.png",
    number: 123,
    title: "Projects Completed",
  },
  {
    image: "/images/clients.png",
    number: 84,
    title: "Happy Clients",
  },
  {
    image: "/images/years.png",
    number: 30,
    title: "Years in Business",
  },
  {
    image: "/images/awards.png",
    number: 50,
    title: "Awards Win",
  },
];
export default function Experience() {
  return (
    <div className="flex flex-col-reverse gap-24 lg:grid lg:grid-cols-5 px-8 md:px-16 lg:px-32 py-24">
      <div className="gap-4 lg:gap-16 grid grid-cols-1 lg:grid-cols-2 lg:col-span-3">
        {experiences.map((item, index) => (
          <ExperienceCard item={item} key={index} />
        ))}
      </div>
      <div className="space-y-8 lg:col-span-2">
        <p className="font-semibold text-blue-900 text-6xl">
          30 Years Experience
        </p>
        <p className="text-slate-700 text-lg">
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <Button className="bg-blue-900 hover:bg-blue-800">Contact Us</Button>
      </div>
    </div>
  );
}
