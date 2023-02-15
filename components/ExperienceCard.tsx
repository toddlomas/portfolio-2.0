/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Experience } from "typings";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { fetchExperiences } from "utils/fetchExperiences";
import { BoltIcon } from "@heroicons/react/24/solid";

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

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const isMostRecent = experience.mostRecent;

  return (
    <div>
      <article
        className={`flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] snap-center bg-[#313548] p-10 hover:opacity-100 ${
          isMostRecent ? "opacity-100" : "opacity-40"
        } cursor-pointer transition-opacity duration-200 overflow-hidden h-[700px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#ea5c1f]/30`}
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={urlFor(experience?.companyImage.asset._ref).url()}
          alt="qflow-image"
          className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        ></motion.img>
        <div className="px-0 md:px-10s">
          <h4 className="text-4xl font-light">
            {experience.jobTitle} &nbsp;&nbsp;&nbsp;
            <span>
              {experience.mostRecent === true ? (
                <BoltIcon
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className="h-[30px] w-[30px] inline-block text-yellow-500"
                />
              ) : (
                ""
              )}
            </span>
            {isHovering ? (
              <div className="text-sm left-20 text-yellow-500 text-center mt-4">
                Most Recent Position
              </div>
            ) : (
              ""
            )}
          </h4>
          <p className="font-bold text-2xl mt-1">{experience.company}</p>

          <div className="flex space-x-2 my-2">
            {experience.technologies?.map((exp) => (
              <img
                key={exp._id}
                className="h-10 w-10 rounded-full object-cover"
                src={urlFor(exp.image.asset._ref).url()}
                alt=""
              />
            ))}
          </div>

          <p className="uppercase py-5 text-gray-300">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <ul className="list-disc space-y-4 ml-5 text-lg h-80 w-60">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default ExperienceCard;
