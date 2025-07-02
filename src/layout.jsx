import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

//header and footer will reamain same on every page, 'outlet' component will render the different contents of page
function Layout() {
  return (
    <>
      <Header /> 
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
