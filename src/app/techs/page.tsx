'use client'
import { api } from '@/services/api';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type stackProps = [
  {
    id:string;
    name:string;
    type:string;
    url:string;
    description:string;
  }
]

export default function Techs() {
  const [datas, setDatas] = useState<stackProps>();
  const [loading, setLoading] = useState(false);

  async function handleGetDatasStack(){
    try{
      setLoading(!loading)
      api('/techs').then(res =>{
        console.log(res.data)
        setDatas(res.data)
      })

    } catch(err){
      console.log(err)
    }finally{
      setLoading(!loading)
    }
  }

  useEffect(() =>{
    handleGetDatasStack()
  },[])
  return (
    <div>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 "> My Stacks</h1>
      <div className='mt-20 w-full mx-auto flex'>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-6 '>
          {
            datas?.map(res => {
              return (
                <div key={res.id} className='max-w-sm w-[100%] h-60  bg-gray-900 rounded p-5 flex flex-col justify-between transition ease-in-out duration-300 hover:brightness-75'>
                  <Image src={`/assets/images/logos/${res.url}`} alt={res.name} width={50} height={50} />
                  <h1 className='text-lg'>{res.name}</h1>
                  <p>{res.description}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}