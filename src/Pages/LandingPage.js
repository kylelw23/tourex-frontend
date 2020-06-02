import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel.js";
import TourGuideContainer from "../Components/TourGuide/TourGuideContainer.js";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
	  <Carousel></Carousel>
	  <TourGuideContainer/>
      </>
    );
  }
}
