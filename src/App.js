import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import WishlistPage from './pages/WishlistPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCartProductsAsync } from './features/cart/cartSlice';
import { fetchAllWishlistProductsAsync } from './features/wishlist/wishlistSlice';
import { fetchAllProductsAsync } from './features/product/productSlice';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Home />
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/cart',
    element: (
        <CartPage />
    ),
  },
  {
    path: '/products/details',
    element: (
        <ProductDetailPage />
    ),
  },
  {
    path: '/wishlist',
    element: (
        <WishlistPage />
    ),
  },
  // {
  //   path: '/checkout',
  //   element: (
  //       <Checkout></Checkout>
  //   ),
  // },
]);

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(selectLoggedInUser);

  // useEffect(() => {
  //   if (user) {
  //     dispatch(fetchItemsByUserIdAsync(user.id));
  //     dispatch(fetchLoggedInUserAsync(user.id));
  //   }
  // }, [dispatch, user]);
  useEffect(()=>{
  dispatch(fetchAllCartProductsAsync());
  dispatch(fetchAllWishlistProductsAsync());
  dispatch(fetchAllProductsAsync());
  },[])

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        {/* Link must be inside the Provider */}
      </div>
    </>
  );
}

export default App;