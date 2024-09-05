import React from 'react'
import RootLayout from './RootLayout'
import Header from './elements/Header/Header'
import Footer from './elements/Footer/Footer'
import Home from './elements/Home/Home'
import Register from './elements/Regsiter/Register'
import Login from './elements/Login/Login'
import UserProfile from './elements/user-profile/UserProfile';
import Products from "./elements/Products/Products";
import Cart from './elements/cart/Cart'
import RoutingError from "./RoutingError";
import {Navigate} from 'react-router-dom';
import EditUser from "./elements/edit-user/Edituser";


import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
    const BrowserRouter=createBrowserRouter([
        {
            path: "",
            element:<RootLayout/>,
            errorElement:<RoutingError/>,
            children:[
                {
                    path: "",
                    element:<Home/>
                },
                {
                    path: "register",
                    element:<Register/>
                },
                {
                    path: "login",
                    element: <Login/>
                },
                {
                    path:"edit-user",
                    element:<EditUser />
                },
                {
                    path: "user-profile",
                    element: <UserProfile/>,
                    children:[
                        {
                            path: 'products',
                            element: <Products/>
                        },
                        {
                            path: 'cart',
                            element: <Cart/>
                        },
                        {
                            path: '',
                            element: <Navigate to={'products'}/>
                        }
                    ]
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={BrowserRouter}/>

    </div>
  )
}

export default App