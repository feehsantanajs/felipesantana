'use client'
import { api } from '@/services/api'
import Image from 'next/image'
import { type } from 'os';
import { useEffect, useState } from 'react'


type stackProps = [
  {
    id:string;
    name:string;
    type:string;
    url:string;
    description:string;
  }
]

export function Stacks() {
  const [datas, setDatas] = useState<stackProps>();

  useEffect(() =>{
    api('/techs').then(res =>{
      return setDatas(res.data)
    })
  }, [])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-6 '>
      {
      datas?.map(res =>{
       return(  
        <div key={res.id} className='max-w-sm w-[100%] h-52  bg-gray-900 rounded p-5 flex flex-col justify-between transition ease-in-out duration-300 hover:brightness-75'>
          <Image src={`/assets/images/logos/${res.url}`} alt={res.name} width={50} height={50}/>
          <h1 className='text-lg'>{res.name}</h1>
          <p>{res.description}</p>
        </div>
       )
      })}
    </div>
  )
}