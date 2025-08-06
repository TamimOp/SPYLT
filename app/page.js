"use client";
import HeroSection from "@/sections/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";
import MessageSection from "@/sections/MessageSection";
import FlavorSection from "@/sections/FlavorSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NutritionSection from "@/sections/NutritionSection";
import BenefitSection from "@/sections/BenefitSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Page = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
        </div>
      </div>
    </main>
  );
};

export default Page;
