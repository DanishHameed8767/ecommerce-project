import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import WishlistItem from './WishlistItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail} from '../../product/productSlice';
import { delFromWishlistAsync, fetchAllWishlistProductsAsync, selectAllWishlistProducts } from '../wishlistSlice';
const Wishlist = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const wishProducts = useSelector(selectAllWishlistProducts);
    useEffect(()=>{
      dispatch(fetchAllWishlistProductsAsync());
      // eslint-disable-next-line
    },[])
  return (
    <>
    <div className="container mt-5">
      <h2 className='fw-light'>Wishlist ({wishProducts.length})</h2>
      </div>
      <div className='mt-4'>
 <div className="card-group">
    {wishProducts.map((val)=>{
      const handleClick = (e) =>{
        e.preventDefault();
        dispatch(delFromWishlistAsync(val));
    }
    const RouterChange = () =>{
      console.log(val);
      dispatch(getProductDetail(val.product));
      navigate('/products/details');
    }
        return <WishlistItem val={val} handleClick={handleClick} RouterChange={RouterChange}/>
    })}
      </div>
      </div>
    </>
  )
}

export default Wishlist
