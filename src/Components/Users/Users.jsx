import React from 'react'
import './Users.css'
import { NavLink, Outlet } from 'react-router-dom'
// import AddUser from '../AddUser/AddUser'
import Table from '../Table/Table'

export default function Users() {
  return (
    <div className='users mt-3'>
        <div className="row justify-content-between">
        <div className="col-md-5 position-relative">
          <i class="fa-solid fa-magnifying-glass position-absolute p-2"></i>
          <input type="text" className='w-50 py-1 rounded-1 border-0' placeholder='search users' />
          <div className="btn ms-4">
            <button type='submit' className='me-3 text-white btn-sub'>Submit</button>
            <button type='reset' className='bg-danger text-white'>Clear</button>
          </div>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <div className="bell me-4">
            <i className='fa-regular fa-bell'></i>
          </div>
          <div className="profile d-flex align-items-center">
            <div className="icon me-3">
              <i className='fa-solid fa-user'></i>
            </div>
            <div className="details">
              <h4>Hawkine maru</h4>
              <p>Company Manager</p>
            </div>
          </div>
        </div>
      </div>

        <div className="dashboard p-2">
        <div className="userDashboard d-flex justify-content-between">
          <div className="title">
            <h3>UsersDashboard</h3>
          </div>
          <div className="addUser">
          <NavLink to="addUser"  className=' menu-link text-decoration-none'>
                  <span  className='menu-link-icon fa-solid fa-image fs-4 text-dark'></span>
                  <span  className='menu-link-text text-white'>Add new user</span>
                </NavLink>
          </div>
        </div>
        
        <Table/>
        <Outlet></Outlet>
        
        </div>
        

    </div>
  )
}
