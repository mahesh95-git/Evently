"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { navItems } from "../../../constant";
export default function DesktopNav() {
  const isActive = usePathname();

  return (
    <nav>
      <ul className="flex justify-center gap-14 text-[18px]">
        {/* {navItems.map((value) => (
          <li
            key={value.name}
            className={isActive&&isActive == value.path && "text-indigo-400"}
          >
            <Link href={value.path}>{value.name}</Link>
          </li>
        ))} */}
      </ul>
    </nav>
  );
}
