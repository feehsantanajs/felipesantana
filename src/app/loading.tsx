'use client'
import ReactLoading from 'react-loading';
export default function Loading(){

  return (
    <div className="w-full h-full flex items-center justify-center ">
        <ReactLoading type="spinningBubbles" color="#fff" height={'10%'} width={'10%'} />
    </div>
   
  )
}