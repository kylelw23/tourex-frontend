import React from "react";
import { Link } from "react-router-dom";
import tour1 from '../Assets/Images/TourImages/tourone.jpg';
import tour2 from '../Assets/Images/TourImages/tour2.jpg';
import tour3 from '../Assets/Images/TourImages/tour3.jpg';
import tour4 from '../Assets/Images/TourImages/tour4.jpg';
import tour5 from '../Assets/Images/TourImages/tour5.jpg';

export default class TourDetail extends React.Component {
  render() {
    return (
      <>
            <div className="row h-100 d-flex m-t-50 m-l-100 m-r-100 m-b-20">
                  <div class="row">
                    <div class="col-lg-8 col-sm-6 m-b-20 m-l-16">
                    <div style={{width:'800px'}} className="alert alert-danger" role="alert">
                      <div style={{color:'red'}}>
                      <svg class="media-object fill-red mr-2" width="24" height="24" aria-hidden="true" role="img" viewBox="0 0 24 24"><path d="M12 22a10 10 0 1110-10 10.012 10.012 0 01-10 10zm0-19a9 9 0 109 9 9.01 9.01 0 00-9-9z"></path><path d="M11.137 9.734h1.727V18h-1.727z"></path><circle cx="12" cy="7.418" r="1.238"></circle></svg>  
                      </div> To limit the spread of the coronavirus, attractions may be closed or have partial closures. Please consult government travel advisories before booking. The WHO is closely monitoring the coronavirus and more information can be found
                      <a style={{color:'red'}} target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"> here.</a>
                    </div>
                    </div>
                  </div>
                <div className="col-lg-8">
                  <div class="row">
                    <div class="col-lg-8 col-sm-6 m-b-20">
                    <div class="d-inline p-2 bg-secondary text-white">Reserve Now &amp; Pay Later</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-2 col-sm-6">
                      <h4>Tour name</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-sm-6">
                      <div class="mt-2 mb-3 d-md-flex align-items-top">
                        <div class="d-inline-flex pr-3 small align-items-top">
                          <svg style ={{fill:'#ffea00'}} class="d-flex align-self-center mr-2 fill-yellow" width="80" height="15" role="img" viewBox="0 0 80 15">
                            <title>star-4.5
                              </title>
                              <path style ={{fill:'#ffea00'}} d="M7.50006,0A.76964.76964,0,0,0,6.799.45589L5.08757,4.08344a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395L3.00792,9.33118a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,3.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,11.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L14.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L8.20114.45589A.76963.76963,0,0,0,7.50006,0Z"></path><path d="M23.75006,0A.76964.76964,0,0,0,23.049.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,19.59946,15a.75111.75111,0,0,0,.36395-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,27.90065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L31.01137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L24.45114.45589A.76963.76963,0,0,0,23.75006,0Z"></path><path d="M40.00006,0A.76964.76964,0,0,0,39.299.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,35.84946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,44.15065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L47.26137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L40.70114.45589A.76963.76963,0,0,0,40.00006,0Z"></path><path d="M56.25006,0A.76964.76964,0,0,0,55.549.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,52.09946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,60.40065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L63.51137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L56.95114.45589A.76963.76963,0,0,0,56.25006,0Z"></path><path d="M79.76133,6.50751a.82819.82819,0,0,0-.43328-1.395L75.5012,4.53082a.78526.78526,0,0,1-.58862-.44738L73.20109.45587a.76728.76728,0,0,0-1.40216,0L70.08757,4.08344a.78527.78527,0,0,1-.58863.44738l-.58166.08844-3.24518.49323a.82826.82826,0,0,0-.43335,1.395l2.76917,2.82367a.84178.84178,0,0,1,.22485.72387L67.579,14.04211A.80844.80844,0,0,0,68.34947,15a.75174.75174,0,0,0,.364-.09576l3.42285-1.88245a.75148.75148,0,0,1,.7276,0l3.42279,1.88245a.75083.75083,0,0,0,.364.09576.80855.80855,0,0,0,.77044-.95789l-.65368-3.98706a.84134.84134,0,0,1,.22485-.72387ZM76.3231,8.67468a1.78216,1.78216,0,0,0-.48071,1.53211l.60968,3.71856-3.1366-1.725a1.68693,1.68693,0,0,0-.81543-.21V1.16669l1.56482,3.31683a1.721,1.721,0,0,0,1.29547.97418l3.58344.54468Z"></path>
                              </svg>
                              <div>
                                <a href="#" class="product-user-review-count" data-scroll-target="#userReviews" data-action-capture="click" data-action-servlet-name="product_detail" data-action-tag="click_review_top_link" data-action-prod-attr="13" data-attraction-product-id="67584P12">13 Reviews</a>
                                </div>
                        </div>
                        <div class="d-none d-md-inline-block small pr-3"> | </div><div class="small mr-md-4">Paris, France</div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-2 col-sm-6">
                    <img style={{height:'7rem'}} src={tour1} class="rounded float-left m-b-10"/>
                    <img style={{height:'7rem'}} src={tour2} class="rounded float-left m-b-10"/>
                    <img style={{height:'7rem'}} src={tour3} class="rounded float-left m-b-10"/>
                    <img style={{height:'7rem'}} src={tour4} class="rounded float-left m-b-10"/>
                    <img style={{height:'7rem'}} src={tour5} class="rounded float-left m-b-10"/>
                    </div>
                    <div class="col-lg-8 m-l-26">
                    <img style={{height:'37.5rem'}} src={tour3} class="rounded float-left m-b-10"/>
                    </div>
                  </div>
                </div>
                <div style={{borderRadius:'2px'}} className="col-lg-4">
                  <div style={{width:'100%', height:'600px',backgroundColor:'#f5f5f5'}} className="m-t-116">
                    <div style={{width:'90%', height:'560px'}} className="m-l-26 px-3 px-sm-5 px-lg-4 py-3 py-lg-4">
                    <p class="h4 m-t-20 text-dark"><span class="font-weight-bold text-lowercase">From </span><span class="font-weight-normal price-font">A$16.58 </span></p>
                      <label >Lowest price guaranteed</label>
                      <hr className="my-4"/>
                      <h4 className="m-b-40">Select Dates and Travelers</h4>
                      <input className="form-control m-b-16" type="date" 
                              name="dates"/>
                      <input className="form-control m-r-16" type="number" 
                              name="dates" placeholder="2 travelers"/>
                      <button style={{height:'50px'}} className="btn btn-tourex w-100 m-t-20">Check Availability</button>
                      
                        <div class="mt-lg-5 pt-md-0 mb-1">
                          <div class="font-weight-bold small">
                            Reserve Now &amp; Pay Later
                          </div>
                          <div class="small">
                            Secure your spot while staying flexible
                          </div>
                        </div>
                        <div class="pt-md-0">
                          <div class="font-weight-bold small pt-1">Free Cancellation</div>
                        <div class="small">Up to 24 hours in advance</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{height:'600px'}} className="row h-100 d-flex m-l-100 m-r-100 m-b-100">
                <div className="col-lg-12 col-sm-6">
                <hr className="my-4"/>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <div className="row">
                  <div className="col-lg-2 col-sm-6">
                  <svg style={{color:'#5d99c6',position:'relative'}}class="mr-2 fill-secondary" width="24" height="24" aria-labelledby="title" role="img" viewBox="0 0 24 24"><title>icon</title><path d="M12,22A10,10,0,1,1,22,12,10.01177,10.01177,0,0,1,12,22ZM12,3a9,9,0,1,0,9,9A9.00984,9.00984,0,0,0,12,3Z"></path><path d="M15,15.5a.49842.49842,0,0,1-.35352-.14648l-3-3A.49965.49965,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.793l2.85352,2.85351A.5.5,0,0,1,15,15.5Z"></path></svg>
                    <span>1 hour Approx.</span>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                    <svg class="mr-2 fill-secondary" width="24" height="24" aria-labelledby="title" role="img" viewBox="0 0 24 24"><circle cx="8" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle><path d="M18.65 5.07A4.021 4.021 0 0015.312 3H8.686A4.02 4.02 0 005.35 5.07L3.94 7.914A10.555 10.555 0 003 11.93v4.57A2.502 2.502 0 005.5 19H5v1.333a.666.666 0 00.667.667h.666A.666.666 0 007 20.333V19h10v1.333a.666.666 0 00.667.667h.666a.666.666 0 00.667-.667V19h-.5a2.502 2.502 0 002.5-2.5v-4.571a10.545 10.545 0 00-.94-4.014zM4.836 8.357l1.41-2.843A3.029 3.029 0 018.687 4h6.626a3.03 3.03 0 012.44 1.514l1.41 2.845a8.184 8.184 0 01.544 1.57H4.293a8.199 8.199 0 01.544-1.57zM20 16.5a1.502 1.502 0 01-1.5 1.5h-13A1.502 1.502 0 014 16.5v-4.571a6.83 6.83 0 01.09-1h15.82a6.829 6.829 0 01.09 1z"></path></svg>
                    <span>Pickup offered</span>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                    <svg class="mr-2 fill-secondary" width="24" height="24" aria-labelledby="title" role="img" viewBox="0 0 24 24"><path d="M16.946 12.694l-.747.946.072 1.233a.15.15 0 01-.053.11.125.125 0 01-.124 0l-1.075-.456-1.075.457a.125.125 0 01-.124 0 .15.15 0 01-.053-.111l.07-1.233-.8-.946a.144.144 0 010-.124.13.13 0 01.091-.085l1.128-.294.652-1.037a.136.136 0 01.22 0l.653 1.037 1.127.294a.13.13 0 01.091.085.143.143 0 01-.053.124z"></path><path d="M21.334 11.626l.333-.118a.5.5 0 00.333-.472V7.5a.5.5 0 00-.5-.5h-4.651l-.645-3.589a.503.503 0 00-.574-.404L2.418 5.206a.495.495 0 00-.326.205.5.5 0 00-.084.376l.665 3.708a.5.5 0 00.395.402l.347.07a2.305 2.305 0 011.773 1.882 2.228 2.228 0 01-1.008 2.336l-.301.175a.499.499 0 00-.24.52l.665 3.708a.5.5 0 00.49.412.475.475 0 00.084-.007L8 18.473V19.5a.5.5 0 00.5.5h3a.5.5 0 000-1H9v-2.683h.001A2.984 2.984 0 009 10.682V8h12v2.683h-.001A2.984 2.984 0 0021 16.318V19h-5.5a.5.5 0 000 1h6a.5.5 0 00.5-.5v-3.536a.5.5 0 00-.333-.472l-.332-.117a1.984 1.984 0 01-.001-3.749zM8.5 7a.5.5 0 00-.5.5v3.536a.5.5 0 00.333.472l.332.117a1.984 1.984 0 01.001 3.749l-.333.118a.5.5 0 00-.333.472v1.496l-2.799.466-.516-2.878a3.23 3.23 0 001.488-3.375 3.312 3.312 0 00-2.566-2.688L3.081 6.11l12.226-2.035.517 2.878a.47.47 0 00-.053.048z"></path><circle cx="13.497" cy="19.498" r=".497"></circle></svg>
                    <spann>Mobile ticket</spann>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                    <svg class="mr-2 fill-secondary" width="24" height="24" aria-labelledby="title" role="img" viewBox="0 0 24 24"><title>icon</title><circle cx="6" cy="13.5" r="1"></circle><circle cx="10" cy="13.5" r="1"></circle><circle cx="14" cy="13.5" r="1"></circle><path d="M19.38867,2H8.833A2.614,2.614,0,0,0,6.22266,4.61133V6.22266H4.25879A2.26184,2.26184,0,0,0,2,8.48145v7.0371a2.26184,2.26184,0,0,0,2.25879,2.25879h2.667V21.5a.50042.50042,0,0,0,.2666.44238A.50606.50606,0,0,0,7.42578,22a.49733.49733,0,0,0,.2832-.08789l6.0293-4.13477h1.78027a2.26184,2.26184,0,0,0,2.25879-2.25879V13.55566h1.61133A2.61485,2.61485,0,0,0,22,10.94434v-6.333A2.61486,2.61486,0,0,0,19.38867,2ZM16.77734,15.51855a1.25991,1.25991,0,0,1-1.25879,1.25879H13.583a.50023.50023,0,0,0-.28321.08789l-5.374,3.68555V17.27734a.49972.49972,0,0,0-.5-.5h-3.167A1.25991,1.25991,0,0,1,3,15.51855V8.48145A1.25991,1.25991,0,0,1,4.25879,7.22266H15.51855a1.25991,1.25991,0,0,1,1.25879,1.25879ZM21,10.94434a1.61292,1.61292,0,0,1-1.61133,1.61132H17.77734V8.48145a2.26184,2.26184,0,0,0-2.25879-2.25879H7.22266V4.61133A1.61271,1.61271,0,0,1,8.833,3H19.38867A1.61292,1.61292,0,0,1,21,4.61133Z"></path></svg>
                    <span>Offered in: English</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <hr className="my-4"/>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <h2>Overview</h2>
                  <label>Gain an understanding and appreciation of one of the world’s largest museums without visiting it in person during this Louvre virtual tour. From the comfort of your own home, on the device of your choice, you’ll explore the museum with a licensed guide showing you behind-the-scenes photos and videos. Hear facts you may not have heard otherwise, and buckle down at the end for a special Q-and-A session.

Read more about Paris' Louvre Museum Virtual Guided Tour 2020</label>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <hr className="my-4"/>
                </div>
                <div className="col-lg-12 col-sm-6">
                  <h2>Review</h2>
                  <label>Gain an understanding and appreciation of one of the world’s largest museums without visiting it in person during this Louvre virtual tour. From the comfort of your own home, on the device of your choice, you’ll explore the museum with a licensed guide showing you behind-the-scenes photos and videos. Hear facts you may not have heard otherwise, and buckle down at the end for a special Q-and-A session.

Read more about Paris' Louvre Museum Virtual Guided Tour 2020</label>
                </div>
              </div>
      </>
    );
  }
}
