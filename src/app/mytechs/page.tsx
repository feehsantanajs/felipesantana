import {Techs} from '@/components/Techs';

export default function MyTechs() {
  return (
    <div className='w-full'>
      <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 "> My Stacks</h1>
      <div>
        <Techs />
      </div>
    </div>
  )
}