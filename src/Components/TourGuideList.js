import React, { useState } from 'react'
import TourGuideCard from './TourGuideCard'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export default function TourguideList() {
        return (
            <>
            <div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h4 class="display-6">There is X local tour guide in...</h4>
            </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                    <TourGuideCard/>
                    </div>
                    <div className="col-lg-6">
                    <TourGuideCard/>
                    </div>
                </div>
            </div>
            </div>
            </>
        )
}