import React from "react";
import { IconButton, Box, Typography, Avatar, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Person2Icon from "@mui/icons-material/Person2";
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authReducer } from "../State/Authentication/Reducer";

export const Navbar = () => {
  const { auth,cart } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
      navigate("/my-profile");
    } else {
      navigate("/admin/restaurant");
    }
  };

  // const handleAvatarClick = () => {
  //   if (auth.user?.role === "ROLE_CUSTOMER") {
  //     navigate("/my-profile");
  //   } else {
  //     navigate("/admin/restaurant");
  //   }
  // };
  const handleLogoClick = () => {
    // Плавная прокрутка к началу страницы
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Навигация на главную страницу
    navigate("/");
  };


  return (
    <Box>
      <div style={{ backgroundColor: "#f6c946" }} className="fixed top-0 w-full z-50 px-5 py-4 lg:px-20 flex justify-between">

        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
          <Box display="flex" alignItems="center">
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#34a853",
                fontFamily: "Arial, sans-serif",
              }}
            ><li onClick={handleLogoClick} className="">
              DailyDelivery
              </li>
            </Typography>
            <PinDropIcon
              sx={{
                fontSize: "1.8rem",
                color: "#34a853",
                marginLeft: "0.1rem",
              }}
            />
          </Box>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-10">
          <div>
            <IconButton>
              <SearchIcon sx={{ fontSize: "2.0rem", color: "#34a853" }} />
            </IconButton>
          </div>

          <div className="">
            {auth.user ? (
              <Avatar
              onClick={handleAvatarClick}
              sx={{
                bgcolor: "#f6c946",
                fontSize: "2.0rem",
                color: "#34a853",
                border: "2px solid #34a853", 
                width: "40px",              
                height: "40px",             
                fontWeight: "bold",
              }}
            >
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
            
            ) : (
              <IconButton onClick={() => navigate("/account/login")}>
                <Person sx={{ fontSize: "2.2rem", color: "#34a853" }} />
              </IconButton>
            )}
          </div>

          <div>
            <IconButton onClick={()=>navigate("/cart")}>
            <Badge color="primary" badgeContent={cart.cart?.items.length}>
              <ShoppingCartIcon sx={{ fontSize: "2.0rem", color: "#34a853" }} />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
    </Box>
  );
};
