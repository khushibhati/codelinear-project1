import React from 'react'
import  logo from '../assets/logo.png'
import { TbMenu } from "react-icons/tb";

export const Header = () => {
  return (
     
     <header className='w-full  sticky top-0 px-16 py-2 flex   justify-between items-center' >
      <div className='h-full w-[10%]'> <img src={logo}  className='h-full  w-full'></img></div>
     <TbMenu   className ="size-12"/> 
    </header>
   
  

  )
}
