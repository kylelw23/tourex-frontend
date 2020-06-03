import React, { Component } from "react";
import * as Constants from "./Constants";
import * as Action from "./APIAction";

interface IProps {
  tourguides: Object[];
  setTourGuides: Function;
}
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

class TourexProvider extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
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
    }
  }
  async getJSONAsync() {
    let jsonTourGuide = await Action.fetchTourGuidesAsJSONDataByBearerTokenAndQuery("Random");
    // this.props.setTourGuides(jsonTourGuide);
  }
  // componentDidMount() {
  //   let tourguides = this.getJSONAsync();
  // }
//   getTourGuide = (slug) => {
//     let tempRooms = [...this.state.tourguides];
//     const tourguide = tempRooms.find(tourguide => tourguide.id === slug);
//     return tourguide;
// }
  render() {
    this.getJSONAsync();
    return (
      <TourexContext.Provider
        value={{
          ...this.state,
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
