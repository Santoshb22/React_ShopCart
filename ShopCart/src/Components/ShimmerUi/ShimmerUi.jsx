import React from 'react'
import ShimmerCard from './ShimmerCard'

const ShimmerUi = () => {
    const showTimes = Array.from({ length: 10 })
  return (
  <div className='flex flex-wrap justify-evenly gap-10 mb-4'>
    {
        showTimes.map((card, index) => <ShimmerCard key={index}/>)
    }
  </div>
  )
}

export default ShimmerUi