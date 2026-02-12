import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DicreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';
function Card2({name,id,price,image,qty}) {
  let dispatch=useDispatch()
  return (
    <div className='w-full h-30 p-2 shadow-lg flex justify-between '>
      <div className='w-[60%] h-full flex gap-3'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover' />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'>
            <div className='text-lg text-[#8a044f] 
            font-semibold '>{name}</div>
            <div className='w-25 h-12 bg-[#121212] flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border- text-xl'>
                <button className='w-[30%] h-full bg-[#121212] flex justify-center items-center text-[#b3b3b3] hover:bg-[#66033e]'onClick={()=>
                  qty>1?dispatch(DicreamentQty(id)):1}>-</button>
                <span className='w-[40%] h-full bg-[#1e1e1e] flex justify-center items-center text-[#b3b3b3]'>{qty}</span>
                <button className='w-[30%] h-10 bg-[#121212] flex justify-center items-center text-[#b3b3b3] hover:bg-[#66033e]'onClick={()=>
                  dispatch(IncreamentQty(id))
                }>+</button>
            </div>
        </div>
    </div>  
      <div className='flex flex-col justify-start items-end gap-6'>
 <span className='text-lg text-[#8a044f] font-semibold'>{price}</span>
 <RiDeleteBin6Line className='w-7 h-8 text-red-800 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
      </div>
    </div>
  )
}

export default Card2