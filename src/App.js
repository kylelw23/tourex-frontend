import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchTourexAPIToken } from "./Components/auth/Auth";

function App() {
  const [getToken, setToken] = React.useState("");

  // delete this later, just for testings.
  async function grabToken() {
    let token = await fetchTourexAPIToken();
    setToken("token is " + token);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* delete this later, just for testings. */}
        <button
          type="button"
          onClick={() => {
            grabToken();
          }}
        >
          Grab Tourex API Token
        </button>
        {getToken}
      </header>
    </div>
  );
}

export default App;
