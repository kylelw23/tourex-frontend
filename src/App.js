import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Ultil.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
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
        </>
      </Switch>
    </React.Fragment>
  );
}

export default App;
