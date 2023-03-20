'use client';
import { Inter } from 'next/font/google'
import {Header} from './components/Header'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

export default function App() {
  return (
   
    <div className='pl-40' >
      <motion.h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 '
       initial={{ opacity: 0 }}
       animate={{ opacity: 1, y:-10 }}
       transition={{ease: 'easeInOut', duration: 1}}
       exit={{ opacity: 0 }} 
      >
        Felipe Santana de Jesus
      </motion.h1>
      <motion.p className='text-2l font-dancing leading-10' 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ease: 'easeInOut', duration: 3}}
      exit={{ opacity: 0 }} 
      > " Knowing that a life breathed easier just because you existed " </motion.p>
      <motion.p className='text-lg mt-7'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ease: 'easeInOut', duration: 3}}
      exit={{ opacity: 0 }} 
      >Web Developer | Focus improving skills </motion.p>
      <motion.button className='text-lg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ease: 'easeInOut', duration: 3}}
      exit={{ opacity: 0 }} 
      >Press control K to begin</motion.button>
    </div>
    
  )

}
