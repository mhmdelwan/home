import React from 'react'
import './Home.css'
import Person from '../../Images/person.jpeg'
import PieChart1 from '../PieChart1/PieChart1'
import PieChart2 from '../PieChart2/PieChart2'
import PieChart3 from '../PieChart3/PieChart3'
import PieChart4 from '../PieChart4/PieChart4'
import RevenueChart from '../RevenueChart/RevenueChart'
import PropertyReferrals from '../PropertyReferrals/PropertyReferrals'
import OverviewChart from '../OverviewChart/OverviewChart'
import PropertyList from '../PropertyList/PropertyList'


export default function Home() {

  
  
  return (
    <div className="home mt-3">
      <div className="row justify-content-between bg-white mb-2">
        <div className="col-md-5 position-relative">
          <i class="fa-solid fa-magnifying-glass position-absolute p-2 mt-1"></i>
          <input
            type="text"
            className="w-75 py-1 rounded-1 border-0"
            placeholder="search properties for customer etc"
          />
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <div className="bell me-4">
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className="profile d-flex  align-items-center">
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
        <div className="items  m-2">
          <div className="row px-3">
            <div className="col-md-3 p-1">
              <div className="item bg-light p-3 fs-6 d-flex justify-content-between align-items-center shadow">
                <div68 className="first">
                  <p className="p-0 m-0">Properties for Sale</p>
                  <h4>4</h4>
                </div68>
                <div className="second">
                  <PieChart1 />
                </div>
              </div>
            </div>
            <div className="col-md-3 p-1">
              <div className="item bg-light p-3 fs-6 d-flex justify-content-between align-items-center shadow">
                <div className="first">
                  <p className="p-0 m-0">Properties for Rent</p>
                  <h4>546</h4>
                </div>
                <div className="second">
                  <PieChart2 />
                </div>
              </div>
            </div>
            <div className="col-md-3 p-1">
              <div className="item bg-light p-3 fs-6 d-flex justify-content-between align-items-center shadow">
                <div className="first">
                  <p className="p-0 m-0">Total Customer</p>
                  <h4>5,732</h4>
                </div>
                <div className="second">
                  <PieChart3 />
                </div>
              </div>
            </div>
            <div className="col-md-3 p-1">
              <div className="item bg-light p-3 fs-6 d-flex justify-content-between align-items-center shadow">
                <div className="first">
                  <p className="p-0 m-0">Total Agents</p>
                  <h4>90</h4>
                </div>
                <div className="second">
                  <PieChart4 />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chart mx-3">
          <div className="row">
            <div className="col-md-9 p-1 ">
              <div className="content bg-light m-2 py-2 px-3 rounded-4 shadow">
                <RevenueChart />
              </div>
            </div>
            <div className="col-md-3 p-1">
              <div className="content bg-light m-2 py-3 px-4 rounded-4 shadow">
                <h3 className="mb-3">Recent Customer</h3>
                <div className="content-item d-flex">
                  <div className="image me-3">
                    <img
                      src={Person}
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "20px",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h4>Benny Chagur</h4>
                    <p>Member</p>
                  </div>
                </div>{" "}
                <div className="content-item d-flex">
                  <div className="image me-3">
                    <img
                      src={Person}
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "20px",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h4>Benny Chagur</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex my-3">
                  <div className="image me-3">
                    <img
                      src={Person}
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "20px",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h4>Chynite Heree</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex mb-3">
                  <div className="image me-3">
                    <img
                      src={Person}
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "20px",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h4>Hayder Jahid</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex mb-3">
                  <div className="image me-3">
                    <img
                      src={Person}
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "20px",
                      }}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <h4>Benny Chagur</h4>
                    <p>Member</p>
                  </div>
                </div>
                <div className="content-item d-flex mb-2">
                  <div className="image me-3">
                    <img
                      src={Person}
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "20px",
                      }}
                      alt=""
                    />
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

        <div className="dashboard">
          <div className="charts">
            <PropertyReferrals />
            <OverviewChart />
          </div>
            <PropertyList />
        </div>
      </div>
    </div>
  );
}


