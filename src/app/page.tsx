/* eslint-disable react/no-unescaped-entities */
'use client';

import {FaArrowRight} from 'react-icons/fa'
import { motion } from "framer-motion";

export default function App() {
  return (

    <div className='w-full flex flex-col items-center justify-center' >
      <motion.h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        exit={{ opacity: 0 }}
      >
        Felipe Santana de Jesus
      </motion.h1>

      <motion.p className='text-3xl font-dancing leading-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 3 }}
        exit={{ opacity: 0 }}
      >
        " Knowing that a life breathed easier just because you existed "
      </motion.p>

      <motion.p className='text-lg mt-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 3 }}
        exit={{ opacity: 0 }}
      >
        Web Developer | Focus improving my skills
      </motion.p>
      <motion.button className=' flex items-center mt-6 gap-1 text-sm p-2 rounded  transition duration-300 ease-in-out hover:bg-slate-900'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 3 }}
        exit={{ opacity: 0 }}
      >
        Press <span className='bg-slate-500 rounded-lg px-2'>control</span> <span className='bg-slate-500 rounded px-2'>K</span> to begin 
        <FaArrowRight />
      </motion.button>
    </div>

  )

}
