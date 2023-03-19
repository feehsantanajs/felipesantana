'use client';
import { Inter } from 'next/font/google'
import {Header} from './components/Header'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

export default function App() {
  return (
   
    <motion.div className='pl-40'  initial={{ opacity: 0 }}
    animate={{ opacity: 1, y:-50 }}
    transition={{ease: 'easeInOut', duration: 1}}
    exit={{ opacity: 0 }} >
      <h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-900 to-pink-500 '>Felipe Santana de Jesus</h1>
      <p className='text-2l font-dancing leading-10' > " Knowing that a life breathed easier just because you existed " </p>
      <p className='text-lg mt-7'>Web Developer | Focus improving skills </p>
      <button className='text-lg'>Press control K to begin</button>
    </motion.div>
    
  )

}
