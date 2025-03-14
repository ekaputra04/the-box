export type ReputationItemType = {
  title: string;
  description: string;
  logo: React.ElementType;
};

export type ServicesItemType = {
  image: string;
  name: string;
  isPrimary: boolean;
};

export type ExperienceItemType = {
  image: string;
  number: number;
  title: string;
};

export type ProjectItemType = {
  image: string;
  name: string;
  street: string;
  type: "Commercial" | "Residential" | "Other";
};
