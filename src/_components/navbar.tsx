import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "/logo.png";

function Navbar() {
  return (
    <div className="flex items-center space-x-4">
      <img src={logo} alt="Erez Porat Logo" className="h-10" />
      <NavigationMenu className="flex-1">
        <NavigationMenuList className="flex justify-center space-x-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger><a href="#section1">About</a></NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger><a href="#section2">My Skills</a></NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger><a href="#section3">Contact Me</a></NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
