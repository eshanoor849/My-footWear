import React from 'react'
import { useDispatch } from  'react-redux'
import { AddItem } from '../redux/CartSlice'
function Cards({name,image,price,id,qty}) {
  let dispatch=useDispatch()
 
  return (
    <div  className=' ' >
        <div  className='w-65 h-90 bg-[#121212] p-2  rounded-lg 
    flex flex-col gap-2 shadow-lg  hover:border-2 border-[#8a044f] transition-all max-w-sm ' >
        <div className='w-full h-[70%] overflow-hidden
        rounded-lg '>
<img src={image} alt="" className=' object-cover cursor-zoom-in '/>
        </div>
        <div className='text-xl font-semibold text-[#8a044f]'>
{name}
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-lg font-bold text-[#8a044f]'>{price}</div>
            
        </div>
        <button className='p-2 w-full bg-[#66033e] text-lg text-[#b3b3b3] rounded-lg hover:bg-[#8a044f] 
         text-bold transition-all duration-200 cursor-pointer ' onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,
          image:image,qty:1}));
          toast("item added")
          
        }
          } >Add to Cart</button>
    </div>
</div>
  )
}

export default Cards