import React from 'react'
import { useSelector } from 'react-redux'

const SearchPage = () => {
    const products = useSelector(store => store.product.productData)
    
  return (
    <div>
        
    </div>
  )
}

export default SearchPage