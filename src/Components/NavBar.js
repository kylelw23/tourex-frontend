import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SignIn from './auth/SignIn.js';
import SignUp from './auth/SignUp.js';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })



    }

    render()
    {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="float-right" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto my-2 my-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Help <span class="sr-only">(current)</span></a>
                            </li>
                            <button type="button" className="btn btn-primary my-2 my-sm-0 m-l-10" data-toggle="modal" data-target="#modalSignIn">
                            Sign In
                            </button>
                            <button type="button" className="btn rounded-pill btn-primary my-2 my-sm-0 m-l-20" data-toggle="modal" data-target="#modalSignUp">
                            Sign Up
                            </button>
                         </ul>
                         </div>
                    </div>
            </nav>
            <SignIn></SignIn>
            <SignUp></SignUp>
            </>
        )
    }
}