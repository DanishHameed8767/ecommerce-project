import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCartProductsAsync } from "./features/cart/cartSlice";
import { fetchAllWishlistProductsAsync } from "./features/wishlist/wishlistSlice";
import { fetchAllProductsAsync, fetchAllSalesAsync, selectAllProducts, selectAllProductsList } from "./features/product/productSlice";
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
import AddSale from "./features/profile/Components/AddSale";
import Timer from "./features/Timer";
import CardSlider from "./pages/home-sections/CardSlider";
import UpdateArrival from "./features/profile/Components/UpdateArrival";
import { checkUserAsync } from "./features/auth/authSlice";
import ViewSearchPage from "./pages/ViewSearchPage";
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
    path: "/products/details/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/products/view",
    element: <ViewProductsPage />,
  },
  {
    path: "/search/results",
    element: <ViewSearchPage />,
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
    path: "/admin/updatearrival",
    element: (
      <ProtectedAdmin>
        <UpdateArrival />
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
    path: "/admin/sale",
    element: (
      <ProtectedAdmin>
        <AddSale />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/test",
    element: <CardSlider />,
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
    dispatch(fetchAllProductsAsync('product'));
    dispatch(fetchAllSalesAsync());
    dispatch(fetchAllCategoriesAsync());
    dispatch(checkUserAsync());
  }, []);
  const products = useSelector(selectAllProducts)
  console.log(products);
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
