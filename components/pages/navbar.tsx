import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skill", href: "#skill" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <nav className="w-full bg-[#cde8e5] py-4 px-6 md:px-12 flex justify-between items-center shadow-md sticky top-0 z-50">
        <Link href="/" className="text-3xl font-black text-black">
          AR!
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium hover:text-black transition-colors p-2"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:bg-black/10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-white w-[300px] flex flex-col h-full"
            >
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="text-2xl font-bold">AR!</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 items-center grow">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-gray-600 hover:text-black hover:bg-gray-50 py-3 px-2 rounded-md transition-all border-b border-gray-100"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
