"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faChartLine,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Logout from "@/components/buttons/Logout";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const path = usePathname();
  return (
    <div>
      <div className="flex flex-col justify-center mt-8 gap-8 text-slate-300">
        <Link
          href={"/account"}
          className={
            "hover:underline hover:text-white flex justify-center items-center gap-4 " +
            (path === "/account"
              ? "text-yellow-400 hover:text-yellow-400 scale-[1.3] font-bold"
              : "")
          }
        >
          <FontAwesomeIcon icon={faFileLines} className="h-6" />
          <span>My Page</span>
        </Link>
        <Link
          href={"/analytics"}
          className={
            "hover:underline hover:text-white flex justify-center items-center gap-4 " +
            (path === "/analytics"
              ? "text-yellow-400 hover:text-yellow-400 scale-[1.3] font-bold"
              : "")
          }
        >
          <FontAwesomeIcon icon={faChartLine} className="h-6" />
          <span>Analytics</span>
        </Link>
        <Link
          href={"/"}
          className="hover:underline hover:text-white flex justify-center items-center gap-4"
        >
          <FontAwesomeIcon icon={faHome} className="h-6" />
          <span>Home</span>
        </Link>
        <Logout />
      </div>
    </div>
  );
}
