import React from 'react'
import { useSelector } from 'react-redux'

const ItemDetail = () => {
    const clickedItem = useSelector(store => store.clickedItem.showClickedItem)
    if(!clickedItem) return null
    console.log(clickedItem)



  return (
    <div className='flex items-center mx-[10%] gap-10 pt-24 min-h-[98vh]'>
        <div>
           <img className='h-auto  border-2' src={clickedItem.image} alt="item image" />
           <button className='bg-orange-600 my-4 w-full rounded-md font-semibold font-mono px-2 py-2'>Add to cart</button>
        </div>   
        <div>
            <span className='font-mono text-[#181818]'>{clickedItem.category}</span>
            <h1 className='text-3xl font-semibold mb-2'>{clickedItem.title}</h1>
            <p className='my-2'>{clickedItem.description}</p>
            <p>{clickedItem.rating.rate} ⭐ | {clickedItem.rating.count} <span className='text-[#2e2e2e]'>reviews</span> </p>
            <p className='font-semibold font-mono my-1'>{clickedItem.price}$</p>
        </div>
    </div>
  )
}

export default ItemDetail