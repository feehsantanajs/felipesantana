import Image from 'next/image'


export default function About(){
  return(
      <div>
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-500 ">About me</h1>
          <div className='mt-20 w-full mx-auto flex gap-10'>
              <Image src="https://github.com/felipesantanajs.png" alt='My image' width={350} height={350} className='rounded-lg'/>
              <div className='text-gray-400  text-lg flex flex-col gap-4'>
                <p>Hello, My name is <span className='text-white'>Felipe Santana</span> from São Paulo, Brazil. <br /> </p>
                <p>
                  I'm a developer <span className="text-white">FullStack</span>, and passionate about technology. 
                </p>
                <p>I'm a hard-working developer with 3 years of experience in different fields and technologies, <br /> The technologies I have the most experience with are HTML, CSS JavaScript, ReactJS, Node.JS,
TailwindCSS, TypeScript and PHP .</p>
              </div>
          </div>
      </div>
  )
}