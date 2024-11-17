import { Button, Card } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

export const CardAddress = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className="flex gap-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-black">
        <h1 className="font-semibold text-lg text-gray-50">Home</h1>
        <p>Viale Regina Margherita, 43, 55049 Viareggio LU, Italy</p>
        {showButton && (
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleSelectAddress(item)}
          >
            select
          </Button>
        )}
      </div>
    </Card>
  );
};
