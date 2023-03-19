'use client';
import { Inter } from 'next/font/google'
import {Header} from './components/Header'
import { useRouter } from 'next/router'

type Props = {
  children: string | JSX.Element | JSX.Element[];
}


export default function App({ children }: Props) {

  
  return (
    <div className='grid grid-rows-layout'>
      <header><Header /></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )

}
