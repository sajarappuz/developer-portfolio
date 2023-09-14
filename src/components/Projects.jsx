import { projects } from '@/Data'
import Image from 'next/image'
import React from 'react'
import { VscCode } from "react-icons/vsc";
import { FaGlobe } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='md:mx-20 h-full'>
       <h1 className='text-center text-3xl'>PROJECTS</h1>
       <h3 className='font-mono text-2xl text-center mt-[40px]'>What I Have Done So Far..!!</h3>
       <div className='mt-20'>
        {projects.map((project,index)=>(

       <div key={index} className='flex flex-col md:flex-row even:flex-row-reverse mx-20 mb-10 '>
        <div className='flex-1 '> 
            <Image src={project.img} alt='image' width={450} height={500} className='object-contain'/>
        </div>
        <div className='flex-1 '>
            <h1 className='font-mono text-2xl'>{project.title}</h1>
            <p className='text-xl'>{project.desc}</p>
            <div className='mt-6'>
             <button className="w-15 h-12 mr-20 bg-black text-white text-2xl rounded-md p-3"><VscCode/></button>
             <button className="w-15 h-12 bg-black text-white text-2xl rounded-md p-3"><FaGlobe/></button></div>
        </div> </div>))}
       </div>
    </div>
    
  )
}

export default Projects