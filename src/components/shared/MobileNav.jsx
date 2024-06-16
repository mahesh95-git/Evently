"use client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { navItems } from "../../../constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MobileNav() {
  const isActive = usePathname();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex gap-7 flex-col">
          <ul className="flex gap-8 flex-col  ">
            <li className="font-semibold text-[18px]">EVENTLY</li>
            <Separator />
            {navItems.map((value) => (
              <li key={value.name} className={isActive == value.path && "text-indigo-400"}>
                <Link href={value.path}>{value.name}</Link>
              </li>
            ))}
           
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
