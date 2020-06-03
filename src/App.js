import React from "react";
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

// import { fetchTourexAPIToken } from "./Components/auth/Auth";
import Navbar from "./Components/NavBar";

function App() {
  const [getToken, setToken] = React.useState("");

  // delete this later, just for testings.
  // async function grabToken() {
  //   let token = await fetchTourexAPIToken();
  //   setToken("token is " + token);
  // }

  return (
    <React.Fragment>
      <Switch>
        <>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/TourGuideProfile" component={TourGuideProfile}/>
          <Route exact path="/TourDetail" component={TourDetail}/>
          <Route exact path="/UserProfile" component={UserProfile}/>
          <Footer />
        </>
      </Switch>
    </React.Fragment>
  );
}

export default App;
