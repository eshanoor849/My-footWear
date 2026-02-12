import { useState, useContext } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { dataContext } from "../context/UserContext";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
export default function Navbar() {

  const { ShowCart, setShowCart } = useContext(dataContext);
  const [open, setOpen] = useState(false);
  let items=useSelector(state => state.cart)
  return (
    <nav className="w-full bg-[#66033e]">
      <div className="flex items-center h-16 px-5 relative">

        {/* Logo */}
        <h6 className="text-pink-100 font-semibold text-[18px] flex items-center ">
         
          footwear👟
        </h6>
      

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 text-pink-100 font-semibold text-xl ml-auto' >
        <Link to="/" className="hover:text-gray-300"> Home </Link> 
        <Link to="/About" className="hover:text-gray-300"> About </Link>
     
        <Link to="/Contect" className="hover:text-gray-300"> Contact </Link>
</div>
        {/* Cart Icon */}
        <div
          className="w-[60px] h-[60px] flex justify-center items-center rounded-md shadow-xl relative cursor-pointer ml-4"
          onClick={() => setShowCart(true)}
        >
          <span className="absolute top-0 right-2 text-[#b3b3b3] font-semibold text-[18px]">
            {items.length}
          </span>
          <FaShoppingCart className="text-pink-100 text-2xl" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4 text-pink-100 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
         <div className='md:hidden bg-[#66033e] text-pink-100 font-semibold text-lg flex flex-col gap-4 px-6 py-4 items-center
' >
        <Link to="/" className="hover:text-gray-300"> Home </Link> 
        <Link to="/About" className="hover:text-gray-300"> About </Link>
         
        <Link to="/Contect" className="hover:text-gray-300"> Contact </Link>
</div>
      )}
    </nav>
  );
}
