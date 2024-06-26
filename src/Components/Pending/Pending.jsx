import React from 'react'
import { NavLink } from 'react-router-dom'

import './Pending.css'
import home1 from '../../Images/home1.png'
import home2 from '../../Images/home2.png'
import home3 from '../../Images/home3.png'
import home4 from '../../Images/home4.png'
import home5 from '../../Images/home5.png'
import home6 from '../../Images/home6.png'
import home7 from '../../Images/home7.png'
import home8 from '../../Images/home8.png'
import home9 from '../../Images/home9.png'

export default function Pending() {
  return (
    <div className="pending mt-3">
      <div className="row justify-content-between ">
        <div className="col-md-5 position-relative">
          <i class="fa-solid fa-magnifying-glass position-absolute p-2 mt-1"></i>
          <input
            type="text"
            className="w-75 py-1 rounded-1 border-0 bg-light"
            placeholder="search properties for customer etc"
          />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <div className="bell me-4">
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className="profile d-flex align-items-center">
            <div className="icon me-3">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="details">
              <h4>Hawkine maru</h4>
              <p>Company Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mainBg">
        <h2 className="ms-4">Pending properties</h2>

        <div className="items p-3">
          <div className="row g-3">
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home1} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>320 000</h5>
                      <p>Barcelona iv.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home2} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>380 000</h5>
                      <p>Barcelona i.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home3} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>270 000</h5>
                      <p>Madrid iii.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home4} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>320 000</h5>
                      <p>Barcelona iv.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home5} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>320 000</h5>
                      <p>Barcelona iv.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home6} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>320 000</h5>
                      <p>Barcelona iv.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home7} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>320 000</h5>
                      <p>Barcelona iv.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home8} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>320 000</h5>
                      <p>Barcelona iv.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 rounded-4 ">
              <div className="item bg-light ">
                <div className="item-img">
                  <img className="w-100" src={home9} alt="" />
                </div>
                <div className="item-details m-2 py-1 px-3">
                  <h4>Magnificent duplex in a private villa</h4>
                  <div className="last d-flex align-items-center justify-content-between">
                    <div className="price">
                      <h5>320 000</h5>
                      <p>Barcelona iv.</p>
                    </div>
                    <div className='icons d-flex'>
                    <i class="fa-solid fa-xmark pe-3 fs-4 text-danger"></i>
                    <i class="fa-solid fa-check fs-4 text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
