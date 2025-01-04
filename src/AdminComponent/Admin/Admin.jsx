import React from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Orders } from '../Orders/Orders'
import { FoodCategory } from '../FoodCategory/FoodCategory'

import { Events } from '../Events/Events'
import { RestaurantDetails } from './RestaurantDetails'
import { RestaurantDashboard } from '../Dashboard/Dashboard'
import { Menu } from '../Menu/Menu'
import Ingredients from '../Ingredients/Ingredients'
import AddMenuForm from '../Menu/AddMenuForm'
import CreateRestaurantForm from '../CreateRestaurantForm/CreateRestaurantForm'

export const Admin = () => {
    const handleClose = () => { }
    return (
        <div>
            <div className='lg:flex justify-between'>
                <div>
                    <AdminSideBar handleClose={handleClose} />
                </div>
                <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path='/' element={<RestaurantDashboard />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/category' element={<FoodCategory />} />
                        <Route path='/ingredients' element={<Ingredients />} />
                        <Route path='/event' element={<Events />} />
                        <Route path='/details' element={<RestaurantDetails />} />
                        <Route path='/add-restaurant' element={<CreateRestaurantForm />} />
                        <Route path='/add-menu' element={<AddMenuForm />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
