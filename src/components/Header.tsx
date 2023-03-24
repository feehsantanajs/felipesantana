'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiCommand } from 'react-icons/fi'
import { motion } from "framer-motion";
import useControlModal from '@/hook/useControlModal';
export default function Header() {
  const setModal = useControlModal((state) => state.setValueModal)
  
  const menuTitle = [
    {
      id: 1,
      name: 'About',
      link: '/about'
    },
    {
      id: 2,
      name: 'Career',
      link: '/career'
    },
    {
      id: 2,
      name: 'Projects',
      link: '/projects'
    },
    {
      id: 3,
      name: 'Techs',
      link: '/techs'
    },
    {
      id: 4,
      name: 'Insights',
      link: '/insights'
    },
    {
      id: 5,
      name: 'Contato',
      link: '/contact'
    },
  ]

  return (
    <nav>
      <div className='mx-auto flex items-center justify-between w-full max-w-[1280px] min-h-[5rem] '>
        <div>
          <Link href="/" ><Image src="./assets/images/logo-fs-white.svg" width={30} height={30} alt={'Felipe Santana'} /></Link>
        </div>
        <div className='max-w-[32rem] w-full  mx-auto'>

          <ul className='flex justify-between'>
            {menuTitle.map(res => {
              return (
                <li  key={res.id} >
                  <Link 
                    href={res.link} 
                    className='cursor-pointer text-slate-500  text-sm font-bold p-3 rounded-md transition duration-300 ease-in-out hover:text-white hover:bg-slate-900'
                  >
                  {res.name.toUpperCase()}
                </Link>
                </li>
                
              )})
            }
          </ul>
        </div>
        <div>
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => setModal()}>
            <FiCommand className='w-6 h-6' />
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
