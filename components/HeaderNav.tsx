import { motion } from "framer-motion";
import React from "react";

type Props = {};

function HeaderNav({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-evenly max-w-3xl z-20 xl:items-center 
    flex-col text-center md:text-left px-10 mx-auto xs:hidden md:max-w-l invisible sm:visible"
    >
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="pt-2"
      >
        <button
          onClick={() => (window.location.href = "#hero")}
          className="heroButton hover:bg-[#ea5c1f] hover:border-none"
        >
          Home
        </button>
        <button
          onClick={() => (window.location.href = "#about")}
          className="heroButton hover:bg-[#ea5c1f] hover:border-none"
        >
          About
        </button>
        <button
          onClick={() => (window.location.href = "#experience")}
          className="heroButton hover:bg-[#ea5c1f] hover:border-none"
        >
          Experience
        </button>
        <button
          onClick={() => (window.location.href = "#skills")}
          className="heroButton hover:bg-[#ea5c1f] hover:border-none"
        >
          Skills
        </button>
        <button
          onClick={() => (window.location.href = "#projects")}
          className="heroButton hover:bg-[#ea5c1f] hover:border-none"
        >
          Projects
        </button>
      </motion.div>
    </header>
  );
}

export default HeaderNav;
