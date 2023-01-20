import React from 'react'
import sakola from '../assets/sakola2.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video 
        className='w-full h-full object-cover' 
        src={sakola}
        autoPlay
        loop
        muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>開始預訂您的行程</h1>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border [=1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder='搜尋目的地'/>
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color:'#ffffff'}}/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
