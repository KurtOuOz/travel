import React from 'react'
import {RiCustomerService2Fill} from "react-icons/ri"
import {MdOutlineTravelExplore} from "react-icons/md"

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
		<div className='lg:col-span-2 flex flex-col justify-evenly'>
			<div>
				<h2 className='py-4'>阿里山民宿預定</h2>
				<p>
					這幾年陸續安排了幾趟阿里山周邊的旅程，每次返回山上總是能獲得滿滿的能量，好想念在阿里山悠閒的時光與清幽的風景。將這幾趟旅行時的阿里山住宿撰寫成特輯，挑選的民宿都擁有相同的特點，那就是阿里山無價的絕美風景！夜晚伴著璀璨星空入睡、早晨則被大自然的天籟喚醒，住在森林裡就是這麼美好的一件事！
				</p>
			</div>
			<div className='grid sm:grid-cols-2 gap-8 py-4'>
				<div className='flex flex-col lg:flex-row items-center text-center'>
					<button>
						<RiCustomerService2Fill size={50}/>
					</button>
					<div>
						<h3 className='py-2'>Leading Service</h3>
						<p className='py-1'>ALL INCLUSIVE COMPANY FOR 20 YEAR-A-ROWALL INCLUSIVE COMPANY FOR 20 YEAR-A-ROW</p>
					</div>
				</div>
				  <div className='flex flex-col lg:flex-row items-center text-center'>
					  <button>
						<MdOutlineTravelExplore size={50}/>
					  </button>
					  <div>
						  <h3 className='py-2'>Leading Service</h3>
						  <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20 YEAR-A-ROWALL INCLUSIVE COMPANY FOR 20 YEAR-A-ROW</p>
					  </div>
				  </div>
			</div>
		</div>

      	<div>
			<div className='border text-center'>
				<p className='pt-2'> 獲得額外的 10% 折扣</p>
				<p className='py-4'> 還剩 12 小時</p>
				<p className='bg-gray-800 text-gray-200 py-2'> 現在預訂並領取優惠</p>
			</div>
			<form>
				<div className='w-full'>
					<label  className='flex flex-col my-2'>目的地</label>
					<select className='border rounded-md p-2'>
						<option>阿里山高級賓館</option>
						<option>櫻花別館</option>
						<option>阿里山櫻迪格酒店</option>
						<option>阿里山神木民宿</option>
					</select>
				</div>
				<div className='flex flex-col my-4'>
					<label>Check-in</label>
					<input className='border rounded-md p-2' type="date"/>
				</div>
				<div className='flex flex-col my-2'>
					<label>Check-Out</label>
					<input className='border rounded-md p-2' type="date"/>
				</div>
				<button className='w-full my-4'>價格和可用性</button>
			</form>
		</div>
    </div>
  )
}

export default Search
