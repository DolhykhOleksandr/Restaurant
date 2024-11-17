import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./component/Navbar/Navbar";
import { lightTheme } from "./Theme/LightTheme";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>

      <CssBaseline />

      <Navbar />

       <Home />

      <RestaurantDetails />

      <Cart />

    </ThemeProvider>
  );
}

export default App;
