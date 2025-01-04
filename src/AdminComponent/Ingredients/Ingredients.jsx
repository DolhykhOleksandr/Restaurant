import { Grid2 } from '@mui/material'
import React from 'react'
import IngredientTable from './IngredientTable'
import IngredientCategoryTable from './IngredientCategoryTable'

export default function Ingredients() {
  return (
    <div className='px-2'>
        <Grid2 container spacing={2}>
            <Grid2 size ={7} >
<IngredientTable/>
            </Grid2>
            <Grid2 size ={5}  >
            <IngredientCategoryTable/>
            </Grid2>
        </Grid2>
        </div>
        )
    }