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
  toggleTourAndTourguideContainer: boolean;
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
    toggleTourAndTourguideContainer: true, //set for tour guides
    setTourGuides: Function,
    setTours: Function,
    setToggleTourAndTourguideContainer: Function,
  };

  async getJSONAsync() {
    let isUserLoggedIn = await Action.checkUser();
    if (this.state.toggleTourAndTourguideContainer && isUserLoggedIn) {
      console.log("searching");
      let jsonTourGuide = await Action.fetchTourGuidesAsJSONDataByBearerTokenAndQuery(
        "Random"
      );
      this.setState({ tourguides: jsonTourGuide });
    }
  }

  // componentDidMount() {
  //   let tourguides = this.getJSONAsync();
  // }
  getTourGuide: Function = (slug: string | number) => {
    if (this.state.tourguides != null || this.state.tourguides != []) {
      let tempRooms: Object[] | any[] = [...this.state.tourguides];
      const tourguide = tempRooms.find((tourguide) => tourguide.id === slug);
      return tourguide;
    } else {
      return null;
    }
  };

  render() {
    this.getJSONAsync();
    return (
      <TourexContext.Provider
        value={{
          ...this.state,
          //   userIsLoggedInHandler: (v) => this.setState({ isUserLoggedIn: v }),
          setTourGuides: (v: Object) => this.setState({ tourguides: v }),
          setTours: (v: Object) => this.setState({ tours: v }),
          setToggleTourAndTourguideContainer: (v: Object) =>
            this.setState({ toggleTourAndTourguideContainer: v }),
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
