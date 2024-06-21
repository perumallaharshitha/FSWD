import React, { Children } from 'react'
import RootLayout from './RootLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Register from './components/Regsiter/Register'
import Login from './components/Login/Login'
import About from './components/About/About'
import RoutingError from './RoutingError'
import UserProfile from './components/user-profile/UserProfile'
import Cart from './components/cart/Cart'

function App() {

  // Browser Router

  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <RoutingError/>,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "login",
          element: <Login />
        }, 
        {
          path: "about",
          element:<About/>
        },
        {
          path:"user-profile",
          element:<UserProfile/>
        },
        {
          path:"cart",
          element:<Cart/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={browserRouter}>
      {Children}
    </RouterProvider>
  )
}

export default App