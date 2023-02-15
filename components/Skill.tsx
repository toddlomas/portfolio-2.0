import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from 'typings'
import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source: any) {
  const sanityClient = createClient({
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !,
      apiVersion: "2021-08-31",
      useCdn: process.env.NODE_ENV === "production",
  });
  const builder = imageUrlBuilder(sanityClient)
    
  return builder.image(source)
}

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

function Skill({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x:directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity:1, x: 0}}
        src={urlFor(skill?.image.asset._ref).url()} alt=""
        className='rounded-full border border-gray-500 object-contain w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out' />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl text-black opacity-100'>{skill?.progress}% <br/>{skill?.title} </p>
            </div>
        </div>
    </div>
  )
}

export default Skill