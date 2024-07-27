import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkUserAsync, selectUserDetails } from "../authSlice";
import { useLayoutEffect } from "react";

function ProtectedAdmin({ children }) {
  const dispatch = useDispatch();
  const userDetails = useSelector(selectUserDetails);
  useLayoutEffect(()=>{
    dispatch(checkUserAsync());
  },[dispatch])

    return (<>
    {userDetails && <div>
      {!userDetails.role && <Navigate to="/login" replace={true}></Navigate>}
      {userDetails.role === 'admin' && <div>
        {children}
      </div>}
      {userDetails.role === 'user' && <Navigate to="/" replace={true}></Navigate>}
      </div>}
    </>);
  }

export default ProtectedAdmin;
