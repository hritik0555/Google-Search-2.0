import React from 'react'
import  { Triangle } from "react-loader-spinner";
import { ScaleLoader } from 'react-spinners';


const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    {/* <Triangle type="Puff" color="#00BFFF" height={550} width={80}/> */}
  
    <ScaleLoader  height={34} width={4} />
    </div>
  )
}

export default Loading;