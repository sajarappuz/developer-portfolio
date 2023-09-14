import { VscSend } from "react-icons/vsc";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import React from 'react'

const Contact = () => {
  return (
    <div className="md:mx-20 h-full mb-14">
        <h1 className='text-3xl uppercase text-center'>contact</h1>
        <h3 className='text-2xl mt-10 text-center font-mono'>Touch With Me</h3>
        <div className='flex'>
<div className='flex-1'>
            <h1>email</h1>
            <h4><FaEnvelope/></h4>
            <h4><FaPhone/></h4>
            <h1>message</h1>
        </div>
            <div className='flex-1'> 

           
        <form
          className='mt-8 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your good name?"
              className='bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              placeholder="What's your web address?"
              className='bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              
              placeholder='What you want to say?'
              className='bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-black py-3 px-8  rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-gray-400'
          >
           <VscSend/>
          </button>
        </form></div>
        
        </div>
    </div>
  )
}

export default Contact