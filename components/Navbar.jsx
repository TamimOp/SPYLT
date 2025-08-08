import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
      <div className="group cursor-pointer">
        <Image
          src="/images/nav-logo.svg"
          alt="nav-logo"
          width={96}
          height={96}
          className="md:w-24 w-20 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-[0_0_20px_rgba(226,164,88,0.6)] group-hover:brightness-110"
        />
      </div>
    </nav>
  );
};

export default Navbar;
