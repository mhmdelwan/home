import React from 'react'
import './Home.css'
import Person from '../../Images/person.jpeg'
import PieChart1 from '../PieChart1/PieChart1'
import PieChart2 from '../PieChart2/PieChart2'
import PieChart3 from '../PieChart3/PieChart3'
import PieChart4 from '../PieChart4/PieChart4'
import RevenueChart from '../RevenueChart/RevenueChart'
import Three from '../Three/Three'

export default function Home() {

  
  
  return (
    <div className="home mt-3">
      <div className="row justify-content-between">
        <div className="col-md-5 position-relative">
          <i class="fa-solid fa-magnifying-glass position-absolute p-2 mt-1"></i>
          <input type="text" className='w-75 py-1 rounded-1 border-0' placeholder='search properties for customer etc' />
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
      <div className="items">
        <div className="row ">
          <div className="col-md-3 p-1">
            <div className="item bg-light m-2 d-flex justify-content-between align-items-center px-3 py-1">
              <div68 className="first">
                <p>Properties for Sale</p>
                <h2>4</h2>
              </div68>
              <div className="second">
                <PieChart1 />
              </div>
            </div>
          </div>
          <div className="col-md-3 p-1">
          <div className="item bg-light m-2 d-flex justify-content-between align-items-center px-3 py-1">
              <div className="first">
                <p>Properties for Rent</p>
                <h2>546</h2>
              </div>
              <div className="second">
                <PieChart2 />
              </div>
            </div>
          </div>
          <div className="col-md-3 p-1">
          <div className="item bg-light m-2 d-flex justify-content-between align-items-center px-3 py-1">
              <div className="first">
                <p>Total Customer</p>
                <h2>5,732</h2>
              </div>
              <div className="second">
                <PieChart3 />
              </div>
            </div>
          </div>
          <div className="col-md-3 p-1">
          <div className="item bg-light m-2 d-flex justify-content-between align-items-center px-3 py-1">
              <div className="first">
                <p>Total Agents</p>
                <h2>90</h2>
              </div>
              <div className="second">
                <PieChart4 />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chart">
        <div className="row">
            <div className="col-md-9 p-1">
              <div className="content bg-light m-2 py-1 px-3">
              <RevenueChart />
              </div>
          </div>
            <div className="col-md-3 p-1">
                <div className="content bg-light m-2 py-1 px-3">
                <h3 className='mb-4'>Recent Customer</h3>
                <div className="content-item d-flex">
                  <div className="image me-3">
                    <img src={Person} style={{width:"70px", height:"70px", borderRadius:"20px"}} alt="" />
                  </div>
                  <div className="details">
                    <h4>Benny Chagur</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex my-3">
                  <div className="image me-3">
                    <img src={Person} style={{width:"70px", height:"70px", borderRadius:"20px"}} alt="" />
                  </div>
                  <div className="details">
                    <h4>Chynite Heree</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex mb-3">
                  <div className="image me-3">
                    <img src={Person} style={{width:"70px", height:"70px", borderRadius:"20px"}} alt="" />
                  </div>
                  <div className="details">
                    <h4>David Yers</h4>
                    <p>Regular Customer</p>
                  </div>
                </div>
                <div className="content-item d-flex mb-3">
                  <div className="image me-3">
                    <img src={Person} style={{width:"70px", height:"70px", borderRadius:"20px"}} alt="" />
                  </div>
                  <div className="details">
                    <h4>Hayder Jahid</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex mb-3">
                  <div className="image me-3">
                    <img src={Person} style={{width:"70px", height:"70px", borderRadius:"20px"}} alt="" />
                  </div>
                  <div className="details">
                    <h4>Benny Chagur</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex mb-2">
                  <div className="image me-3">
                    <img src={Person} style={{width:"70px", height:"70px", borderRadius:"20px"}} alt="" />
                  </div>
                  <div className="details">
                    <h4>Benny Chagur</h4>
                    <p>Member</p>
                  </div>
                </div>
                </div>
            </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 p-1">
          <div className="doughnut m-2 bg-light py-1 px-3">
            <Three />
          </div> 
        </div>
        <div className="col-md-6"></div>
      </div>
      
    </div>
  )
}


