import React from 'react'
import { Link } from 'react-router-dom';
import image1 from "../Assets/Images/italy_stretched.png";
import image2 from "../Assets/Images/lagan.PNG";
import image3 from "../Assets/Images/sunset-walking.jpg"

export default function Carousel() {
        return (
            <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={image1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={image2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={image3} alt="Third slide" />
            </div>
          </div>
		  
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    )
}