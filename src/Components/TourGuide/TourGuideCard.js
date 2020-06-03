import React from 'react';
import {Link} from 'react-router-dom';

export default function TourGuideCard({tourguide}) {
    // Destructering
    const {name, rating,reviews, tours} = tourguide
    console.log(tourguide);
    return (
        <div class="card" style={{width:'60%'}}>
        <div class="row no-gutters stretched-link">
            <div class="col-auto">
                <img src="//placehold.it/200" class="img-fluid" alt=""/>
            </div>
            <div className='m-2'>
                <div class="card-block px-2 m-l-30" >
                    <h4 class="card-title">Tour Guide Name</h4>
                    <p class="card-text">Location</p>
                    <p class="card-text">description</p>
                    <div>
                    <label class="card-text">Reviews: </label>
                    <label class="card-text">8</label>
                    </div>
                   <div>
                    <label class="card-text">Rating: </label>
                    <label class="card-text">8</label>
                   </div>
                </div>
            </div>
        </div>
  </div>
    )
}