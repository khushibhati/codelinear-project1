import React from 'react'
import one from '../assets/one.png'
export const Twopage = () => {
  return (
      <div className='px-16  '>
        <h1  className=' text-8xl my-16  w-[70%]'>
        AMET MAGNIS DIAM VARIUS VIVERRA AT
        </h1> 

        <div className='w-full  flex  '>
          <div className='w-1/2 h-[34rem]'>
             <img src={one}  className='w-full h-full my-16 '  ></img>
            </div>
        <p className='w-1/3 mx-24' >
        Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
         </p>
        </div>
         
      </div>
  )
}
