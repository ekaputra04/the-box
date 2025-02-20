import { useState } from "react";
import { ProjectItemType } from "@/types/types";
import TabList from "./TabList";
import ProjectCard from "./ProjectCard";

const tabLists = ["All", "Commercial", "Residential", "Other"];

const projects: ProjectItemType[] = [
  {
    image: "/images/wildstone.png",
    name: "Wildstone Infra Hotel",
    street: "2715 Ash Dr. San Jose, South Dakota",
    type: "Commercial",
  },
  {
    image: "/images/wishstone.png",
    name: "Wish Stone Building",
    street: "2972 Westheimer Rd. Santa Ana, Illinois ",
    type: "Commercial",
  },
  {
    image: "/images/parkinston.png",
    name: "Mr. Parkinston’s House",
    street: "3517 W. Gray St. Utica, Pennsylvania",
    type: "Residential",
  },
  {
    image: "/images/oregano.png",
    name: "Oregano Height",
    street: "2464 Royal Ln. Mesa, New Jersey ",
    type: "Other",
  },
];

export default function Project() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <div className="px-8 md:px-16 lg:px-32 py-24" id="project">
      <h2 className="pb-8 lg:pb-16 font-semibold text-blue-900 text-2xl md:text-3xl lg:text-4xl">
        Projects
      </h2>
      <div className="gap-16 lg:grid lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ul className="space-y-4">
            {tabLists.map((tab) => (
              <TabList
                title={tab}
                isActive={activeTab === tab}
                key={tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </ul>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 col-span-2 mt-8 lg:mt-0">
          {filteredProjects.map((project) => (
            <ProjectCard item={project} key={project.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
