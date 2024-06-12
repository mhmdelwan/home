import React from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom'
import logo from '../../Images/logo.jpg'

export default function Navbar() {
  return (
    <div className='sidebar'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h4 className='text-center mt-2 mb-4'>Home Finder</h4>
        {/* <div className="links">
          <ul>
            <li className='list-unstyled'>
              <i className="fa-solid fa-table-columns pe-3 fs-5 text-success"></i>
              <NavLinkLink activeClassName='' className='text-decoration-none text-success' to="">Dashboard</NavLinkLink>
            </li>
            <li className='list-unstyled'>
            <i className="fa-solid fa-diagram-project pe-3 fs-5 text-success"></i>
              <Link className='text-decoration-none text-success' to="">Property</Link>
            </li>
            <li className='list-unstyled'>
            <i className="fa-solid fa-users pe-3 fs-5 text-success"></i>
              <Link className='text-decoration-none text-success' to="">Users</Link>
            </li>
            <li className='list-unstyled'>
            <i className="fa-solid fa-chart-simple pe-3 fs-5 text-success"></i>
              <Link className='text-decoration-none text-success' to="">Analytics</Link>
            </li>
            <li className='list-unstyled'>
            <i className="fa-solid fa-clock-rotate-left pe-3 fs-5 text-success"></i>
              <Link className='text-decoration-none text-success' to="">Pending</Link>
            </li>
            <li className='list-unstyled'>
            <i className="fa-solid fa-user pe-3 fs-5 text-success"></i>
              <Link className='text-decoration-none text-success' to="">My Profile</Link>
            </li>
          </ul>
        </div> */}

        <div className="sidebar-body">
          <div className="sidebar-menu">
            <ul className="menu-list">
              <li className="menu-item list-unstyled">
                <NavLink to="/"  className=' menu-link text-decoration-none'>
                  <span  className='menu-link-icon fa-solid fa-table-columns'></span>
                  <span  className='menu-link-text'>Dashboard</span>
                </NavLink>
              </li>
              <li className="menu-item list-unstyled">
                <NavLink to="property"  className=' menu-link text-decoration-none'>
                  <span  className='menu-link-icon fa-solid fa-diagram-project'></span>
                  <span  className='menu-link-text'>Property</span>
                </NavLink>
              </li>
              <li className="menu-item list-unstyled">
                <NavLink to="users"  className=' menu-link text-decoration-none'>
                  <span className='menu-link-icon fa-solid fa-users'></span>
                  <span className='menu-link-text'>Users</span>
                </NavLink>
              </li>
              <li className="menu-item list-unstyled">
                <NavLink to="/"  className=' menu-link text-decoration-none'>
                  <span className='menu-link-icon fa-solid fa-chart-simple'></span>
                  <span className='menu-link-text'>Analytics</span>
                </NavLink>
              </li>
              <li className="menu-item list-unstyled">
                <NavLink to="/"  className=' menu-link text-decoration-none'>
                  <span className='menu-link-icon fa-solid fa-clock-rotate-left'></span>
                  <span className='menu-link-text'>Pending</span>
                </NavLink>
              </li>
              <li className="menu-item list-unstyled">
                <NavLink to="/"  className=' menu-link text-decoration-none'>
                  <span className='menu-link-icon fa-solid fa-solid fa-user'></span>
                  <span className='menu-link-text'>My Profile</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
