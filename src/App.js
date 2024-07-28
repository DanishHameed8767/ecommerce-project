import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCartProductsAsync,
  fetchLocalStorageCart,
  mergeCartsAsync,
} from "./features/cart/cartSlice";
import { fetchAllProductsAsync } from "./features/product/productSlice";
import Checkout from "./features/Checkout/components/Checkout";
import OrderPlaced from "./features/Checkout/components/OrderPlaced";
import OrderList from "./features/Checkout/components/OrderList";
import AdminProfile from "./features/profile/AdminProfile";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import ViewCategoryProductsPage from "./pages/ViewCategoryProductsPage";
import UpdateArrival from "./features/profile/Components/UpdateArrival";
import { checkUserAsync, selectLoggedInUser } from "./features/auth/authSlice";
import ViewSearchPage from "./pages/ViewSearchPage";
import Address from "./features/Checkout/components/Address";
import Dashboard from "./app/Test";
import ScrollToTop from "./app/ScrollToTop";
import ViewAllProductsPage from "./pages/ViewAllProductsPage";
import PageNotFound from "./app/PageNotFound";
import Protected from "./features/auth/components/Protected";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedInUser);
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_SUCCESS_URL);
  useEffect(() => {
    dispatch(checkUserAsync());
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));
    if (!isLoggedIn) {
      dispatch(fetchLocalStorageCart());
    } else if (localStorageCart) {
      dispatch(mergeCartsAsync(localStorageCart));
    } else {
      dispatch(fetchAllCartProductsAsync());
    }
  }, [isLoggedIn, dispatch]);
  return (
    <>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/signup"} element={<SignUpPage />} />
          <Route path={"/cart"} element={<CartPage />} />
          <Route path={"/products/:id"} element={<ProductDetailPage />} />
          <Route
            path={"/categories/:id"}
            element={<ViewCategoryProductsPage />}
          />
          <Route path={"/products/"} element={<ViewAllProductsPage />} />
          <Route path={"/search/:id"} element={<ViewSearchPage />} />
          <Route path={"/order/placed"} element={<OrderPlaced />} />
          <Route element={<Protected />}>
          <Route path={"/address"} element={<Address/>} />
          </Route>
          <Route element={<Protected />}>
          <Route path={"/checkout"} element={<Checkout/>} />
          </Route>
          <Route element={<Protected />}>
          <Route path={"/orders"} element={<OrderList/>} />
          </Route>
          <Route
            path={"/admin"}
            element={
              <ProtectedAdmin>
                <AdminProfile />
              </ProtectedAdmin>
            }
          />
          <Route
            path={"/admin/updatearrival"}
            element={
              <ProtectedAdmin>
                <UpdateArrival />
              </ProtectedAdmin>
            }
          />
          <Route path={"/test"} element={<Dashboard />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
