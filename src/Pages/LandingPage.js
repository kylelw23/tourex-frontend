import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/Images/italy_stretched.png";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        {/* Maybe this whole div can be made into another component? */}
        <div class="jumbotron" style={{ backgroundImage: "url(" + logo + ")" }}>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="card"
                style={{ backgroundColor: "#f5f5f5", opacity: 0.9 }}
              >
                <div className="card-body">
                  <h1 class="display-4">
                    Great things never came from comfort zones!
                  </h1>
                  <hr class="my-4" />
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.
                  </p>
                  <form class="form-inline my-2 my-lg-0">
                    <input
                      class="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-outline-info my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="..." alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
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
}
