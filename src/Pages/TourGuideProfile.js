import React from "react";
import { Link } from "react-router-dom";
import profile from '../Assets/Images/kirito-avatar.jpg';
import background from "../Assets/Images/lagan.jpg"

export default class TourGuideProfile extends React.Component {
  constructor(props){
    super(props)
    // console.log(this.props)
    this.state ={
        slug:this.props.match.params.id
    }
  }
  render() {
    return (
      <>
            <div style={{height:'300px',backgroundImage:'url("../Assets/Images/lagan.jpg")'}} class="jumbotron m-0 p-0">
                <div class="container m-0 p-0">
                  <div style={{width:'860px'}} className="row h-100 p-t-20 d-flex align-items-center">
                  <div className="col-lg-4 m-l-100 m-t-120">
                      <img src={profile} className="border rounded float-left" alt="..."/>
                  </div>
                  <div className="col-lg-4">
                    <h3>Tour Guide Name</h3>
                    <div class="mt-2 mb-3 d-md-flex align-items-top">
                        <div class="d-inline-flex pr-3 small align-items-top">
                          <svg style ={{fill:'#ffbf00'}} class="d-flex align-self-center mr-2 fill-yellow" width="80" height="15" role="img" viewBox="0 0 80 15">
                            <title>star-4.5
                              </title>
                              <path style ={{fill:'#ffbf00'}} d="M7.50006,0A.76964.76964,0,0,0,6.799.45589L5.08757,4.08344a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395L3.00792,9.33118a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,3.34946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,11.65065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L14.76137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L8.20114.45589A.76963.76963,0,0,0,7.50006,0Z"></path><path d="M23.75006,0A.76964.76964,0,0,0,23.049.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,19.59946,15a.75111.75111,0,0,0,.36395-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,27.90065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L31.01137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L24.45114.45589A.76963.76963,0,0,0,23.75006,0Z"></path><path d="M40.00006,0A.76964.76964,0,0,0,39.299.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,35.84946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,44.15065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L47.26137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L40.70114.45589A.76963.76963,0,0,0,40.00006,0Z"></path><path d="M56.25006,0A.76964.76964,0,0,0,55.549.45589l-1.7114,3.62755a.78529.78529,0,0,1-.58861.44739l-3.82689.5817a.82822.82822,0,0,0-.43329,1.395l2.76914,2.82366a.84148.84148,0,0,1,.22484.72389l-.6537,3.98706A.8086.8086,0,0,0,52.09946,15a.75111.75111,0,0,0,.364-.09576l3.42284-1.88243a.7514.7514,0,0,1,.72761,0l3.42285,1.88243A.751.751,0,0,0,60.40065,15a.8088.8088,0,0,0,.77044-.9579l-.6537-3.98706a.84154.84154,0,0,1,.22484-.72389L63.51137,6.5075a.82817.82817,0,0,0-.43328-1.395l-3.82687-.58167a.78529.78529,0,0,1-.58861-.44739L56.95114.45589A.76963.76963,0,0,0,56.25006,0Z"></path><path d="M79.76133,6.50751a.82819.82819,0,0,0-.43328-1.395L75.5012,4.53082a.78526.78526,0,0,1-.58862-.44738L73.20109.45587a.76728.76728,0,0,0-1.40216,0L70.08757,4.08344a.78527.78527,0,0,1-.58863.44738l-.58166.08844-3.24518.49323a.82826.82826,0,0,0-.43335,1.395l2.76917,2.82367a.84178.84178,0,0,1,.22485.72387L67.579,14.04211A.80844.80844,0,0,0,68.34947,15a.75174.75174,0,0,0,.364-.09576l3.42285-1.88245a.75148.75148,0,0,1,.7276,0l3.42279,1.88245a.75083.75083,0,0,0,.364.09576.80855.80855,0,0,0,.77044-.95789l-.65368-3.98706a.84134.84134,0,0,1,.22485-.72387ZM76.3231,8.67468a1.78216,1.78216,0,0,0-.48071,1.53211l.60968,3.71856-3.1366-1.725a1.68693,1.68693,0,0,0-.81543-.21V1.16669l1.56482,3.31683a1.721,1.721,0,0,0,1.29547.97418l3.58344.54468Z"></path>
                              </svg>
                        </div>
                        <div class="d-none d-md-inline-block small pr-3"> | </div><div class="small mr-md-4">Paris, France</div>
                      </div>
                  </div>
              </div>
                </div>
            </div>
              <div className="row h-100 d-flex m-t-160 m-l-100 m-r-100 m-b-100">
                <div className="col-lg-8">
                  <div class="row">
                    <div class="col-lg-2 col-sm-6">
                      <h4>About me</h4>
                    </div>
                    <div class="col-lg-8 col-sm-6">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
                    </div>
                  </div>
                  <hr className="my-3"/>
                  <div class="row">
                    <div class="col-lg-2 col-sm-6">
                      <h4>Language</h4>
                    </div>
                    <div class="col-lg-8 col-sm-6">
                      <span>
                      English, Espanol
                      </span>
                    </div>
                  </div>
                  <hr className="my-3"/>
                  <div class="row">
                    <div class="col-lg-4 col-sm-6">
                      <h2>X reviews</h2>
                    </div>
                  </div>
                  <div class="row m-t-30">
                    <div class="col-lg-2 col-sm-6">
                    <svg style={{position:'relative'}} xmlns="http://www.w3.org/2000/svg" width="34.875" height="34.875" viewBox="0 0 34.875 34.875">
                      <path id="Icon_awesome-user-circle" data-name="Icon awesome-user-circle" d="M17.438.563A17.438,17.438,0,1,0,34.875,18,17.434,17.434,0,0,0,17.438.563Zm0,6.75A6.188,6.188,0,1,1,11.25,13.5,6.188,6.188,0,0,1,17.438,7.313Zm0,24.188a13.474,13.474,0,0,1-10.3-4.8,7.839,7.839,0,0,1,6.926-4.2,1.72,1.72,0,0,1,.5.077,9.309,9.309,0,0,0,2.876.485,9.274,9.274,0,0,0,2.876-.485,1.72,1.72,0,0,1,.5-.077,7.839,7.839,0,0,1,6.926,4.2A13.474,13.474,0,0,1,17.438,31.5Z" transform="translate(0 -0.563)"/>
                    </svg>
                      <span className="m-l-10 h4">Users</span>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                      <h4>Review</h4>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                      <h4>Rating</h4>
                    </div>
                  </div>
                </div>
                <div style={{backgroundColor:'#f5f5f5'}} className="col-lg-4">
                  <div className="m-t-50">
                    <button style={{width:'100%', height:'60px'}} className="btn btn-tourex">Contact</button>
                  </div>
                </div>
              </div>
      </>
    );
  }
}
