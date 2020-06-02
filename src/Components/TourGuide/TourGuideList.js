import React, { useState } from "react";
import TourGuideCard from "./TourGuideCard";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

export default function TourguideList(props) {
  return (
    //prettier-ignore
    <>
      <div>
        {/* Tour guide count */}
        <div className="jumbotron jumbotron-fluid p-t-30" style={{height:'100px'}}>
          <div class="container m-l-200">
            <h4 class="display-6">There is X local tour guide in...</h4>
            {props.tourguides.length > 0 ?
                props.tourguides.map((item, x) =>
                <>
                    {item.id + ", " + item.name + ", " + item.rating + " // "}
                </>
                )    
                :
                <></>
            }
          </div>
        </div>

        {/* Tour guide items */}
        <div className="container-fluid m-l-200">
          <div className="row">
            <div className="col-lg-6">
              <TourGuideCard />
            </div>
            <div className="col-lg-6">
              <TourGuideCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
