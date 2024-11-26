import React from "react";
import { IconButton, Box, Typography, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Person2Icon from "@mui/icons-material/Person2";
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate=useNavigate()
  return (
  <Box>
    <div className=" sticky px-5  top-0 z-[50] py-[.8rem] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <Box display="flex" alignItems="center">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#34a853",
              fontFamily: "Arial, sans-serif",
            }}
          >
            DailyDelivery 
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
        <div>
          <IconButton onClick={()=>navigate("/account/login")}>
            {false ? (
              <Avatar
                sx={{ bgcolor: "white", fontSize: "2.2rem", color: "#34a853" }}
              >
                C
              </Avatar>
            ) : (
              <Person sx={{ fontSize: "2.2rem", color: "#34a853" }} />
            )}
          </IconButton>
        </div>

        <div>
          <IconButton>
            <ShoppingCartIcon sx={{ fontSize: "2.0rem", color: "#34a853" }} />
          </IconButton>
        </div>
      </div>
    </div>
    </Box>
  );
};
