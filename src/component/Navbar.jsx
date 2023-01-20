import React ,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter ,FaYoutube , FaPinterest , FaInstagram} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] =useState(false)
    const [logo,setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>阿里山</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>首頁</li>
        <li>目的地</li>
        <li>旅遊</li>
        <li>景色</li>
        <li>書籍</li>
      </ul>   
      <div className='hidden md:flex'>
        <BiSearch className='mr-2' size={20}/>
        <BsPerson size={20}/>
      </div>
      {/* HA */}
      <div  onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>
      {/* Mobile menu dropdown */}
          <div  onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>阿里山</h1>
          <li className='border-b'>首頁</li>
          <li className='border-b'>目的地</li>
          <li className='border-b'>旅遊</li>
          <li className='border-b'>景色</li>
          <li className='border-b'>書籍</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between items-center my-6 '>
            <FaFacebook className="icon"/>
            <FaTwitter className="icon"/>
            <FaYoutube className="icon"/>
            <FaPinterest className="icon"/>
            <FaInstagram className="icon"/>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
