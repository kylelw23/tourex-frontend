import React from "react";
import { Link } from "react-router-dom";

export default function TourGuideCard({ tourguide }) {
  // Destructering
  const { name, rating, reviews, tours, email, id } = tourguide;
  return (
    <Link to={`/TourGuideProfile/${id}`}>
      <div class="card text-secondary" style={{ width: "60%" }}>
        <div class="row no-gutters stretched-link">
          {/* PHOTO */}
          <div class="col-lg-4 col-md-12 col-sm-12">
            <img src="//placehold.it/200" class="img-fluid" alt="" />
          </div>

          {/* DETAILS */}
          <div className="col-lg-8 d-flex justify-content-center align-items-center">
            <div class="card-block w-100 h-100">
              {/* First row */}
              <div className="row mx-0 w-100  h-50 d-flex border-bottom">
                <div className="col-lg-12 d-flex justify-content-center">
                  <h4 class="card-title align-self-center">{name}</h4>
                </div>
              </div>

              {/* Second row */}
              <div className="row mx-0 w-100 h-50 d-flex align-items-center">
                <div className="col-lg-4 col-sm-4 d-flex justify-content-center">
                  <label class="card-text">Tours:</label>
                  <label class="card-text">
                    &nbsp;{tours.length > 0 ? tours.length : 0}
                  </label>
                </div>
                <div className="col-lg-4 col-sm-4 d-flex justify-content-center">
                  <label class="card-text">Reviews: </label>
                  <label class="card-text">
                    &nbsp;{reviews.length > 0 ? reviews.length : 0}
                  </label>
                </div>
                <div className="col-lg-4 col-sm-4 d-flex justify-content-center">
                  <label class="card-text">Rating: </label>
                  <label class="card-text">&nbsp;{rating}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
