import Card from '../../Components/Crad/Card'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getClickedItem } from '../../utils/clickedItem';

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
      {
        products.map((data)=> <Card 
        onClick={() => handleItemClick(data)}
        key={data.id} 
        img = {data.image} 
        title = {data.title} 
        rating = {data.rating.rate} 
        ratingCount = {data.rating.count} /> )
      }
    
    </div>
  )
}

export default Home