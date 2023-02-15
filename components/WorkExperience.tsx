import { BoltIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { Suspense, use } from "react";
import { Experience } from "typings";
import ExperienceCard from "./ExperienceCard";
import HeaderNav from "./HeaderNav";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <HeaderNav />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl invisible sm:visible">
          experience
        </h3>
        <a
          className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-sm invisible sm:visible cursor-pointer animate-pulse"
          id="cvLink"
          href="https://emerald-oona-32.tiiny.site/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          click to view cv
        </a>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#ea5c1f]/30">
          {experiences?.map((experience) => (
            <ExperienceCard experience={experience} key={experience._id} />
          ))}
        </div>
      </motion.div>
    </Suspense>
  );
}

export default WorkExperience;
