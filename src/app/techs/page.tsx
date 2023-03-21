'use client'
import { Stack } from '@/components/Stack'
import { Tab } from '@headlessui/react'
export default function Techs() {
  return (
    <div className="mt-10 w-full">
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 "> My Stacks</h1>
      <div className='mt-20 w-full mx-auto max-w-4xl flex'>
        <Stack />
      </div>
    </div>
  )
}