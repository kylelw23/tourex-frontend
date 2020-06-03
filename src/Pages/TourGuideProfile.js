import React from "react";
import { Link } from "react-router-dom";
import profile from '../Assets/Images/kirito-avatar.jpg';
import background from "../Assets/Images/lagan.jpg"

export default class TourGuideProfile extends React.Component {
  render() {
    return (
      <>
            <div style={{height:'300px',backgroundImage:'url("../Assets/Images/lagan.jpg")'}} class="jumbotron m-0 p-0">
                <div class="container m-0 p-0">
                  <div style={{width:'860px'}} className="row h-100 p-t-20 d-flex align-items-center">
                  <div className="col-lg-4 m-l-100 m-t-120">
                      <img src={profile} className="border rounded float-left" alt="..."/>
                  </div>
                  <div className="col-lg-4">
                    <h3>Tour Guide Name</h3>
                    <h4>Location here</h4>
                    <h4>Rating here</h4>
                  </div>
              </div>
                </div>
            </div>
              <div className="row h-100 d-flex m-t-160 m-l-100 m-r-100 m-b-100">
                <div className="col-lg-8">
                  <div class="row">
                    <div class="col-lg-2 col-sm-6">
                      <h4>About me</h4>
                    </div>
                    <div class="col-lg-8 col-sm-6">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
                    </div>
                  </div>
                  <hr className="my-3"/>
                  <div class="row">
                    <div class="col-lg-2 col-sm-6">
                      <h4>Language</h4>
                    </div>
                    <div class="col-lg-8 col-sm-6">
                      <span>
                      English, Espanol
                      </span>
                    </div>
                  </div>
                  <hr className="my-3"/>
                  <div class="row">
                    <div class="col-lg-4 col-sm-6">
                      <h2>X reviews</h2>
                    </div>
                  </div>
                  <div class="row m-t-30">
                    <div class="col-lg-2 col-sm-6 border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
                      <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M17.438.563A17.438,17.438,0,1,0,34.875,18,17.434,17.434,0,0,0,17.438.563Zm0,6.75A6.188,6.188,0,1,1,11.25,13.5,6.188,6.188,0,0,1,17.438,7.313Zm0,24.188a13.474,13.474,0,0,1-10.3-4.8,7.839,7.839,0,0,1,6.926-4.2,1.72,1.72,0,0,1,.5.077,9.309,9.309,0,0,0,2.876.485,9.274,9.274,0,0,0,2.876-.485,1.72,1.72,0,0,1,.5-.077,7.839,7.839,0,0,1,6.926,4.2A13.474,13.474,0,0,1,17.438,31.5Z" transform="translate(0 -0.563)"/>
                    </svg>
                      <h4>Users</h4>
                    </div>
                    <div class="col-lg-6 col-sm-6 border">
                      <h4>Review</h4>
                    </div>
                    <div class="col-lg-2 col-sm-6 border">
                      <h4>Rating</h4>
                    </div>
                  </div>
                </div>
                <div style={{borderRadius:'2px'}} className="col-lg-4 border">
                  <div className="m-t-50">
                    <button style={{width:'100%'}} className="btn btn-tourex">Contact</button>
                  </div>
                </div>
              </div>
      </>
    );
  }
}
