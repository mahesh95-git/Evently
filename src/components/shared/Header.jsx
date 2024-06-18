import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-2 h-14 border-b  border-slate-100">
      <div>
        <h1 className="text-2xl font-medium ">EVENTLY</h1>
      </div>
      <div className="flex-1 hidden md:block font-medium">
      <DesktopNav/>
      </div>
       
       <div className="flex  gap-8 justify-around  items-center">
        <div className="md:mr-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/"/>
        </SignedIn>
        <SignedOut>
          <Button className="bg-indigo-400">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
        </div>
       <div className="md:hidden mr-4">
        <MobileNav/>
       </div>
       </div>
    </div>
  );
}
