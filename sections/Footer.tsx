"use client";

import FooterBackground from "@/public/assets/images/footer-background.png";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import Input from "@/components/Input";
import List from "@/components/List";
import Label from "@/components/Label";
import BlinkText from "@/components/ui/BlinkText";
import UnderlineOnHover from "@/components/ui/UnderlineOnHover";
import AccordianGroup from "@/components/ui/AccordianGroup";
import { useIsDesktop } from "@/providers/WindowSizeProvider";
import * as motion from "motion/react-client";
import { cn } from "@/utils/cn";

export default function Footer() {
  const nodes: ReactNode[] = [
    <React.Fragment key="credits">Site Credits</React.Fragment>,
    <Link key="privacy" href="#">Privacy</Link>,
    <Up key="up" />,
  ];

  return (
    <div className="sticky bottom-6 z-0 h-fit px-8 pt-2 text-off-white selection:bg-off-white selection:text-flare-red lg:grid lg:grid-cols-9">
      <FooterDesktop />
      <FooterMobile />
      <Input className="relative z-20 col-span-3 col-start-1" />
      <div className="col-span-5 col-start-6 flex justify-between text-[14px] leading-[0.85] font-[470] tracking-[-0.01em] uppercase max-lg:pt-6 max-lg:pb-2 lg:items-end lg:justify-end lg:text-[1.27315vw] lg:font-regular-plus">
        <span className="inline lg:hidden">© 2025</span>
        <span className="hidden lg:inline">
          © THE LINE ANIMATION STUDIO 2025 &nbsp;
          <span className="font-light">/</span>
          &nbsp;
        </span>
        <List>
          {nodes.map((node, i) => (
            <BlinkText key={i} repeat={1} className="cursor-pointer">
              {node}
            </BlinkText>
          ))}
        </List>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[20.51282vw] z-10 w-[138.46154vw] opacity-[0.2] mix-blend-multiply grayscale-[0.3] lg:left-[29%] lg:w-[26.04167vw] lg:opacity-100"
      >
        <Image className="h-auto w-full" src={FooterBackground} alt="" />
      </div>
    </div>
  );
}

function Up() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <button
      className="text-[14px] leading-[0.85] font-[470] tracking-[-0.01em] uppercase lg:text-[1.27315vw] lg:font-regular-plus"
      onClick={handleClick}
    >
      Up
    </button>
  );
}

function ReachOut({ className }: { className?: string }) {
  return (
    <motion.div
      layoutId="reach-out"
      className={cn("relative z-20 text-off-white max-lg:py-[30px]", className)}
    >
      <Label className="mb-3 lg:mb-[1.44676vw]"></Label>
      <div className="flex flex-col text-[24px] leading-[.95] font-[440] tracking-[-.01em] lg:text-[1.85185vw] lg:leading-[1.1] lg:font-[470] lg:tracking-[-0.01em]">
        <UnderlineOnHover underlineColor="#f8f8f8" className="w-fit">
          <Link href="#">
            info@thelinestudio.com
          </Link>
        </UnderlineOnHover>
        <div className="flex">
          /&nbsp;
          <UnderlineOnHover underlineColor="#f8f8f8" className="w-fit">
            <Link href="#">44 (0)20 30020224</Link>
          </UnderlineOnHover>
        </div>
      </div>
    </motion.div>
  );
}

function FooterDesktop() {
  const addressLines = [
    "The Line Animation Studio Ltd",
    "Studio 02",
    "De Beauvoir Block, 92–96",
    "De Beauvoir Road",
    "London, N1 4EN",
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

  return (
    <>
      <ReachOut className="col-span-2 max-lg:hidden" />
      <div className="col-span-4 col-start-6 flex gap-x-[6.42361vw] text-[1.15741vw] leading-[1.1] font-[440] tracking-[-0.01em] text-off-white max-lg:hidden lg:pb-[7.98611vw]">
        <div className="space-y-[1.44676vw]">
          <Label>
            <span className="font-light">/</span>&nbsp; Find us
          </Label>
          <Link href="#">
            <motion.div
              initial="initial"
              whileHover="whileHover"
              variants={{
                whileHover: { transition: { staggerChildren: 0.075 } },
              }}
              className="cursor-pointer"
            >
              {addressLines.map((eachAddressLine) => (
                <UnderlineOnHover
                  underlineColor="#f8f8f8"
                  key={eachAddressLine}
                  initial={false}
                  whileHover={undefined}
                >
                  {eachAddressLine}
                </UnderlineOnHover>
              ))}
            </motion.div>
          </Link>
        </div>
        <div className="space-y-[1.44676vw]">
          <Label>
            <span className="font-light">/</span>&nbsp; Find us
          </Label>
          <div>
            {socialMediaLinks.map(({ name, href }) => (
              <UnderlineOnHover underlineColor="#f8f8f8" key={name}>
                <Link href={href}>{name}</Link>
              </UnderlineOnHover>
            ))}
          </div>
        </div>
        <div className="space-y-[1.44676vw]">
          <Label>
            <span className="font-light">/</span>&nbsp; Find us
          </Label>
          <div>
            {navItems.map(({ label, href }) => (
              <UnderlineOnHover underlineColor="#f8f8f8" key={label}>
                <Link href={href}>{label}</Link>
              </UnderlineOnHover>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FooterMobile() {
  const isDesktop = useIsDesktop();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  if (isDesktop !== false) {
    return null;
  }
  return (
    <>
      <ReachOut />
      <AccordianGroup
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
}
