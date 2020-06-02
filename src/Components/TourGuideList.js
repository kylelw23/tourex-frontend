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
            <div className="jumbotron jumbotron-fluid p-t-30" style={{height:'100px'}}>
            <div class="container m-l-200">
                <h4 class="display-6">There is X local tour guide in...</h4>
            </div>
            </div>
            <div className="container-fluid m-l-200">
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