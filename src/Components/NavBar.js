import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { checkUser, userSignOut } from "../Store/APIAction";
import logo from "../Assets/Logo/TourEx-LogoOnly-Transparent.png";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
    };
  }

  componentDidMount() {
    $("#myModal").on("shown.bs.modal", function () {
      $("#myInput").trigger("focus");
    });
    this.checkUser();
  }

  checkUser = async () => {
    this.setState({
      isUserLoggedIn: await checkUser(),
    });
  };

  userSignOutHandler = async () => {
    let success = await userSignOut();
    if (success) {
      return <Redirect to="http://localhost:3000/" />;
    }
    return <Redirect to="http://localhost:3000/" />;
  };

  render() {
    const { isUserLoggedIn } = this.state;
    // console.log(this.state);
    return (
      // prettier-ignore
      <>
        <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-dark sticky-top fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand m-l-40" href="/"><img src={logo}/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        {!isUserLoggedIn && 
                            <>
                                {/* This button will invoke <SignIn> */}
                                <li className="nav-item active">
                                  <button type="button" className="btn my-sm-0 m-l-10" data-toggle="modal" data-target="#modalSignIn">
                                      Sign In
                                  </button>
                                </li>
                                {/* This button will invoke <SignIn> */}
                                <li className="nav-item active">
                                  <button type="button" className="btn rounded-pill my-sm-0 m-l-20" data-toggle="modal" data-target="#modalSignUp">
                                      Sign Up
                                  </button>
                                </li>
                            </>
                        }
                        {isUserLoggedIn && 
                            <>
                            <li className="nav-item active">
                                <svg style={{top:'5px',left:'5px', position:'relative'}} className="m-r-14" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 128 128">
                                  <g>
                                    <path d="M64,6.306A30.714,30.714,0,0,0,33.286,37.02C33.108,66.323,64,102.663,64,102.663S94.892,66.323,94.714,37.02A30.714,30.714,0,0,0,64,6.306Zm0,43.742A13.028,13.028,0,1,1,77.028,37.02,13.028,13.028,0,0,1,64,50.048Z" fill="#f45858"/>
                                    <path d="M77.276,84.289h0A182.919,182.919,0,0,1,64,102.663,182.919,182.919,0,0,1,50.726,84.289h0c-21.646,2.185-37.575,9.583-37.575,18.374,0,10.51,22.767,19.03,50.851,19.03s50.851-8.52,50.851-19.03C114.851,93.872,98.922,86.473,77.276,84.289Z" fill="#3ea2e5"/><g>
                                      <path d="M80.229,82.863c.231-.376.462-.745.693-1.128,10.389-17.2,15.617-32.246,15.542-44.715a32.463,32.463,0,0,0-1.371-9.361,1.75,1.75,0,0,0-3.352,1.008,28.968,28.968,0,0,1,1.223,8.364C93.114,61.889,69.874,92.548,64,99.9,58.126,92.548,34.885,61.888,35.037,37.02A28.967,28.967,0,0,1,80.642,13.312a1.75,1.75,0,0,0,2.013-2.864A32.468,32.468,0,0,0,31.537,37.009c-.076,12.48,5.153,27.528,15.542,44.726.231.383.462.752.693,1.128-11.017,1.367-20.561,4.1-27.086,7.8a1.75,1.75,0,0,0,1.724,3.046c6.452-3.653,16.162-6.322,27.424-7.56A185.26,185.26,0,0,0,62.667,103.8a1.748,1.748,0,0,0,2.666,0A185.3,185.3,0,0,0,78.167,86.146c20.3,2.233,34.934,9.114,34.934,16.518,0,8.344-19.73,17.279-49.1,17.279s-49.1-8.935-49.1-17.279a7.107,7.107,0,0,1,1.839-4.488,1.75,1.75,0,0,0-2.7-2.222,10.492,10.492,0,0,0-2.635,6.71c0,11.652,23.1,20.779,52.6,20.779s52.6-9.127,52.6-20.779C116.6,93.383,102.1,85.566,80.229,82.863Z"/>
                                      <path d="M49.248,113.278a1.7,1.7,0,0,0,.224.014,1.75,1.75,0,0,0,.22-3.485c-7.766-.994-14-2.744-17.548-4.925a1.75,1.75,0,1,0-1.833,2.981C34.274,110.3,41,112.223,49.248,113.278Z"/>
                                      <path d="M64,114.178q1.527,0,3.021-.036a1.75,1.75,0,0,0,1.709-1.79,1.73,1.73,0,0,0-1.791-1.709c-2.439.056-4.979.043-7.458-.048a1.75,1.75,0,1,0-.129,3.5C60.89,114.149,62.453,114.178,64,114.178Z"/>
                                      <path d="M88.737,21.946a1.75,1.75,0,1,0,2.987-1.824,32.746,32.746,0,0,0-3.1-4.256,1.75,1.75,0,0,0-2.654,2.281A29.213,29.213,0,0,1,88.737,21.946Z"/><path d="M49.222,37.02A14.778,14.778,0,1,0,64,22.242,14.8,14.8,0,0,0,49.222,37.02Zm26.055,0A11.278,11.278,0,1,1,64,25.742,11.29,11.29,0,0,1,75.277,37.02Z"/>
                                      </g>
                                  </g>
                                </svg>
                                <a style={{color:'white',textDecoration:'none'}} className="m-r-20" href="#">Wollongong, NSW</a>
                            </li>
                            <li className="nav-item active">
                            <img style={{width:'40px',height:'40px'}} src="https://img.icons8.com/bubbles/50/000000/user.png"/>
                                <a style={{color:'white',textDecoration:'none'}} className="m-l-10" href="/UserProfile" >User</a>
                            </li>
                            <li className="nav-item active">
                            <button type="button" className="btn rounded-pill btn-primary my-2 my-sm-0 m-l-20" onClick={() => this.userSignOutHandler()}>
                                Sign out
                            </button>
                            </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>

        <SignIn />
        <SignUp />
      </>
    );
  }
}
