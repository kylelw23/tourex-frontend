import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/Images/italy_stretched.png";

export default class LandingPage extends React.Component {
  render() {
    return (
      // maybe this banner can be another component??
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
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
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
    );
  }
}
