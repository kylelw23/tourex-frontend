import React from 'react';
import {Link} from 'react-router-dom';
import italy from "../Assets/Images/italy_stretched.png";

export default function TourGuideCard() {
    return (
        <div class="card" style={{width:'30%',padding:'0',margin:'0'}}>
        <div class="row no-gutters">
            <div class="col-auto">
                <img src="//placehold.it/200" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-6">
                <div class="card-block px-2">
                    <h4 class="card-title">Tour Guide Name</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">Contact</a>
                </div>
            </div>
        </div>
  </div>
    )
}