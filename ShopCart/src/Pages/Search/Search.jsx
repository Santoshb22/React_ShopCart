import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../Components/Crad/Card';
import { getClickedItem } from '../../utils/clickedItem';

const Search = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])
  const location = useLocation();
  const products = useSelector(store => store.product.productData);
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if(products && searchQuery){
      const searchWords = searchQuery.toLowerCase().split(' ')
      const results = products.filter(item => searchWords.some(words => item.title.toLowerCase().includes(words) || item.category.toLowerCase().includes(words)))
      setSearchResults(results)
    }
  }, [searchQuery, products]);

  const handleClicked = (clickedItem) => {
    dispatch(getClickedItem(clickedItem))
    navigate("/itemDetail")
  } 
  return (
    <div className='pt-24 min-h-[80vh] flex flex-wrap gap-10'>
      {products ? (
        searchResults.map(data => (
          <Card
          onClick={() => {handleClicked(data)}}
            key={data.id}
            img={data.image}
            title={data.title}
            rating={data.rating.rate}
            ratingCount={data.rating.rate}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Search;
