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
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("ToddLomas-SoftwareEngineer-CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "toddlomas-cv.pdf";
        alink.click();
      });
    });
  };
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
          className="absolute top-24 uppercase tracking-[10px] text-white-500 text-sm invisible sm:visible cursor-pointer animate-pulse"
          id="cvLink"
          onClick={onButtonClick}
        >
          click to download cv
        </a>
        <div className="max-h-30 w-full flex space-x-5 p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#ea5c1f]/30">
          {experiences?.map((experience) => (
            <ExperienceCard experience={experience} key={experience._id} />
          ))}
        </div>
      </motion.div>
    </Suspense>
  );
}

export default WorkExperience;
