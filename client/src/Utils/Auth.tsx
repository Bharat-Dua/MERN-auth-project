import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default Auth;
