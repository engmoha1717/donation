import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Nav