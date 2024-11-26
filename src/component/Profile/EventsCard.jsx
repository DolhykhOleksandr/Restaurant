import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
export const EventCard = () => {
    return (
      <div>
        <Card sx={{ width: 345 }}>
          <CardMedia
            sx={{ height: 345 }}
            image="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
    
    <CardContent>
  <Typography variant="h5">American Fast Food</Typography>
  <Typography variant="body2">50% off on your second order</Typography>
  <div className="py-2 space-y-2">
    <p>{"NewYork"}</p>
    <p className="text-sm text-blue-800"> November 24, 2024 12:00 AM</p>
    <p className="text-sm text-red-500">November 30, 2024 12:00 AM</p>
  </div>
  </CardContent>
{false && 
<CardActions>
<IconButton>
<DeleteIcon/>
</IconButton>
</CardActions>}
</Card>
</div>

  );
};
