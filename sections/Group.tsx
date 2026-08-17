"use client";

import React from "react";
import Video from "@/components/ui/Video";
import { motion, useMotionValue } from "motion/react";
import Hero from "@/sections/Hero";
import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";

export default function Group() {
  const backgroundColor = useMotionValue("transparent");
  const projects = [
    {
      videoSrc: "/assets/videos/projects/the-hex.mp4",
      title: "The Hex - Warframe: 1999",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/azuki-elementals.mp4",
      title: "Azuki Elementals",
      linkToProject: "#",
    },
    {
      videoSrc: "/assets/videos/projects/marvel-snap.mp4",
      title: "Marvel Snap / Hero",
      linkToProject: "#",
    },
  ];

  return (
    <div className="relative max-w-screen overflow-x-clip lg:mb-[25vh]">
      <div className="sticky top-0 z-10 pb-[100vh]">
        <div className="h-screen">
          <Video src="/assets/videos/hero.mp4" />
        </div>
      </div>
      <Hero />
      <HighlightCard backgroundColor={backgroundColor} />
      <motion.div
        style={{ backgroundColor }}
        className="relative z-30 flex flex-col gap-[5vh] overflow-x-clip lg:gap-[15vh]"
      >
        {projects.map((eachProject) => (
          <ProjectCard key={eachProject.title} {...eachProject} />
        ))}
      </motion.div>
    </div>
  );
}
