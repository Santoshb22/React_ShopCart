import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const cartVal = useSelector(store => store.cart.length)
   
    const handleSearchBar = () => {
        alert("I haven't built search features please try later")
    }
  return (
    <nav className='flex items-center justify-evenly fixed z-10 border-b-2 shadow-gray-700 shadow-md w-screen bg-[#181818] text-white p-4'>
        <div className='flex items-center gap-1'>
            <Logo/>
           <Link to={"/"}> <span className='font-semibold text-xl'>ShopCart</span> </Link>
        </div>

        <div className='mx-4 flex'>
            <button 
            className='bg-white px-3 py-3 rounded-tl-md rounded-bl-md' >
                <FaSearch className='text-black'/>
            </button>
            <input  
            className='w-[40vw] border-none outline-none text-black font-mono px-2 py-2 rounded-tr-md rounded-br-md' 
            onClick={handleSearchBar}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            id='Search'
            type="text" 
            placeholder='Search for Products, Brands and more' />
        </div>

        <div >
            <ul className='flex gap-4'>
                <li><Link to={"men"}>Men</Link></li>
                <li><Link to={"women"}>Women</Link></li>
                <li><Link to={"electronics"}>Electronics</Link></li>
            </ul>
        </div>

        <Link to={"cart"} className='flex items-center gap-1'>
            <FaShoppingCart className='size-6'/> 
            Cart
            <span className='mx-1 text-red-500 py-1 rounded-lg' >{cartVal}</span>
        </Link>
    </nav>
  )
}

export default Header