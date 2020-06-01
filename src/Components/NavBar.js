import React from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="float-right" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto my-2 my-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Help <span class="sr-only">(current)</span></a>
                            </li>
                            <button type="button" class="btn btn-primary my-2 my-sm-0 m-l-10" data-toggle="modal" data-target="#exampleModalCenter">
                            Sign In
                            </button>
                            <button type="button" class="btn rounded-pill btn-primary my-2 my-sm-0 m-l-20" data-toggle="modal" data-target="#exampleModalCenter">
                            Sign Up
                            </button>
                         </ul>
                    </div>
                    </div>
            </nav>
        )
    }
}