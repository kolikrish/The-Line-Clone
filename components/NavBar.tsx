"use client";

import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, cubicBezier, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BackgroundImage from "@/public/assets/images/side-bar-background.png";
import { Logo, Burger, Close, Arrow } from "@/components/Icons";
import { useIsDesktop } from "@/providers/WindowSizeProvider";
import { useNavThemeValue } from "@/providers/NavThemeProvider";
import List from "@/components/List";
import Label from "@/components/Label";
import HoverReveal from "@/components/HoverReveal";
import { cn } from "@/utils/cn";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Podcast", href: "#" },
  { label: "Contact", href: "#" },
];

export default function NavBar() {
  const isDesktop = useIsDesktop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navTheme = useNavThemeValue();

  return (
    <>
      <motion.div
        initial={navTheme}
        animate={navTheme}
        variants={{ light: { color: "#f8f8f8" }, dark: { color: "#0b0b0b" } }}
        className="fixed top-6 z-[60] flex w-full p-2 max-lg:justify-between lg:grid lg:grid-cols-9 lg:gap-x-[.46296vw] lg:p-[0.46296vw]"
      >
        <Link
          className="col-span-2 h-[22px] w-[126px] lg:h-[1.27315vw] lg:w-[7.29167vw]"
          href="#"
          aria-label="The Line Studio"
        >
          <Logo />
        </Link>
        {typeof isDesktop == "boolean" &&
          (isDesktop ? (
            <NavBarDesktop />
          ) : (
            <NavBarMobile
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          ))}
      </motion.div>
      <SideBar isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
    </>
  );
}

function NavBarDesktop() {
  return (
    <>
      <OpenTimings />

      <HoverReveal
        className="max-lg:hidden"
        beforeHover="LONDON,ENGLAND"
        afterHover={
          <Link href="#">
            info@thelinestudio.com
          </Link>
        }
      />

      <div className="col-span-5 flex items-center justify-end gap-[0.28935vw]">
        <List>
          {navItems.map((eachNavItem) => (
            <NavItem key={eachNavItem.href} {...eachNavItem} />
          ))}
        </List>
      </div>
    </>
  );
}

function NavBarMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      aria-label="Open/Close sidebar"
      className="h-[14px] w-13"
    >
      {isMobileMenuOpen ? <Close /> : <Burger />}
    </button>
  );
}

function SideBar({
  isMobileMenuOpen,
  isDesktop,
}: {
  isMobileMenuOpen: boolean;
  isDesktop: boolean | null;
}) {
  return (
    <AnimatePresence>
      {isDesktop === false && isMobileMenuOpen && (
        <motion.div
          initial={{ x: "20%", y: "-110%", rotate: "8deg" }}
          animate={{ x: "0%", y: "0%", rotate: "0deg" }}
          exit={{ x: "20%", y: "-110%", rotate: "8deg" }}
          transition={{
            duration: 0.8,
            ease: cubicBezier(0.14, 1, 0.34, 1),
          }}
          className="fixed top-0 z-[50] h-screen w-full bg-cool-gray"
        >
          <motion.div
            initial={{ x: "30%", y: "-80%", rotate: "14deg" }}
            animate={{ x: "0%", y: "0%", rotate: "0deg" }}
            exit={{ x: "30%", y: "-80%", rotate: "14deg" }}
            transition={{
              duration: 0.8,
              ease: cubicBezier(0.14, 1, 0.34, 1),
              delay: 0.1,
            }}
            className="flex h-screen w-full flex-col justify-between bg-flare-red p-2 text-off-white"
          >
            <div className="absolute inset-x-0 bottom-0 z-10 opacity-50 [mix-blend-mode:multiply]">
              <Image className="h-auto w-full" src={BackgroundImage} alt="" />
            </div>
            <div className="relative z-20 px-2 py-[70px]">
              {navItems.map((eachNavItem) => (
                <NavItem key={eachNavItem.href} {...eachNavItem} />
              ))}
            </div>
            <div className="relative z-20 space-y-[14px] pb-1.5">
              <Label>
                <span className="font-light">/&nbsp;</span>
                {"Let's talk"}
              </Label>
              <Link
                className="relative flex items-center justify-between text-[24px] leading-[0.95] font-[440] tracking-[-0.01em]"
                href="#"
              >
                <span>info@thelineanimation.com</span>
                <Arrow fill="#f8f8f8" />
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-off-white" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavItem({
  href,
  label,
  className,
}: {
  href: string;
  label: string | ReactNode;
  className?: string;
}) {
  const currentPath = usePathname();
  return (
    <>
      <style>
        {`
      #nav-item {
        --circle-size: 32px;
      }
      @media (min-width: 1024px) {
        #nav-item {
          --circle-size: 0.86806vw;
        }
      }
    `}
      </style>
      <Link href={href} id="nav-item">
        <motion.div
          initial="initial"
          whileHover="whileHover"
          className={cn(
            "flex items-center text-[46px] leading-[0.8] font-[470] tracking-[-0.03em] lg:text-[1.27315vw] lg:leading-[0.85] lg:font-[440] lg:tracking-[-0.01em]",
            className,
          )}
        >
          <AnimatePresence mode="sync" initial={false}>
            {currentPath === href && (
              <motion.span
                key={currentPath}
                initial={{ width: "0px", height: "0px" }}
                exit={{ width: "0px", height: "0px" }}
                animate={{
                  width: "var(--circle-size)",
                  height: "var(--circle-size)",
                }}
                className="inline-block size-8 shrink-0 rounded-full bg-off-white lg:size-[0.86806vw] lg:bg-flare-red"
              >
                &nbsp;
              </motion.span>
            )}
          </AnimatePresence>
          <span className={cn(currentPath === href && "lg:text-flare-red")}>
            {label}
          </span>
        </motion.div>
      </Link>
    </>
  );
}

function OpenTimings() {
  const [isStudioOpen, setIsStudioOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const londonTimeIn24 = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/london",
      hour: "2-digit",
      hour12: false,
    }).format(new Date());
    setIsStudioOpen(Number(londonTimeIn24) > 10 && Number(londonTimeIn24) < 18);
  }, []);

  if (isStudioOpen == null) {
    return null;
  }
  return (
    <span>
      <Label>
        <span
          className={cn(
            "inline-block rounded-full p-[0.23148vw]",
            isStudioOpen ? "bg-flare-red" : "bg-void-black",
          )}
        />
        &nbsp; {isStudioOpen ? "Open" : "Closed"}&nbsp;(10—6pm)
      </Label>
    </span>
  );
}
