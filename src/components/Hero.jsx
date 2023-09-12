'use client'
import React from 'react'
import Image from 'next/image';
import { SiGithub,SiLinkedin } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row mx-16 mt-20 h-[86vh]'>
        <div className='flex-1 flex flex-col items-center justify-center'>
            <h1 className='md:text-3xl  text-xl mb-1 md:mb-3'>HI THERE</h1> 
            <h1 className='md:text-3xl  text-xl font-mono mb-2 md:mb-5'>I am Sajar Mohammed</h1>
            <span className='font-mono  text-sm md:text-3xl'>
         <TypeAnimation
      sequence={[
        'I am a Front-End Developer', // Types 'One'
        1000, // Waits 1s
        'I am a UI/UX Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'I am a Mern Stack Developer', // Types 'Three' without deleting 'Two'
        
      ]}
      wrapper="span"
      speed={20}
      cursor={true}
      repeat={Infinity}
      style={{ fontWeight:"bold" }}
    /></span>
       <div className='flex mt-[30px] gap-10'>
        <span className='text-3xl'><SiGithub/></span>
        <span className='text-3xl'><SiLinkedin/></span>
        </div>
    </div>
    <div className='flex-1 mt-10 md:mt-0'>
       <Image src="/download.png" width={400} height={400}/>
    </div>
    </div>
  )
}

export default Hero