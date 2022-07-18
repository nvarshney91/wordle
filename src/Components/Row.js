import React from 'react'

export default function Row ({guess}) {
  if(guess){
    return(
        <div className='text-center flex justify-center'>
            {guess.map((l,i)=>(
                <div key={i} className='block w-[60px] h-[60px] border-solid border-[1px] border-[#bbb] m-[4px] text-center leading-[60px] uppercase font-bold text-[2.5em]'>
                   {l.key}
                </div>
            ))}
        </div>
    )
  }
  return (
    <div className='text-center flex justify-center'>
         <div className='block w-[60px] h-[60px] border-solid border-[1px] border-[#bbb] m-[4px] text-center leading-[60px] uppercase font-bold text-[2.5em]'></div>
         <div className='block w-[60px] h-[60px] border-solid border-[1px] border-[#bbb] m-[4px] text-center leading-[60px] uppercase font-bold text-[2.5em]'></div>
         <div className='block w-[60px] h-[60px] border-solid border-[1px] border-[#bbb] m-[4px] text-center leading-[60px] uppercase font-bold text-[2.5em]'></div>
         <div className='block w-[60px] h-[60px] border-solid border-[1px] border-[#bbb] m-[4px] text-center leading-[60px] uppercase font-bold text-[2.5em]'></div>
         <div className='block w-[60px] h-[60px] border-solid border-[1px] border-[#bbb] m-[4px] text-center leading-[60px] uppercase font-bold text-[2.5em]'></div>
    </div>    
  )
}
