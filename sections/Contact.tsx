"use client";

import CallToAction from "@/components/ui/CallToAction";
import ShowOnDesktop from "@/components/ui/ShowOnDesktop";
import { LogoWithTrademark } from "@/components/Icons";
import { cn } from "@/utils/cn";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  return (
    <section className="relative z-20">
      <ContactMobile className="lg:hidden" />
      <ShowOnDesktop>
        <ContactDesktop />
      </ShowOnDesktop>
    </section>
  );
}

function ContactDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "1 0"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-12deg"]);

  return (
    <motion.div
      ref={ref}
      style={{ x, rotate }}
      className="origin-[0%_50%] bg-off-white"
    >
      <CallToAction />
      <ClosingLogoBlock />
    </motion.div>
  );
}

function ContactMobile({ className }: { className?: string }) {
  return (
    <div className={cn("bg-off-white", className)}>
      <CallToAction />
      <ClosingLogoBlock />
    </div>
  );
}

function ClosingLogoBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "px-2 pt-[250px] pb-2 lg:px-[0.46296vw] lg:pt-[17.36111vw] lg:pb-[0.46296vw]",
        className,
      )}
    >
      <LogoWithTrademark className="h-auto w-full" />
    </div>
  );
}
