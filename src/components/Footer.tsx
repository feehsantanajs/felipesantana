import {SiNextdotjs, SiReact, SiTailwindcss, SiVercel} from 'react-icons/si'
import {AiFillHeart} from 'react-icons/ai'
import Link from 'next/link'

export function Footer() {

  return (
    <div className="h-full flex items-center justify-between text-sm">
      <ul className="flex gap-8">
        <Link href="https://www.linkedin.com/in/feelipesantana/" className='transition ease-in-out duration-300 hover:text-blue-600'> <li>Linkedin</li></Link>
        <Link href="https://github.com/felipesantanajs/" className='transition ease-in-out duration-300 hover:text-gray-600'><li>Github</li></Link>
        <Link href="https://twitter.com/felipesantanajs/" className='transition ease-in-out duration-300 hover:text-blue-300'><li>Twitter</li></Link>
      </ul>

      <div className='flex items-center gap-1'>
        <div className='flex items-center justify-center gap-1'>
          <p>Build with</p>
          <SiReact width={50} height={50} className='text-cyan-500' />
          <SiNextdotjs width={50} height={50} />
          <SiTailwindcss width={50} height={50} className='text-cyan-500' />
          <SiVercel width={50} height={50} className='text-black-700' />
        </div>
        <div className='flex items-center justify-center gap-1'>
          <p>& </p>
          <AiFillHeart width={50} height={50} className='text-red-700' />
        </div>
      </div>
    </div>
  )
}