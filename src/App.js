import React, {useState, useEffect, Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Ultil.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import TourGuideProfile from "./Pages/TourGuideProfile";
import TourDetail from "./Pages/TourDetail";
import UserProfile from "./Pages/UserProfile";
import Footer from "./Pages/Footer";
import NoMatch from "./Pages/Error";
import { checkUser, userSignOut } from "./Store/APIAction";

// import { fetchTourexAPIToken } from "./Components/auth/Auth";
import Navbar from "./Components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
    };
  }
  componentDidMount() {
    this.checkUser();
  };
  checkUser = async () => {
    this.setState({
      isUserLoggedIn: await checkUser(),
    });
  };
  // delete this later, just for testings.
  // async function grabToken() {
  //   let token = await fetchTourexAPIToken();
  //   setToken("token is " + token);
  // }
  render(){
    const { isUserLoggedIn } = this.state;
    return (
      <React.Fragment>
        <Switch>
          <>
            <Navbar />
            <Route exact path="/" component={LandingPage} appProps={{isUserLoggedIn}}/>
            <Route exact path="/TourGuideProfile/:id" component={TourGuideProfile}/>
            <Route exact path="/TourDetail/" component={TourDetail}/>
            <Route exact path="/UserProfile" component={UserProfile} appProps={{isUserLoggedIn}} />
            <Footer />
          </>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
