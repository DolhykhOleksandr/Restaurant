import React, { useEffect } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./component/Navbar/Navbar";
import { lightTheme } from "./Theme/LightTheme";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import { CustomerRoute } from "./Routes/CustomerRoute";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./component/State/Authentication/Action";
import { findCart } from "./component/State/Cart/Action";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
     
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart(jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={lightTheme}>

      <CssBaseline />

       <CustomerRoute/> 

    </ThemeProvider>
  );
}

export default App;
