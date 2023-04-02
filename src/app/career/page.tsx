import { api } from "@/services/api";

type DatasCareerProps = [{
  id: string,
  role: string,
  company: string,
  date:string,
  description:string,
  skills:[]
}]

export default async function Career(){

  const response = await api.get('/experiences')
  const datas:DatasCareerProps = response.data
  
  return(
    <div>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 "> My Career</h1>
      <div className='mt-20 w-full mx-auto flex-col'>
        {datas.map(res => {
          return (
            <div key={res.id} className=" flex-col mt-4">
              <h1 className="text-lg font-bold">{res.role}</h1>
              <h3 className="text--base text-gray-400 font-bold">{res.company}</h3>
              <span className="text--base text-gray-400 ">{res.date}</span>
              <p className="m-1">{res.description}</p>
            </div>
          )
          })
        }
      </div>
    </div>
  )
}