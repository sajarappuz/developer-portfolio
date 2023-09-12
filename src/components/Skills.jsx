import { backend, frontend, otherskill } from '@/Data'
import React from 'react'

const Skills = () => {
  return (
    <div className=' mx-5 md:mx-20 mt-[100px] md:mt-[10px] h-full '>
      <h1 className='text-center text-4xl font-extrabold uppercase mt-6 '>SKILLS</h1>
       <h3 className="text-center mt-[20px] font-mono text-3xl">What I Know?</h3>
       <div>
        <h2 className='text-center mt-[20px] font-mono text-3xl'>Front-End Skills</h2>
        <div className='flex flex-wrap gap-10 md:mx-20 justify-evenly mt-[60px]'>
            {frontend.map((front,index)=>(
                <div key={index} className=' w-[120px]  md:w-[200px] h-[100px] flex flex-col items-center justify-center rounded-[20px]  gap-5 border-solid border-[2px] border-black hover:bg-black hover:text-white'>
                    <h3 className='text-4xl md:text-2xl '>{front.icon}</h3>
                    <h1 className='font-mono text-xl hidden md:block'>{front.title}</h1>
                </div>
            ))}
        </div>
       </div>
       <div className='mt-[50px]'>
        <h2 className='text-center mt-[20px] font-mono text-3xl'>Back-End Skills</h2>
        <div className='flex flex-wrap gap-10 md:mx-20 justify-evenly mt-[60px]'>
            {backend.map((back,index)=>(
                <div key={index} className='w-[120px] md:w-[150px] h-[100px] hover:bg-black hover:text-white flex flex-col items-center justify-center rounded-[15px] gap-5 border-solid border-[2px] border-black'>
                    <h3 className=' text-4xl  md:text-2xl '>{back.icon}</h3>
                    <h1 className='font-mono text-xl hidden md:block'>{back.title}</h1>
                </div>
            ))}
        </div>
       </div>
       <div className='mt-[50px]'>
        <h2 className='text-center mt-[20px] font-mono text-3xl'>Other Skills</h2>
        <div className='flex flex-wrap gap-10 md:mx-20 justify-evenly mt-[60px]'>
            {otherskill.map((others,index)=>(
                <div key={index} className='w-[120px] md:w-[150px] h-[100px] hover:bg-black hover:text-white flex flex-col items-center justify-center rounded-[15px] gap-5 border-solid border-[2px] border-black'>
                    <h3 className=' text-4xl  md:text-2xl '>{others.icon}</h3>
                    <h1 className='font-mono text-xl hidden md:block'>{others.title}</h1>
                </div>
            ))}
        </div>
       </div>
    </div>
  )
}

export default Skills