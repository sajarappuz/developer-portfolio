import { services } from '@/Data'
import React from 'react'

const About = () => {
  return (
    <div className='mx-30 w-full h-[100vh] md:h-[70vh]'>
         <h1 className='text-center text-4xl font-extrabold uppercase '>Services</h1>
         <h3 className='text-center mt-[20px] font-mono text-3xl'>What I Offer?</h3>
         <div className='flex flex-wrap gap-10 md:gap-20 mx-20 justify-evenly mt-[60px] mb-[60px] md:[mb-20px]'>
         {services.map((service, index) => (
  <div key={index} className='w-[400px] md:w-[250px] h-[200px] md:h-[200px] flex flex-col items-center justify-center rounded-[40px] bg-slate-300 gap-10 border-solid border-[2px] '>
    <h3 className='font-bold text-3xl'>{service.icon}</h3>
    <h1 className='text-lg md:text-xl font-medium md:font-mono'>{service.title}</h1>
  </div>
))}
         </div>

    </div>
  )
}

export default About