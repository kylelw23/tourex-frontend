import React from "react";
// import { Link } from "react-router-dom";
import image1 from "../Assets/Images/camel.jpeg";
import image2 from "../Assets/Images/lagan.jpg";
import image3 from "../Assets/Images/standing-mountain.jpeg";

import {
  grabUserToken,
  fetchTourGuidesAsJSONDataByBearerTokenAndQuery,
} from "../Store/APIAction";

import { TourexConsumer } from "../Store/context";

interface IProps {
  tourguides: Object[];
  setTourGuides: Function;
}
interface IState {
  searchQuery: string;
  dates: string;
  searchType: number;
  hideSearchBtn: boolean;
}

export default class Carousel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      searchQuery: "",
      dates: "",
      searchType: 2,
      hideSearchBtn: false,
    };
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(({
      [name]: value,
    } as unknown) as Pick<IState, keyof IState>);
  };

  private handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(({
      [name]: value,
    } as unknown) as Pick<IState, keyof IState>);
  };

  private handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { searchQuery, dates, searchType } = this.state;
    this.setState({
      hideSearchBtn: true,
    });

    if (this.validateForm()) {
      if (searchType == 1) {
        //search for tours
      } else {
        //search for tour guides
        let jsonData = await fetchTourGuidesAsJSONDataByBearerTokenAndQuery(searchQuery); //prettier-ignore
        this.props.setTourGuides(jsonData);
        console.log(jsonData);
      }
      // this.setState({ submitSuccess });
      // if (submitSuccess) {
      //   window.location.reload();
      // }
    }

    this.setState({
      hideSearchBtn: false,
    });
  };

  private validateForm(): boolean {
    //Todo more validation?
    return this.state.searchQuery.length > 0;
  }

  render() {
    const { searchType, hideSearchBtn } = this.state;

    return (
      //prettier-ignore
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* Indicators to how many carousels we have */}
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
  
          {/* Wrapper for image slides */}
          <div className="carousel-inner">
            {/* Search bar here */}
            <div className="position-absolute h-100 w-100" style={{ zIndex: 2 }}>
              <div className="row h-100 px-5 py-5 d-flex align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 m-l-100">
                  <div
                    className="card shadow bg-white rounded"
                    style={{ backgroundColor: "#f5f5f5", opacity: 1 }}
                  >
                    <div className="card-body m-2">
                      <h2 className="m-b-20">
                        Great things never came from comfort zones!
                      </h2>
                      {/* FORM onSubmit={(e)=>{this.handleSubmit(e)}}*/}
                      <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                        <div className="input-group" style={{width:'100%'}}>
                          <div className="input-group-prepend" >
                            <select className="custom-select" name="searchType" value={this.state.searchType} onChange={this.handleSelectChange}>
                              <option value="1">Tour</option>
                              <option value="2">Tour Guides</option>
                            </select>
                          </div>
                          <input type="text" className="form-control mr-sm-2" aria-label="Text input with dropdown button"
                              name="searchQuery" value={this.state.searchQuery} onChange={this.handleChange}
                            />
                        </div>
                        <div className='row m-t-20'>
                          <div className="col-lg-9">
                          {searchType == 1 && 
                            <input className="form-control m-r-16" type="date" 
                              name="dates" value={this.state.dates} onChange={this.handleChange}
                            />
                          }
                          </div>
                          {!hideSearchBtn &&
                            <div style={{width:'21%'}} >
                              <button
                                className="btn btn-block btn-outline-info my-2 my-sm-0"
                                type="submit">
                                  Search
                              </button>
                            </div>
                          }
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Slides here */}
            <div className="carousel-item active">
              <img style ={{width:'100%',height:'450px', objectFit:'cover'}} className="d-block w-100" src={image2} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img style ={{width:'100%',height:'450px', objectFit:'cover'}} className="d-block w-100" src={image1} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img style ={{width:'100%',height:'450px', objectFit:'cover'}} className="d-block w-100" src={image3} alt="Third slide" />
            </div>
          </div>
  
          {/* Left and Right controls <a> */}
          <a
            className="carousel-control-prev m-0"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon m-0" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next m-0"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}
