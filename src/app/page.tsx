/* eslint-disable react/no-unescaped-entities */
'use client';

import {FaArrowRight} from 'react-icons/fa'
import { motion } from "framer-motion";
import useControlModal from '@/hook/useControlModal';

export default function App() {

  const setModal = useControlModal((state) => state.setValueModal)
  return (

    <div className='w-full flex flex-col pl-5 items-center mt-24 lg:justify-center' >
      
      <motion.h1 className='font-extrabold text-transparent text-2xl  bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 lg:text-6xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ ease: 'easeInOut', duration: 1 }}
        exit={{ opacity: 0 }}
      >
        Felipe Santana de Jesus
      </motion.h1>

      <motion.p className='text-xs font-dancing leading-10 lg:text-3xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 3 }}
        exit={{ opacity: 0 }}
      >
        " Knowing that a life breathed easier just because you existed "
      </motion.p>

      <motion.p className='text-xs mt-4 lg:text-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 3 }}
        exit={{ opacity: 0 }}
      >
        Software Engineer | Focus everyday improving my skills
      </motion.p>
      <motion.button className='hidden items-center mt-6 gap-1 text-sm p-2 rounded  transition duration-300 ease-in-out hover:bg-slate-900 lg:flex'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 3 }}
        exit={{ opacity: 0 }}
        onClick={()=>setModal()}
      >
        Press <span className='bg-slate-500 rounded-lg px-2'>control</span> <span className='bg-slate-500 rounded px-2'>M</span> to begin 
        <FaArrowRight />
      </motion.button>
    </div>

  )

}
