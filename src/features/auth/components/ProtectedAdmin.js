import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  //   if (user && user.role!=='admin') {
  //     return <Navigate to="/" replace={true}></Navigate>;
  //   }
  return children;
}

export default ProtectedAdmin;
