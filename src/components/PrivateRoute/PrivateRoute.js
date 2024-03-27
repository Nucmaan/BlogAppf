import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
function PrivateRoute() {
  const userInfo = useSelector((state) => state.user.user);
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
