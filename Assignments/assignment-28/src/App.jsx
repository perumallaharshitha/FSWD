import React from 'react'
import RootLayout from './RootLayout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import User from './User.jsx'

function App(children) {
  const browserRouter=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>
    }
  ]);

  return <RouterProvider router ={browserRouter}>
  {children}
  </RouterProvider>
  

  
}

export default App;