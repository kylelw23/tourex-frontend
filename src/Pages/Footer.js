import React from "react";
import logo from "../Assets/Logo/logo192.png"


export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div id="contact">
                  <footer>
                    <div className="row justify-content-center">
                      <div className="col-md-5 text-center">
                        <img src={logo}/>
                      <p>
                        At our core is a collection of tourism solutions that represent
                        everything that you need to complete your journey of explore
                      </p>
                      <strong>
                        Contact info
                      </strong>
                      <p>(+61) 888-888<br/>email@tourex.com</p>
                      <a href="#"><i className="fab fa-facebook-square"></i></a>
                      <a href="#"><i className="fab fa-twitter-square"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      </div>
                      <hr className="socket"/>&copy; TourEx Inc
                    </div>
                  </footer>
                </div>
      </>
    );
  }
}
