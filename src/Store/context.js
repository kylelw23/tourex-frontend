import React, { Component } from "react";
import * as Constants from "./Constants";
import { fetchTourGuideAsJSONDataByBearerToken, fetchTourAsJSONDataByBearerToken 
,fetchAccountAsJSONDataByBearerToken} from './../Components/auth/Auth';

const TourexContext = React.createContext();

class TourexProvider extends Component {
  state = {
    tourguides: [],
    sortedTourguides: [],
    tourguideDetail: [],
    tours: [],
    sortedTours: [],
    tourDetail: [],
    booking: [],
    isLoaded: false,
    isTour: false,
    isTourGuide: false,
    tourGuideAccount: false,
    userAccount: false,
    // isUserLoggedIn: false,
  };
  componentDidMount() {
    fetch(Constants.TOUREX_TOUR_GUIDE_URL)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  render() {
    return (
      <TourexContext.Provider
        value={{
          state: this.state,
          //   userIsLoggedInHandler: (v) => this.setState({ isUserLoggedIn: v }),
        }}
      >
        {this.props.children}
      </TourexContext.Provider>
    );
  }
}

// In order to receive data from children components, use <TourGuideConsumer></TourGuideConsumer>
const TourexConsumer = TourexContext.Consumer;

export { TourexConsumer, TourexProvider, TourexContext };
