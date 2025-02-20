import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type MenuItemType = {
  name: string;
  href: string;
};

const NavMenuItems: MenuItemType[] = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between lg:px-32 py-4">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="" className="h-8" />
          <img src="/images/TheBox.png" alt="" className="h-4" />
        </div>
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              {NavMenuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    href={item.href}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
