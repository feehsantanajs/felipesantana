import Image from 'next/image';
import { api } from '@/services/api';
import axios from 'axios';
type stackProps = [
  {
    id: string;
    name: string;
    type: string;
    url: string;
    description: string;
  }
]

export default async function Techs() {

  const response = await api.get('/techs');
  const datas:stackProps = await response.data;
  
  console.log(datas);
  
  return (
    <div className='w-full'>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 "> My Stacks</h1>
      <div className='grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3'>
        {
          datas?.map(res => {
            return (
              <div key={res.id} className='max-w-sm w-[100%] h-64  bg-gray-900 rounded p-5 flex flex-col justify-between transition ease-in-out duration-300 hover:brightness-75'>
                <Image src={`/assets/images/logos/${res.url}`} alt={res.name} width={50} height={50} />
                <h1 className='text-lg'>{res.name}</h1>
                <p>{res.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}