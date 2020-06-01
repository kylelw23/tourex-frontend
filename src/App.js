import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Ultil.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import TourGuideProfile from "./Pages/TourGuideProfile";
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
          <Route path="/TourGuideProfile" component={TourGuideProfile}/>
        </>
      </Switch>
    </React.Fragment>
  );
}

export default App;
