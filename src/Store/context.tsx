import React, { Component } from "react";
import * as Constants from "./Constants";
import * as Action from "./APIAction";

interface IProps {}
interface IState {
  tourguides: Object[];
  sortedTourguides: Object[];
  tourguideDetail: Object[];
  tours: Object[];
  sortedTours: Object[];
  tourDetail: Object[];
  booking: Object[];
  isLoaded: boolean;
  isTour: boolean;
  isTourGuide: boolean;
  tourGuideAccount: boolean;
  userAccount: boolean;
}

interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string }) => void;
}

const TourexContext = React.createContext<Partial<IProps>>({});

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
    setTourGuides: Function,
    // isUserLoggedIn: false,
  };
  async getJSONAsync() {
    //let jsonTourGuide = await Action.fetchTourGuidesAsJSONDataByBearerTokenAndQuery("Random");
    //let jsonTour = await Action.fetchTourAsJSONDataByBearerToken("haha");
  }
  render() {
    this.getJSONAsync();
    return (
      <TourexContext.Provider
        value={{
          ...this.state,
          //   userIsLoggedInHandler: (v) => this.setState({ isUserLoggedIn: v }),
          setTourGuides: (v: Object) => this.setState({ tourguides: v }),
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
