import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#2f3a4d] rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-[#2f3a4d] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#ea5c1f] rounded-full h-[700px] w-[700px] mt-52 opacity-30 animate-pulse" />
      <div className="absolute border border-[#2f3a4d] rounded-full h-[800px] w-[800px] mt-52 animate-pulse" />
      <div className="absolute border border-[#ea5c1f] rounded-full h-[1200px] w-[1200px] mt-52 opacity-20 animate-[ping_3s_ease-in-out_infinite]" />
      <div className="absolute border border-[#ea5c1f] rounded-full h-[1500px] w-[1500px] mt-52 opacity-10" />
      <div className="absolute border border-[#2f3a4d] rounded-full h-[1700px] w-[1700px] mt-52 opacity-70" />
    </motion.div>
  );
}

export default BackgroundCircles;
