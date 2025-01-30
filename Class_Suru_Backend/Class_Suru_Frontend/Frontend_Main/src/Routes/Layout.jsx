import React from 'react'
import { Footer, Navbar } from '../Components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout