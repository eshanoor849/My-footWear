import React from 'react'
import Footer from './Footer'

function Contact() {
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

      <Footer />
    </div>
  )
}

export default Contact
