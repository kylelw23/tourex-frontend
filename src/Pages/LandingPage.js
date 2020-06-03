import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import TourGuideContainer from "../Components/TourGuide/TourGuideContainer.js";
import TourContainer from "../Components/Tours/TourContainer";
import { checkUser, userSignOut } from "../Store/APIAction";
import { TourexConsumer } from "../Store/context";
import logo from "../Assets/Logo/logo192.png"


export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
    };
  };
  componentDidMount(){
    this.checkUser();
  }
  checkUser = async () => {
    this.setState({
      isUserLoggedIn: await checkUser(),
    });
  };
  render() {
    const { isUserLoggedIn} = this.state
    return (
      <>
        <TourexConsumer>
          {(value) => {
            // Desconstruction
            const { tourguides, setTourGuides } = value;
            return (
              <>
              {!isUserLoggedIn &&
              <>
              {/* Start of the image sliders */}
                <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
                 
                  <ol className="carousel-indicators">
                    <li data-target="#video-carousel-example" data-slide-to="0" className="active"></li>
                    <li data-target="#video-carousel-example" data-slide-to="1"></li>
                    <li data-target="#video-carousel-example" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="carousel-caption text-center">
                          <h1>Welcome to TourEx</h1>
                          <h3>Find your own tour</h3>
                          <a className="btn btn-outline-light btn-lg" href>Get Started</a>
                      </div>
                      <video style ={{width:'100%',height:'600px', objectFit:'cover'}} className="video-fluid" autoPlay loop muted>
                        <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="carousel-item">
                      <video style ={{width:'100%',height:'600px', objectFit:'cover'}} className="video-fluid" autoPlay loop muted>
                        <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="carousel-item">
                      <video style ={{width:'100%',height:'600px', objectFit:'cover'}} className="video-fluid" autoPlay loop muted>
                        <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                {/* End of image sliders */}
                 {/* Coronavirus Jumbotron */}
                <div id="course" className="offset">
                  <div className="col-12 narrow text-center m-b-50">
                    <h2>Coronavirus update</h2>
                    <p className="lead">The impact of COVID-19 on travel is unprecedented. Like you, we’re monitoring the situation. Rest assured, we’re here to help with questions about your plans.</p>
                    <a className="" href="https://www.australia.com/en/travel-alerts/coronavirus.html" target="_blank">Learn more about what we’re doing to help</a>
                  </div>
                </div>
                {/* Footer Section */}
                </>
              }
              {isUserLoggedIn &&
              <>
                <Carousel
                tourguides={tourguides}
                setTourGuides={setTourGuides} ></Carousel>
                <TourGuideContainer />
              </>
              }
              </>
            );
          }}
        </TourexConsumer>
      </>
    );
  }
}
