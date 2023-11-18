import { useDispatch, useSelector } from "react-redux";
import { Navigate,useNavigate } from "react-router-dom";
import { checkUserAsync, selectUserDetails } from "../authSlice";
import { useEffect, useLayoutEffect } from "react";

function ProtectedAdmin({ children }) {
  const dispatch = useDispatch();
  const userDetails = useSelector(selectUserDetails);
  const navigate = useNavigate();

  useLayoutEffect(()=>{
    dispatch(checkUserAsync());
  },[])

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
