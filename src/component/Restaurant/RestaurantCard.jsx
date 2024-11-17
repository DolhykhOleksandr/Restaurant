import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Card, Chip, IconButton } from "@mui/material";
import React from "react";

const RestaurantCard = () => {
  
  return (
    <Card className="w-[18rem]">
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://cdn.pixabay.com/photo/2016/04/20/00/41/mcdonalds-1340199_1280.jpg"
          alt=""
        />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>

      <div className="p-4 textPart 1g:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">McDonald's </p>

          <p className="text-gray-500 text-sm">
            "Try the new McMenu at McDonald's today!"{" "}
          </p>
        </div>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
