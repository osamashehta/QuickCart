import React, { useEffect } from 'react'
import Header from '../Navbar/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
     
    
  return (
    <>
        <Header/>
        <main className='container w-[90%] m-auto mt-20 '>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout
