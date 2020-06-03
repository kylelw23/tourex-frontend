import React, { useState } from "react";
import TourCard from "./TourCard";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export default function TourList(props) {
  if (props.tours.length === 0) {
    return (
      <>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h3>Unfortunately no tours matched your search parameters</h3>
          </div>
        </div>
      </>
    );
  }
  return (
    //prettier-ignore
    <>
      <div>
        {/* Tour guide count */}
        <div className="jumbotron jumbotron-fluid p-t-30" style={{height:'100px'}}>
          <div className="container m-l-200">
            <h4 className="display-6">There are {props.tourguides.length} tours found</h4>
          </div>
        </div>

        {/* Tour guide items */}
        <div className="container-fluid m-l-200">
            <div className="row">
                { 
                props.tours.map(item => {
                  return (
                  <div key={item.id} className="col-lg-6 my-3">
                    <TourCard tour={item}/>
                  </div>
                  )
                })
              }
            </div> 
        </div>
      </div>
    </>
  );
}
