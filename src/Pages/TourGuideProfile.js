import React from "react";
import { Link } from "react-router-dom";
import profile from '../Assets/Images/random-avatar.jpg';

export default class TourGuideProfile extends React.Component {
  render() {
    return (
      <>
            <div style={{height:'300px'}} class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">Background image of locality</h1>
              </div>
            </div>
            <div className="row h-100 px-5 py-5 d-flex align-items-center">
              <div className="col-lg-4 m-l-100">
                <div
                  className="card shadow bg-white rounded"
                  style={{ backgroundColor: "#f5f5f5", opacity: 1 }}
                >
                  <div className="card-body m-2">
                  <img src={profile} class="rounded float-left" alt="..."/>
                  </div>
                </div>
              </div>
            </div>
      </>
    );
  }
}
