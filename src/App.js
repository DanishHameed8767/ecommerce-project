import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCartProductsAsync } from "./features/cart/cartSlice";
import { fetchAllWishlistProductsAsync } from "./features/wishlist/wishlistSlice";
import { fetchAllProductsAsync } from "./features/product/productSlice";
import Checkout from "./features/Checkout/components/Checkout";
import OrderPlaced from "./features/Checkout/components/OrderPlaced";
import OrderList from "./features/Checkout/components/OrderList";
import Footer from "./pages/home-sections/Footer";
import AdminProfile from "./features/profile/AdminProfile";
import AddCategory from "./features/profile/Components/AddCategory";
import AddProduct from "./features/profile/Components/AddProduct";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import { fetchAllCategoriesAsync } from "./features/profile/AdminSlice";
import ViewProductsPage from "./pages/ViewProductsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/products/details",
    element: <ProductDetailPage />,
  },
  {
    path: "/products/view",
    element: <ViewProductsPage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/order/placed",
    element: <OrderPlaced />,
  },
  {
    path: "/order/list",
    element: <OrderList />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminProfile />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/category",
    element: (
      <ProtectedAdmin>
        <AddCategory />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product",
    element: (
      <ProtectedAdmin>
        <AddProduct />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/test",
    element: <Footer />,
  },
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
  useEffect(() => {
    dispatch(fetchAllCartProductsAsync());
    dispatch(fetchAllWishlistProductsAsync());
    dispatch(fetchAllProductsAsync());
    dispatch(fetchAllCategoriesAsync());
  }, []);

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
