import React, { useState } from "react";
import TourGuideCard from "./TourGuideCard";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export default function TourGuideList(props) {
  if (props.tourguides.length === 0) {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3>Unfortunately no tour guides matched your search parameters</h3>
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
            <h4 className="display-6">There is {props.tourguides.length} local tour guide found</h4>
          </div>
        </div>

        {/* Tour guide items */}
        <div className="container-fluid m-l-200">
            <div className="row">
                { 
                props.tourguides.map(item => {
                  return (
                  <div key={item.id} className="col-lg-6 my-3">
                    <TourGuideCard tourguide={item}/>
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
