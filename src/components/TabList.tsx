interface TabListProps {
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function TabList({ title, isActive, onClick }: TabListProps) {
  return (
    <li
      onClick={onClick}
      className={`py-2 pl-4 text-xl hover:cursor-pointer ${
        isActive
          ? "bg-blue-50 hover:bg-blue-100 border-l-2 border-l-blue-900 font-semibold text-blue-900"
          : "hover:bg-blue-100 text-slate-500"
      }`}
    >
      {title}
    </li>
  );
}
