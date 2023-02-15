"use client";
import React, { Suspense, use } from "react";
import { motion } from "framer-motion";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import HeaderNav from "./HeaderNav";
import { PageInfo } from "typings";

type Props = {
  pageInfo: PageInfo;
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

function About({ pageInfo }: Props) {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <HeaderNav />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl invisible sm:visible">
          About
        </h3>
        <motion.img
          src={urlFor(pageInfo?.profilePic.asset._ref).url()}
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          alt=""
          className="mt-10 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold invisible sm:visible">
            Here is a <span className="italic animate-pulse">little</span>{" "}
            background
          </h4>
          <div>
            <p className="text-base text-gray-400">
              {pageInfo?.backgroundInformation.slice(0, 379)} <br />
              <br /> {pageInfo?.backgroundInformation.slice(379)}
            </p>
          </div>
        </div>
      </motion.div>
    </Suspense>
  );
}

export default About;
