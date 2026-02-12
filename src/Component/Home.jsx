import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Card1 from './Card1'
import Cards from './Cards'
import { wear_items } from '../wear'
import { RxCross2 } from "react-icons/rx"
import { dataContext } from '../context/UserContext'
import { useSelector } from 'react-redux'
import Card2 from './Card2'
import Footer from './Footer'
function Home() {

  const { showCart, setShowCart } = useContext(dataContext)
let items = useSelector(state => state.cart)
let subtotal = items.reduce((total, item ) => {
    
    let cleanPrice = Number(item.qty*item.price.toString().replace(/[^\d]/g, ''));
    return total + cleanPrice;
}, 0);

let deliveryFee = 250;


let taxes = subtotal * 0.5 / 100;

console.log("Subtotal:", subtotal); 
console.log("Taxes:", taxes);
  let total = Math.floor(subtotal+deliveryFee+taxes);
  

  const images = [
    { id: 1, url: "src/assets/img1.jpg" },
    { id: 2, url: "src/assets/img2.jpg" },
    { id: 3, url: "src/assets/pexels-fashion-1284496_1920.jpg" },
    { id: 4, url: "src/assets/grailify-nike-5226091_1920.jpg" },
    { id: 5, url: "src/assets/cosmistic-shoes-6701631_1920.jpg" },
  ]
  

  return (
    <div className='w-full min-h-screen'>


      {/* Carousel */}
      <div className='bg-[#121212] w-full'>
        <Carousel
          className='m-auto w-full sm:w-[90%] md:w-[80%] lg:w-[60%]'
          autoPlay
          infiniteLoop
          interval={2000}
          showThumbs={false}
        >
          {images.map(image => (
            <img
              key={image.id}
              src={image.url}
              alt="slider"
              className="w-full object-contain max-h-[450px]"
            />
          ))}
        </Carousel>
      </div>

      <Card1 />

      <div className='bg-[#121212]'>
        <h1 className='text-3xl font-bold text-[#e6d00e] text-center mb-2'>
          Our Footwear Collection
        </h1>
        <hr className="w-36 h-1 mx-auto bg-[#e6d00e]" />
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 place-items-center bg-[#121212] p-11'>
        {wear_items.map(item => (
          <Cards
            key={item.id}
            id={item.id}
            name={item.shoe_name}
            image={item.shoe_image}
            price={item.price}
          />
        ))}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0
         bg-[#121212] shadow-xl p-6 transition-all duration-500 items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"} `} 
      >
        <header className='flex justify-between items-center'>
          <span className='text-[#8a044f] font-bold text-[18px]'>Order items</span>
          <RxCross2
            onClick={() => setShowCart(false)}
            className='w-5 h-5 cursor-pointer text-[#8a044f] hover:text-[#a80762]'
          />
        </header>
     
     {items.length>0? <>
      <div className='w-full mt-8 flex flex-col gap-10 '>
        {items.map((item)=>(
          <Card2 name={item.name} price={item.price} image={item.image}
          id={item.id} qty={item.qty}/>
        ))}
      </div>
      <div className='w-full border-t-2  border-gray-400  mt-7 flex flex-col gap-2 p-8 border-b-2 items-center'>
   <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-[#8a044f] font-semibold'>Subtotal</span>
    <span className='text-[#8a044f] font-semibold text-lg' >Rs {subtotal} </span>
   </div> 
     <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-[#8a044f] font-semibold'>DeliveryFee</span>
    <span className='text-[#8a044f] font-semibold text-lg' >Rs {deliveryFee} </span>
   </div>
    <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-[#8a044f] font-semibold'>Taxes</span>
    <span className='text-[#8a044f] font-semibold text-lg' >Rs {taxes} </span>
   </div>
</div>
  <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-[#8a044f] font-bold'>Total
    </span>
    <span className='text-[#8a044f] font-bold text-lg' >Rs {total} </span>
   </div>
  <button className='p-3 w-[80%] bg-[#8a044f] text-lg text-[#b3b3b3] rounded-lg hover:bg-[#66033e] 
         text-bold transition-all duration-200 cursor-pointer ml-9
          '>Place Order</button>
    
    </>
    :
    <div className=' text-center text-[#8a044f] text-2xl font-semibold p-5'>
      Epmty cart
      </div>}


      </div>
 <div> 
  <Footer />


 </div>
    </div>
  )
}

export default Home
