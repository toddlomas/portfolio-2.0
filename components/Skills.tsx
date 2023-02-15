import { motion } from "framer-motion";
import React, { Suspense, use } from "react";
import { Skill as SkillType } from "typings";
import HeaderNav from "./HeaderNav";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <HeaderNav />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for current proficiency
        </h3>
        <div className="grid grid-cols-4 gap-5 pt-[100px]">
          {skills?.slice(0, skills.length / 2).map((skill: any) => (
            <Skill skill={skill} key={skill._id} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill: any) => (
            <Skill skill={skill} key={skill._id} directionLeft />
          ))}
        </div>
      </motion.div>
    </Suspense>
  );
}

export default Skills;
