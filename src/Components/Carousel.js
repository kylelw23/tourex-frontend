import React from "react";
import { Link } from "react-router-dom";
import image1 from "../Assets/Images/italy_stretched.png";
import image2 from "../Assets/Images/lagan.PNG";
import image3 from "../Assets/Images/sunset-walking.jpg";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        {/* Indicators to how many carousels we have */}
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for image slides */}
        <div class="carousel-inner">
          {/* Search bar here */}
          <div className="position-absolute h-100 w-100" style={{ zIndex: 2 }}>
            <div className="row h-100 px-5 py-5 d-flex align-items-center">
              <div className="col-lg-4 m-l-100">
                <div
                  className="card shadow bg-white rounded"
                  style={{ backgroundColor: "#f5f5f5", opacity: 1 }}
                >
                  <div className="card-body m-2">
                    <h2 className="m-b-20">
                      Great things never came from comfort zones!
                    </h2>
                    <form class="form-inline my-2 my-lg-0 m-t-50">
                      <div class="input-group" style={{width:'100%'}}>
                      <div class="input-group-prepend" >
                          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tours</button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Tour Guides</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Tours</a>
                          </div>
                        </div>
                        <input type="text" class="form-control mr-sm-2" aria-label="Text input with dropdown button"/>
                      </div>
                      <div className='m-t-20' style={{width:'100%'}}>
                        <input class="form-control m-r-20" style={{width:'68%'}} type="date" value="2011-08-19" id="example-date-input"/>
                        <button
                          className="btn btn-outline-info my-2 my-sm-0"
                          style={{width:'28%'}}
                          type="submit">Search</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slides here */}
          <div class="carousel-item active">
            <img class="d-block w-100" src={image1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={image3} alt="Third slide" />
          </div>
        </div>

        {/* Left and Right controls <a> */}
        <a
          class="carousel-control-prev m-0"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon m-0" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next m-0"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
