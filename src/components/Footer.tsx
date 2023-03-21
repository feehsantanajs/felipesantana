import {SiNextdotjs, SiReact, SiTailwindcss, SiVercel} from 'react-icons/si'
import {AiFillHeart} from 'react-icons/ai'

export function Footer() {

  return (
    <div className="h-full flex items-center justify-between text-sm">
      <ul className="flex gap-8">
       <li><a href="">Linkedin</a></li>
       <li><a href="">Github</a></li>
       <li><a href="">Twitter</a></li>
       <li><a href="">Instagram</a></li>
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