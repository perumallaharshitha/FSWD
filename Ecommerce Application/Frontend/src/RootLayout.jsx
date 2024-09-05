import React from 'react'
import Header from './elements/Header/Header'
import Footer from './elements/Footer/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
    <Header/>
    <div style={{minHeight:"100vh"}} className='container w-100' >
    <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default RootLayout