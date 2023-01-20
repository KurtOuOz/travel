import React from 'react'
import { useState } from 'react'
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from 'react-icons/bs'

const sliderData = [
    {
        url:"https://images.pexels.com/photos/6965537/pexels-photo-6965537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        url: "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        url: "https://images.pexels.com/photos/14691281/pexels-photo-14691281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        url: "https://images.pexels.com/photos/12819159/pexels-photo-12819159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

]

const Carousel = () => {
    const [slide,setSlide] = useState(0)
    const length = sliderData.length
    
    const preSlide = () => {
        setSlide(slide === length -1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? length- 1 : slide -1)
    }
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill onClick={preSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-20'/>
            <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-20'/>
            {sliderData.map((item,index)=>(
                <div className={index === slide ? 'opacity-100' : 'opacity-0' }>
                    {index === slide && (<img className='w-full rounded-md ' src={item.url} alt="/" />)}
                </div>
            ))}
        </div>
    )
}

export default Carousel
