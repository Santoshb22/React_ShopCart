import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../Components/Crad/Card'
import { getClickedItem } from '../../utils/clickedItem'
import { useNavigate } from 'react-router-dom'

const WomenPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const womenProduct = useSelector(store => store.product.productData)
    console.log(womenProduct)
    if(!womenProduct) return null

    const filterWomenProduct = womenProduct.filter(item => item.category === "women's clothing" )
    const handleClickedItem = (clickedItem) =>{
        dispatch(getClickedItem(clickedItem))
        navigate("/itemDetail")
    }
  return (
    <div className='pt-24 min-h-[80vh] flex flex-wrap justify-evenly gap-6'>
        {
            filterWomenProduct.map(data => <Card
            onClick={() => {handleClickedItem(data)}}
            key={data.id} 
            img = {data.image} 
            title = {data.title} 
            rating = {data.rating.rate} 
            ratingCount = {data.rating.count} 
            />)
        }
    </div>
  )
}

export default WomenPage