import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkUserAsync, selectLoggedInUser } from "../authSlice";
import { useLayoutEffect } from "react";

function Protected({ children }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedInUser);
  useLayoutEffect(()=>{
    dispatch(checkUserAsync());
  },[dispatch])

    return (<>
      {!isLoggedIn && <Navigate to="/login" replace={true}></Navigate>}
      {isLoggedIn && <div>
        {children}
      </div>}
    </>);
  }

export default Protected;
