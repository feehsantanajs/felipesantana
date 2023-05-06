import { v4 as uuidv4 } from 'uuid';

export function Experiences(){
  const datas = [
    {
      id: uuidv4(),
      role: 'Frontend Developer',
      company: 'Codeby',
      date: `Jul 2022 - Jan 2023 | 7 mos`,
      description:``,
      skills:[
        'HTML',
        'CSS',
        'Javascript',
        'ReactJS',
        'Typescript',
        'Node.JS',
        'GraphQL',
        'Google Tag Manager',
        'VtexIO',
        'VtexCMS'
      ]
    },
    {
      id: uuidv4(),
      role: 'Frontend Developer Jr.',
      company: 'Octoshop',
      date: `Apr 2022 - Jul 2022 | 4 mos`,
      description:`
      - Develop new front-end applications for e-ccomerce Octoshop and bug fixes. <br />
      - Analysis system on the Seller's account balance (Front-end). <br />
      - Customer product evaluation system (Front-end). <br />
      - New home page of Octoshop.(Front-end). <br />
      - Checkout Octoshop(Front-end).`,
      skills:[
        'HTML',
        'CSS',
        'Javascript',
        'PHP',
        'Magento',
        'Git Flow'
      ]
    },
    {
      id: uuidv4(),
      role: 'Programming Intern',
      company: 'ServiceOne',
      date: `Jul 2013 - Dec 2013 | 6 mos`,
      description:`
      - Development of Add-ons to SAP Business One using C# <br />
      - Migration of Add-ons written in VBA to C# <br />
      - Development of reports in Crystal Reports using complex SQL requests. <br />`,
      skills:[
        'C#',
        'SAP',
        'SQLServer',
        'Crystal Reports',
      ]
    },
    {
      id: uuidv4(),
      role: 'Programming Intern',
      company: 'K2Media',
      date: `Feb 2013 - Jun 2013 | 5 mos`,
      description:' Creation and update of websites',
      skills:[
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'MYSQL'
      ]
    },
  ]
  return (
    <div className='mt-20 w-full mx-auto flex-col'>
    {datas.map((res:any) => {
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
  )
}