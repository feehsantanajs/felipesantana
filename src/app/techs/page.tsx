'use client'
import { Stacks } from '@/components/Stacks'
export default function Techs() {
  return (
    <div>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 "> My Stacks</h1>
      <div className='mt-20 w-full mx-auto flex'>
        <Stacks />
      </div>
    </div>
  )
}