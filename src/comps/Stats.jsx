/* eslint-disable react/prop-types */
import React from 'react'

const Stats = ({title, count , icon , percent, available }) => {
  return (
    <div className='flex flex-col gap-2 rounded-md bg-white w-64 py-4'>
        <div className='pl-2'>
            <h1 className='font-main font-extrabold text-xl'>{title}</h1>
        </div> 
        <div className='flex items-center justify-around'>
            <p className='text-4xl font-main font-bold'>{count}</p>
            <p className='font-main font-bold text-[#00F135]'>+{percent}%</p>
            <img className='self-end'  src={icon} alt="" />
            
        </div>
        <div className='pl-2'>
            <p className='font-main font-bold text-[#00000057] text-[15px] '>Available {available}</p>
        </div>
    </div>
  )
}

export default Stats
