import React from 'react'
import RootLayout from './RootLayout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './App.css'


function App(children) {
  const browserRouter=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>
    }
  ]);

  return <RouterProvider router ={browserRouter}>
  <div className="body">
    {children}
  </div>
  </RouterProvider>
  

  
}

export default App;