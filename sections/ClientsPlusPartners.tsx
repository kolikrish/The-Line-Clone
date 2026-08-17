"use client";

import Label from "@/components/Label";
import {
  BrandBlizzard as Blizzard,
  BrandHonda as Honda,
  BrandMarvel as Marvel,
  BrandMercedes as Mercedes,
  BrandRiotGames as RiotGames,
  Play,
} from "@/components/Icons";
import List from "@/components/List";
import Video from "@/components/ui/Video";
import IntersectionObserverPlane from "@/components/IntersectionObserverPlane";
import { motion } from "motion/react";

function ClientsPlusPartners() {
  const brands = [
    "Gucci",
    <RiotGames key="riot" />,
    "Mercedes-Benz",
    <Marvel key="marvel" />,
    "Virgin",
    "Gorillaz",
    "Garena",
    <Mercedes key="mercedes" />,
    "Doritos",
    "Estee Lauder",
    "Kenzo",
    "Unilever",
    "Vice",
    "Sanrio",
    "Freeview",
    <Blizzard key="blizzard" />,
    "Honda",
    "Channel 4",
    "Ubisoft",
    <Honda key="honda" />,
    "Azuki",
  ];

  return (
    <section className="bg-off-white pt-[160px] lg:pt-[19.054722vw]">
      <div className="px-2 lg:px-[0.46296vw]">
        <Label>
          <span className="font-[300]">/&nbsp;</span>
          Clients + Partners
        </Label>
        <List className="flex-wrap pt-4 pb-2 text-[32px] leading-none font-[470] tracking-[-0.01em] lg:pt-[0.69444vw] lg:pb-[0.5787vw] lg:text-[3.7037vw] lg:leading-[0.95]">
          {brands}
        </List>
      </div>
      <div className="relative flex aspect-[390/783] items-center justify-center overflow-hidden md:aspect-[390/220] lg:px-[0.46296vw]">
        <div className="h-full w-full bg-red-300"></div>
        <ClientsPlusPartnersClient />
      </div>
    </section>
  );
}

function ClientsPlusPartnersClient() {
  return (
    <motion.div
      whileTap="scaleDown"
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <Video src="/assets/videos/hero.mp4" />
      <IntersectionObserverPlane
        setThemeTo="light"
        setThemeFrom="dark"
        className="absolute inset-x-0 top-0 h-10"
      />
      <div className="absolute aspect-square w-[303px] text-off-white md:w-[41.84028vw]">
        <motion.div
          variants={{
            scaleDown: {
              scale: 0.95,
              transition: {
                duration: 0.6,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1],
              },
            },
          }}
          className="absolute inset-0 z-10 bg-[#ff0000] [mix-blend-mode:multiply]"
        />
        <motion.div
          variants={{
            scaleDown: {
              scale: 0.95,
              transition: {
                duration: 0.6,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1],
              },
            },
          }}
          className="relative z-20 size-full text-[40px] leading-[0.85] font-regular-plus tracking-[-0.03em] md:gap-[1.09954vw] lg:text-[7.40741vw] lg:font-[470]"
        >
          <div className="hidden justify-between md:flex lg:p-[.23148vw]">
            <Label>
              Showreel&nbsp;<span className="font-light">/</span>&nbsp;2024
            </Label>
            <Label>
              <span className="inline-block size-[0.46296vw] rounded-full bg-off-white" />
              &nbsp; 1:26
            </Label>
            <Label>The Line © MMXXV</Label>
          </div>
          <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-[1.09954vw]">
            <Play />
            <span>Reel</span>
          </div>
        </motion.div>
      </div>
      <IntersectionObserverPlane
        setThemeTo="dark"
        setThemeFrom="light"
        className="absolute inset-x-0 bottom-0 h-10"
      />
    </motion.div>
  );
}

export default ClientsPlusPartners;
