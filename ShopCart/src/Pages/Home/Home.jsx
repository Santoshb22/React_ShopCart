import Card from '../../Components/Crad/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getClickedItem } from '../../utils/clickedItem';
import ShimmerUi from '../../Components/ShimmerUi/ShimmerUi';

const Home = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const products = useSelector(store => store.product.productData)
if(!products) return null;

const handleItemClick = (clickedProduct) => {
if(!clickedProduct) {
  return null
} else{ 
  dispatch(getClickedItem(clickedProduct));
  navigate("itemDetail")
}
};



  return (
    <div className='pt-24 min-h-[80vh] flex flex-wrap justify-evenly gap-6'>
      <p className='absolute font-serif w-full left-0 top-20 bg-orange-100 rounded-md px-2'>⚠️ Please select product and add to your cart</p>
      { products ? (
        products.map((data)=> <Card 
        onClick={() => handleItemClick(data)}
        key={data.id} 
        img = {data.image} 
        title = {data.title} 
        rating = {data.rating.rate} 
        ratingCount = {data.rating.count} /> )) :
        (<ShimmerUi/>)
      }
    
    </div>
  )
}

export default Home