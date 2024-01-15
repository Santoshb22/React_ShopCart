import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")
    const cartVal = useSelector(store => store.cart.length)
   
    const handleSearchBar = () => {
        navigate(`search?q=${searchQuery}`)
        setSearchQuery("")
    }
  return (
    <nav className='flex items-center justify-between sm:justify-evenly fixed z-10 border-b-2 shadow-gray-700 shadow-md w-screen bg-[#181818] text-white p-4'>
        <div className='flex items-center gap-1'>
            <Logo/>
           <Link to={"/"}> <span className='hidden sm:block font-semibold text-xl'>ShopCart</span> </Link>
        </div>

        <div className='mx-4 flex'>
            <button 
            className='bg-white px-2 sm:px-3 sm:py-3 rounded-tl-md rounded-bl-md'
            onClick={handleSearchBar}
            >
                <FaSearch className='text-black'/>
            </button>
            <input  
            className=' w-[20vw] sm:w-[40vw] border-none outline-none text-black font-mono px-2 h-8 sm:h-12 sm:py-2 rounded-tr-md rounded-br-md' 
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            id='Search'
            type="text" 
            placeholder='Search for Products, Brands and more' 
            onKeyPress = {(e) => {
                if (e.key === 'Enter') {
                handleSearchBar();
                }
            }}
            />
           
        </div>

        <div >
            <ul className='flex gap-4'>
                <li className='text-sm sm:text-lg'><Link to={"men"}>Men</Link></li>
                <li className='text-sm sm:text-lg'><Link to={"women"}>Women</Link></li>
                <li className='hidden sm:block sm:text-lg'><Link to={"electronics"}>Electronics</Link></li>
            </ul>
        </div>

        <Link to={"cart"} className='flex items-center gap-1 ml-2'>
            <FaShoppingCart className=' size-4 sm:size-6 hidden sm:block'/> 
            Cart
            <span className='mx-1 text-red-500 py-1 rounded-lg text-sm sm:text-lg' >{cartVal}</span>
        </Link>
    </nav>
  )
}

export default Header