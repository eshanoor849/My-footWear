import React from 'react'

function Newarrivals(props) {
  return (
    
        <div className='bg-[#1e1e1e] rounded-xl shadow-lg p-4 mx-2'>
    <img className='w-full h-50 object-cover rounded-lg'
     src={props.Url} alt="" />
 <h2 className='text-xl font-semibold mt-3 text-[#8a044f]'>{props.name}</h2>
 <p className='text-[#8a044f] font-bold mt-1'>{props.price}</p>
  <span className='text-[#8a044f] text-sm mt-2"' > {props.descript}</span>
  <button className='mt-4 w-full bg-[#66033e] text-[#b3b3b3] py-2 rounded-lg cursor-pointer hover:bg-[#8a044f] transition '>Coming Soon</button>
  </div>
 


  )
}

export default Newarrivals