import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return <>
  <div className='parent'>
    <Navbar />
    <Outlet></Outlet>
  </div>
  </>
}
