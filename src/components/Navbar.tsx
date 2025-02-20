import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

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
      <div className="hidden lg:flex justify-between lg:px-32 py-4">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="" className="h-8" />
          <img src="/images/TheBox.png" alt="" className="h-4" />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {NavMenuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-blue-900`}
                  href={item.href}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="lg:hidden flex justify-between px-8 md:px-16 py-4">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="" className="h-8" />
          <img src="/images/TheBox.png" alt="" className="h-4" />
        </div>
        <Sheet>
          <SheetTrigger className="p-2">
            <AlignRight />
          </SheetTrigger>
          <SheetContent side={"left"} className="">
            <NavigationMenu className="">
              <NavigationMenuList className="flex flex-col gap-4 w-full">
                {NavMenuItems.map((item, index) => (
                  <NavigationMenuItem key={index} className="w-full">
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-blue-900 w-full`}
                      href={item.href}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
