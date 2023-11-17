import React, { useEffect } from "react";
import ProfileNavbar from "./Components/ProfileNavbar";
import { useDispatch } from "react-redux";
import { fetchAllArrivalsAsync } from "./AdminSlice";

export default function AdminProfile() {
  const dispatch = useDispatch();
  return (
    <>
      <ProfileNavbar />
      <div className="container">
        <h1>Admin Panel</h1>
      </div>
    </>
  );
}
