import React from 'react'

import sa1 from '../assets/sa1.jpg'
import sa2 from '../assets/sa2.jpg'
import sa3 from '../assets/sa3.jpg'
import sa4 from '../assets/sa4.jpg'
import sa5 from '../assets/sa5.jpg'

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>各式各樣好看景色</h1>
        <p className='P-4'>通通都在阿里山 </p>
        <div className='grid grid-row-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
              <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={sa1} alt='/' />
              <img className='w-full h-full object-cover ' src={sa2} alt='/' />
              <img className='w-full h-full object-cover ' src={sa3} alt='/' />
              <img className='w-full h-full object-cover ' src={sa4 } alt='/' />
              <img className='w-full h-full object-cover ' src={sa5 } alt='/' />
        </div>
    </div>
  )
}

export default Destination
