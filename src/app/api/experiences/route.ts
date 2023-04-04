
import {NextResponse} from 'next/server'
import uniqid from 'uniqid';

export async function GET(request: Request) {
  const datas = [
    {
      id: uniqid('ex-'),
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
      id: uniqid('ex-'),
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
      id: uniqid('ex-'),
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
      id: uniqid('ex-'),
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

  return NextResponse.json(datas)
}