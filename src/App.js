import React from "react";
import logo from "./logo.svg";
import "./Ultil.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
// import { fetchTourexAPIToken } from "./Components/auth/Auth";
import Navbar from "./Components/NavBar";
import Banner from "./Components/Banner";

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
          {/* This <> fragment fixed the 'hello world' not showing. */}
          <Navbar />
          <Route exact path="/" component={LandingPage} />
        </>
      </Switch>
    </React.Fragment>
  );
}

export default App;
