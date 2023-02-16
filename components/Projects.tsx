/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { Suspense, use, useState } from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Project } from "typings";
import HeaderNav from "./HeaderNav";

type Props = {
  projects: Project[];
};

function urlFor(source: any) {
  const sanityClient = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-08-31",
    useCdn: process.env.NODE_ENV === "production",
  });
  const builder = imageUrlBuilder(sanityClient);

  return builder.image(source);
}

function Projects({ projects }: Props) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <HeaderNav />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
      >
        <h3 className="absolute top-10 uppercase tracking-[0px] sm:tracking-[20px] text-gray-500 text-sm md:text-2xl mx-auto">
          Projects & Courses
        </h3>

        <div className="max-h-[800px] relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ea5c1f]/80">
          {projects.map((project: any, i: any) => (
            <div
              key={project}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center p-20 md:p-30 h-screen"
            >
              <motion.img
                className="sm:h-[300px] sm:w-[500px] h-[9rem] w-[13rem]"
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={urlFor(project?.image.asset._ref).url()}
                alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl md:text-3xl font-light sm:font-semibold text-center mt-10">
                  <span className="text-gray-300">
                    Case study {i + 1} of {projects.length}
                  </span>
                  : <br />
                  <span className="tracking-[0.3rem] text-[#ea5c1f]">
                    {project.title}
                  </span>
                </h4>
                <div className="flex items-center space-x-2 justify-center object-cover">
                  {project?.technologies
                    .map((technology: any) => (
                      <img
                        className="h-10 w-10 sm:h-10 sm:w-10"
                        src={urlFor(technology?.image).url()}
                        alt=""
                        key={technology._id}
                      />
                    ))
                    .sort()}
                </div>
                <p className="text-lg text-center md:text-left">
                  {project.summary} <br />{" "}
                  {project?.linkToBuild ? (
                    <span className="italic">
                      Check it out :{" "}
                      <a
                        className="underline text-blue-400"
                        href={project?.linkToBuild}
                      >
                        {project.title}
                      </a>
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#ea5c1f]/10 left-0 h-[500px] -skew-y-12" />
      </motion.div>
    </Suspense>
  );
}

export default Projects;
