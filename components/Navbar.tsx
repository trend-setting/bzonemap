"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";
import pmsalogo from "@/public/pmsalogo.png";
import { FaHome } from "react-icons/fa";
import { PiMicrophoneFill } from "react-icons/pi";
import { IoIosInformationCircle } from "react-icons/io";

export function SidebarDemo() {
  const handleLinkClick = () => {
    setOpen(false); // Close the sidebar when a link is clicked
  };

  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <FaHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleLinkClick,
    },
    {
      label: "Stages",
      href: "/programme",
      icon: (
        <PiMicrophoneFill className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleLinkClick,
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <IoIosInformationCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleLinkClick,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex md:flex-row bg-gray-100 dark:bg-neutral-800  flex-1  mx-[2dvw] border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[6dvh] mt-[5dvh] md:h-[90dvh] md:w-[16dvw] sm:min-w-64" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link) => (
                <SidebarLink
                  key={link.label}
                  link={link}
                  onClick={handleLinkClick}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "13th Wafy fest",
                href: "https://www.instagram.com/wafyfest/",
                icon: (
                  <Image
                    src={logo}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src={pmsalogo}
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        PMSA Map
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
