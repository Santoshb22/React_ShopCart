import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../Components/Crad/Card'
import { getClickedItem } from '../../utils/clickedItem'
import { useNavigate } from 'react-router-dom'

const ElectronicsPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const electronicsProduct = useSelector(store => store.product.productData)
    if(!electronicsProduct) return null

    const filterElectronicProduct = electronicsProduct.filter(item => item.category === "electronics" )
    const handleClickedItem = (clickedItem) =>{
        dispatch(getClickedItem(clickedItem))
        navigate("/itemDetail")
    }
  return (
    <div className='pt-24 min-h-[80vh] flex flex-wrap justify-evenly gap-6'>
        {  
            filterElectronicProduct.map(data => <Card
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

export default ElectronicsPage