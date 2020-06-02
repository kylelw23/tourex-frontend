import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import TourGuideContainer from "../Components/TourGuide/TourGuideContainer.js";
import TourContainer from "../Components/Tours/TourContainer";
import { TourexConsumer } from "../Store/context";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <TourexConsumer>
          {(value) => {
            // Desconstruction
            const { tourguides, setTourGuides } = value;
            return (
              <>
                <Carousel
                  tourguides={tourguides}
                  setTourGuides={setTourGuides}
                ></Carousel>
                <TourGuideContainer />
              </>
            );
          }}
        </TourexConsumer>
      </>
    );
  }
}
