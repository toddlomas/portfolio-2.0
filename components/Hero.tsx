/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'


type Props = {}

function Hero() {
  
  const [text, count] = useTypewriter({
      words: [
          "Todd Lomas",
          "a <Developer />",
          "a Hockey player",
          "a Food lover "
      ],
      loop:true,
      delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        
        <img
          src={"https://i.ibb.co/H4mss1w/headshot.jpg"}
          alt=""
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          />

          <div className='z-20'>
            <h2 className="text-sm uppercase text-[#ea5c1f] pb-2 tracking-[15px]">Software engineer</h2>
          
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 xs:text-5xs'>
            <span>I&apos;m {text}</span>
            <Cursor cursorColor='#4cc9f0' cursorBlinking/>
        </h1>

        <div className='pt-5'>
            
            <button onClick={()=>(window.location.href = "#about")} className='heroButton'>About</button>
            <button onClick={()=>(window.location.href = "#experience")} className='heroButton'>Experience</button>
            <button onClick={()=>(window.location.href = "#skills")} className='heroButton'>Skills</button>
            <button onClick={()=>(window.location.href = "#projects")} className='heroButton'>Projects</button>
          </div>
    </div>
    </div>
  )
}

export default Hero