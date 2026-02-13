import React, { useContext } from 'react'
import Footer from './Footer'
import { RxCross2 } from "react-icons/rx"
import { dataContext } from '../context/UserContext'
import { useSelector } from 'react-redux'
import Card2 from './Card2'

function Contact() {
   
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
    <div className='min-h-screen bg-[#121212] flex flex-col justify-between'>

      <div className='flex justify-center items-center py-10 px-4'>

        <div className='bg-[#1e1e1e] 
                        flex flex-col lg:flex-row 
                        w-full lg:w-[85%] 
                        p-6 md:p-10 
                        gap-10 rounded-lg shadow-2xl'>

          {/* Image */}
          <div className='flex justify-center lg:justify-start'>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/041/616/453/small/concept-of-partnership-in-business-two-young-businesswoman-dressed-black-formal-suit-standing-studio-isolated-white-background-photo.jpg"
              alt="contact"
              className='h-60 w-44 md:h-72 md:w-52 object-cover rounded-lg'
            />
          </div>

          {/* Form Section */}
          <div className='flex-1'>
            <h1 className='text-[#e6d00e] text-3xl font-semibold mb-6'>
              Contact Us
            </h1>

            <form className='flex flex-col gap-4'>

              <div>
                <label className='text-[#8a044f] block mb-1'>Full Name</label>
                <input
                  type="text"
                  placeholder='Write your name'
                  className='w-full p-2 rounded-md bg-transparent 
                             border border-[#b3b3b3] text-[#b4b4b4] 
                             focus:outline-none focus:border-[#8a044f]'
                />
              </div>

              <div>
                <label className='text-[#8a044f] block mb-1'>Phone Number</label>
                <input
                  type="tel"
                  placeholder='Write your number'
                  className='w-full p-2 rounded-md bg-transparent 
                             border border-[#b3b3b3] text-[#b4b4b4]
                             focus:outline-none focus:border-[#8a044f]'
                />
              </div>

              <div>
                <label className='text-[#8a044f] block mb-1'>Email</label>
                <input
                  type="email"
                  placeholder='Your email'
                  className='w-full p-2 rounded-md bg-transparent 
                             border border-[#b3b3b3] text-[#b4b4b4]
                             focus:outline-none focus:border-[#8a044f]'
                />
              </div>

              <button
                type="submit"
                className='mt-4 bg-[#8a044f] hover:bg-[#a3055f] 
                           text-white py-2 rounded-md transition duration-300'>
                Submit
              </button>

            </form>
          </div>

          {/* Contact Info */}
          <div className='lg:w-1/3'>
            <h3 className='text-xl text-[#8a044f] mb-2'>Contact Our Website</h3>
            <p className='text-[#b3b3b3] mb-6'>hi@footwear.com</p>

            <h3 className='text-xl text-[#8a044f] mb-2'>Location</h3>
            <p className='text-[#b3b3b3]'>
              Sadar Agency <br />
              Karachi, Pakistan
            </p>
          </div>

        </div>
      </div>
      {/* Cart Sidebar With Overlay */}
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
      
      onClick={(e) => e.stopPropagation()}  // 👈 prevents closing when clicking inside
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

      <Footer />
    </div>
  )
}

export default Contact
