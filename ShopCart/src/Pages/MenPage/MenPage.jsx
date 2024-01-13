import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClickedItem } from '../../utils/clickedItem'
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/Crad/Card'

const MenPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
const menProduct = useSelector(store => store.product.productData)
if(!menProduct) return null
const filterMenProduct = menProduct.filter(item => item.category === "men's clothing")
console.log(filterMenProduct)
const handleItemClick = (clickedItem) => {
    dispatch(getClickedItem(clickedItem))
    navigate("/itemDetail")
}
  return (
    <div className='pt-24 min-h-[80vh] flex flex-wrap justify-evenly gap-6' >
        {
            filterMenProduct.map(data => <Card 
                onClick={() => handleItemClick(data)}
                key={data.id} 
                img = {data.image} 
                title = {data.title} 
                rating = {data.rating.rate} 
                ratingCount = {data.rating.count} />)
        }
    </div>
  )
}

export default MenPage