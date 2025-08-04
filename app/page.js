import HeroSection from "@/sections/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";
import MessageSection from "@/sections/MessageSection";

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
    </main>
  );
};

export default page;
