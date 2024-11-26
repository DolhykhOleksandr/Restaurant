import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
    return (
      <Card className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-5">
    <img
  className="h-16 w-16"
  src="https://cdn.pixabay.com/photo/2021/02/08/18/27/pizza-5995982_1280.jpg"
  alt=""
/>
<div>
  <p>Pizza</p>
  <p>$50</p>
</div>
</div>
<div>
  <Button className="cursor-not-allowed">completed</Button>
</div>
</Card>
  );
};
