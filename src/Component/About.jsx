import React, { useContext } from 'react'
import Footer from './Footer'
import { RxCross2 } from "react-icons/rx"
import { dataContext } from '../context/UserContext'
import { useSelector } from 'react-redux'
import Card2 from './Card2'

function About() {
  
  const { showCart, setShowCart } = useContext(dataContext)
let items = useSelector(state => state.cart)
let subtotal = items.reduce((total, item ) => {
    
    let cleanPrice = Number(item.qty*item.price.toString().replace(/[^\d]/g, ''));
    return total + cleanPrice;
}, 0);

let deliveryFee = 250;




console.log("Subtotal:", subtotal); 

  let total = Math.floor(subtotal+deliveryFee);
  return (
    <div className='min-h-screen bg-[#121212] py-10 px-4 md:px-20'>

      {/* Top Section */}
      <div className='bg-[#1e1e1e] flex flex-col md:flex-row 
                      w-full md:w-[85%] mx-auto 
                      p-6 md:p-8 gap-8 rounded-lg shadow-2xl'>

        {/* Image */}
        <div className='flex justify-center md:justify-start shrink-0'>
          <img
            src="https://www.shutterstock.com/image-photo/diverse-south-asian-pakistan-group-260nw-2557421329.jpg"
            alt=""
            className='h-40 w-40 md:h-52 md:w-52 rounded-full object-cover'
          />
        </div>

        {/* Text */}
        <div className='text-[#8a044f] flex flex-col justify-center 
                        text-base md:text-lg font-semibold'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorem fugiat rem quibusdam, accusantium cum aliquam natus.
          </p>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex nam ratione quae maxime dicta exercitationem.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10'>

        {/* Card 1 */}
        <div className='bg-[#1e1e1e] p-6 rounded-3xl 
                        flex flex-col items-center text-center'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69CwLbuNAQPp32Kllvv68qQKCzYE98Nhjgg&s"
            alt=""
            className='h-32 w-32 rounded-full object-cover mb-4'
          />
          <span className='text-[#8a044f] text-lg font-bold'>
            Muhammad Ibrahim
          </span>
          <p className='text-[#b3b3b3] mt-3 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Card 2 */}
        <div className='bg-[#1e1e1e] p-6 rounded-3xl 
                        flex flex-col items-center text-center'>
          <img
            src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a"
            alt=""
            className='h-32 w-32 rounded-full object-cover mb-4'
          />
          <span className='text-[#8a044f] text-lg font-bold'>
            Liana Desena
          </span>
          <p className='text-[#b3b3b3] mt-3 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Card 3 */}
        <div className='bg-[#1e1e1e] p-6 rounded-3xl 
                        flex flex-col items-center text-center '>
          <img
            src="https://www.shutterstock.com/image-photo/portrait-handsome-young-stylish-sexy-260nw-2576373375.jpg"
            alt=""
            className='h-32 w-32 rounded-full object-cover mb-4'
          />
          <span className='text-[#8a044f] text-lg font-bold'>
            M'r Musa
          </span>
          <p className='text-[#b3b3b3] mt-3 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div >

       </div>
      
{/* Cart Sidebar*/}
{showCart && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
    onClick={() => setShowCart(false)}
  >
    {/* Sidebar */}
    <div
      className={`w-full md:w-[40vw] h-full fixed top-0 right-0 
      bg-[#121212] shadow-xl p-6 overflow-auto 
      transform transition-transform duration-500 
      ${showCart ? "translate-x-0" : "translate-x-full"}`}
      
      onClick={(e) => e.stopPropagation()}  
    >
      <header className='flex justify-between items-center'>
        <span className='text-[#8a044f] font-bold text-[18px]'>
          Order items
        </span>
        <RxCross2
          onClick={() => setShowCart(false)}
          className='w-5 h-5 cursor-pointer text-[#8a044f] hover:text-[#a80762]'
        />
      </header>

      {items.length > 0 ? (
        <>
          <div className='w-full mt-8 flex flex-col gap-10'>
            {items.map((item) => (
              <Card2
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}
          </div>

          <div className='w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 border-b-2 items-center'>
            <div className='w-full flex justify-between'>
              <span className='text-xl text-[#8a044f] font-semibold'>Subtotal</span>
              <span className='text-[#8a044f] font-semibold'>Rs {subtotal}</span>
            </div>

            <div className='w-full flex justify-between'>
              <span className='text-xl text-[#8a044f] font-semibold'>Delivery Fee</span>
              <span className='text-[#8a044f] font-semibold'>Rs {deliveryFee}</span>
            </div>

            <div className='w-full flex justify-between'>
              <span className='text-xl text-[#8a044f] font-semibold'>Taxes</span>
              <span className='text-[#8a044f] font-semibold'>Rs {taxes}</span>
            </div>
          </div>

          <div className='w-full flex justify-between items-center mt-4'>
            <span className='text-xl text-[#8a044f] font-bold'>Total</span>
            <span className='text-[#8a044f] font-bold'>Rs {total}</span>
          </div>

          <button className='p-3 w-[80%] bg-[#8a044f] text-lg text-[#b3b3b3] rounded-lg hover:bg-[#66033e] transition-all duration-200 cursor-pointer ml-9 mt-5'>
            Place Order
          </button>
        </>
      ) : (
        <div className='text-center text-[#8a044f] text-2xl font-semibold p-5'>
          Empty cart
        </div>
      )}
    </div>
  </div>
)}
      <Footer  />
    </div>
  )
}

export default About
