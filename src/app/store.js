import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product/productSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer from '../features/Checkout/orderSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import AdminReducer from '../features/profile/AdminSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    order:  orderReducer,
    cart:  cartReducer,
    wishlist: wishlistReducer,
    admin: AdminReducer
  },
});
