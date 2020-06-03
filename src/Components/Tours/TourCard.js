import React from "react";
import { Link } from "react-router-dom";

export default function TourCard({ tour }) {
  // Destructering
  const { id, name, time, date, duration, price, host, location } = tour;
  return (
    <Link to={`/TourDetail/${id}`}>
      {/* Header */}
      <div className="card text-secondary">
        <img src="//placehold.it/200" class="img-fluid" alt="" />
        <div className="card-body">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <h5 className="card-title">
                {location.name},&nbsp;{location.country.name}
              </h5>
              <p className="card-text">
                {location.state},&nbsp;{location.postCode}
              </p>
            </div>
            <div className="col-lg-6">
              <h3 className="card-title">{name}</h3>
            </div>
          </div>
        </div>
        {/* Details */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-6">
                <ul class="list-group list-group-flush">
                  <li className="list-group-item">Date:&nbsp;{date}</li>
                  <li className="list-group-item">Time:&nbsp;{time}</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul class="list-group list-group-flush">
                  <li className="list-group-item">
                    Hosted by:&nbsp;{host.name}
                  </li>
                  <li className="list-group-item">Duration:&nbsp;{duration}</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-lg-6">
                <ul class="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="#" className="card-link">
                      Mobile:&nbsp;{host.mobile}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href={"mailto:" + host.email} className="card-link">
                      Email&nbsp;{host.email}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul class="list-group list-group-flush">
                  <li className="list-group-item">Price:&nbsp;${price}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
}

/*
host: {id: 233, name: "Patrick", mobile: "01189998819991197253", email: "testtourguide@test.com",…}
  aboutMe: null
  birthDate: null
  email: "testtourguide@test.com"
  id: 233
  language: null
  messages: []
  mobile: "01189998819991197253"
  name: "Patrick"
  password: "redacted"
  profilePicURI: null
  rating: 0
  sentMessages: []
  starRating: null

location: {id: 1, name: "Sydney", postCode: 2000, state: "NSW", country: {id: 1, name: "Australia"}}
  country: {id: 1, name: "Australia"}
    id: 1
    name: "Australia"
  id: 1
  name: "Sydney"
  postCode: 2000
  state: "NSW"
*/
