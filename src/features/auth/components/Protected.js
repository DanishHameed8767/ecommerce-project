import { useDispatch, useSelector } from "react-redux";
import { checkUserAsync, selectLoading, selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useLayoutEffect } from "react";

function Protected({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedInUser);
  const isLoading = useSelector(selectLoading);
  useLayoutEffect(() => {
    dispatch(checkUserAsync());
  }, [dispatch]);

  if(isLoading) {
    return <ClipLoader className="mx-auto" loading={isLoading} width={100} size={150} color="red" />
  }
  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
}

export default Protected;
