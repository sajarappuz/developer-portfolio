import { projects } from '@/Data'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='md:mx-20 h-full'>
       <h1 className='text-center text-3xl'>PROJECTS</h1>
       <h3 className='font-mono text-2xl text-center mt-[40px]'>What I Have Done So Far..!!</h3>
       <div>
        {projects.map((project,index)=>(

       <div key={index}>
        <div className='flex-1'> 
            <Image src={project.img} alt='image' width={450} height={450} className='object-contain'/>
        </div>
        <div className='flex-1'>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>

        </div> </div>))}
       </div>
    </div>
    
  )
}

export default Projects