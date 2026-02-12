import React from 'react'
import Footer from './Footer'

function About() {
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

      <Footer className=" " />
    </div>
  )
}

export default About
