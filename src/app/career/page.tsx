import { Experiences } from "@/components/Experiences";

type DatasCareerProps = [{
  id: string,
  role: string,
  company: string,
  date:string,
  description:string,
  skills:[]
}]

export default function Carrer(){

  return(
    <div>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 "> My Career</h1>
      <div>
        <Experiences />
      </div>
    </div>
  )
}