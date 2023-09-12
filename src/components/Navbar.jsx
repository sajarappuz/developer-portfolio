import React from 'react'
import { HiHome } from "react-icons/hi";
import { FaBriefcase, FaFileCode, FaPersonBooth } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-[60px] w-full bg-slate-100'>
        <div className='flex  items-center justify-center'>
        <ul className='flex gap-8 py-4'> 
      <li className='text-2xl hover:text-3xl'>  <Link href="/"><HiHome/></Link></li>
       <li className='text-2xl hover:text-3xl'> <Link href="/services"> <FaBriefcase/></Link></li>
       <li className='text-2xl hover:text-3xl'><Link href="/"> <FaFileCode/></Link> </li>
       <li className='text-2xl hover:text-3xl'><Link href="/contact"> <FaPersonBooth/></Link></li></ul> 
        </div>
    </div>
  )
}

export default Navbar