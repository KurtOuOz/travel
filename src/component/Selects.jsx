import React from 'react';
import ht1 from '../assets/hotel1.jpg'
import ht2 from '../assets/hotel2.jpg'
import ht3 from '../assets/hotel3.jpeg'
import ht4 from '../assets/hotel4.jpeg'
import ht5 from '../assets/hotel5.jpeg'
import ht6 from '../assets/hotel6.jpg'
import SelectsCard from './SelectsCard';
const Selects = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg-grid-cols-3 gap-4' >
            <SelectsCard bg={ht1} text="阿里山高級飯店" />
            <SelectsCard bg={ht2} text="櫻花別館" />
            <SelectsCard bg={ht3} text="阿里山櫻迪格酒店" />
            <SelectsCard bg={ht4} text="提瑪飯店" />
            <SelectsCard bg={ht5} text="阿里山神木民宿" />
            <SelectsCard bg={ht6} text="神逤飯店" />
        </div>
    )
}

export default Selects
