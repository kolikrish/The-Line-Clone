"use client";
import { Dispatch, ReactNode, SetStateAction } from "react";
import AccordianItem from "@/components/AccordianItem";
import Link from "next/link";

export default function AccordianGroup({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}) {
  const addressLines = [
    "The Line Animation Studio Ltd",
    "Studio 02",
    "De Beauvoir Block, 92–96",
    "De Beauvoir Road",
    "London, N1 4EN",
  ];

  const socialMediaLinks = [
    { name: "YouTube", href: "#" },
    {
      name: "Instagram",
      href: "#",
    },
    { name: "TikTok", href: "#" },
    { name: "X", href: "#" },
    { name: "Facebook", href: "#" },
    {
      name: "LinkedIn",
      href: "#",
    },
  ];
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Work", href: "#" },
    { label: "Entertainment", href: "#" },
    { label: "About", href: "#" },
    { label: "Feed", href: "#" },
    { label: "Podcast", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Shop", href: "#" },
  ];
  const accordianItems: { label: string; content: ReactNode }[] = [
    {
      label: "Find",
      content: (
        <Link href="#" className="flex flex-col">
          {addressLines.map((eachLine, i) => (
            <span key={`addressLines[${i}]`}>{eachLine}</span>
          ))}
        </Link>
      ),
    },
    {
      label: "Social",
      content: (
        <>
          {socialMediaLinks.map(({ name, ...href }, i) => (
            <Link key={`socialMedia[${i}]`} {...href}>
              {name}
            </Link>
          ))}
        </>
      ),
    },
    {
      label: "Nav",
      content: (
        <>
          {navItems.map(({ label, ...href }, i) => (
            <Link key={`navItems[${i}]`} {...href}>
              {label}
            </Link>
          ))}
        </>
      ),
    },
  ];

  return (
    <>
      {accordianItems.map(({ label, content }, index) => (
        <AccordianItem
          key={index}
          label={label}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {content}
        </AccordianItem>
      ))}
    </>
  );
}
