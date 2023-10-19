import React, { useEffect } from 'react'
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductsAsync, getProductDetail, selectAllProducts } from '../productSlice';
import { useNavigate } from 'react-router-dom';
import { addToWishlistAsync } from '../../wishlist/wishlistSlice';

export default function ProductList() {
    const navigate = useNavigate();
    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();
  return (
    <>
      <div className='mt-4  d-flex flex-row'>
 <div className="card-group">
    {products.map((value)=>{
      const handleClick = (e) =>{
        e.preventDefault();
            e.target.style.color = 'red';
            console.log(value);
            dispatch(addToWishlistAsync(value));
      }
        const RouterChange = () =>{
          dispatch(getProductDetail(value));
          navigate('/products/details');
          console.log(value)
        }
        return <ProductItem item={value} handleClick={handleClick} RouterChange={RouterChange}/>
    })}
      </div>
      </div>
    </>
  )
}
