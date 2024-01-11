import React from 'react'

const Footer = () => {
  return (
   <footer className='flex justify-evenly bg-[#000000] text-white py-4   '>
    <div>
        <ul>
           <li className='text-[#b2b2b2] my-2'>About</li>
           <li>Contact us</li>
           <li>About us</li>
           <li>Careers</li>
           <li>Flipkart Stories</li>
        </ul>
    </div>

    <div>
        <ul>
            <li className='text-[#b2b2b2] my-2'>Help</li>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation and Returns</li>
            <li>FAQ</li>
            <li>Report Infringgment</li>
        </ul>
    </div>

    <div>
        <ul>
            <li className='text-[#b2b2b2] my-2'>Social</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
        </ul>
    </div>
   </footer>
  )
}

export default Footer