"use client";
import React, { use, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <>
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center invisible sm:visible">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center"
        >
          {/* Social Icons */}

          {socials.map((social: any) => (
            <SocialIcon
              className="cursor-pointer text-[#ea5c1f] rounded-full filter grayscale hover:grayscale-0"
              fgColor="#ea5c1f"
              bgColor="transparent"
              key={social._id}
              url={social.url}
            />
          ))}
        </motion.div>

        <motion.div
          onClick={() => (window.location.href = "#contact")}
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer text-[#ea5c1f] rounded-full filter grayscale hover:grayscale-0"
            network="email"
            fgColor="#ea5c1f"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-[#ea5c1f] filter grayscale hover:grayscale-0">
            Get in touch
          </p>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
