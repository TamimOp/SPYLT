import HeroSection from "@/sections/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";
import MessageSection from "@/sections/MessageSection";
import FlavorSection from "@/sections/FlavorSection";

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
    </main>
  );
};

export default page;
