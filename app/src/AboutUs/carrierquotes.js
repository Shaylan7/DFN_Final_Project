import * as React from "react";
import "./carousel.css";

const CarrierQuotes = () => {
  return (
    <div>
      <h2>What our carriers and shippers say.....</h2>
      <div
        id="myCarousel"
        class="carousel slide text-center"
        data-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <h4>
              "I am usually in the dark when it comes to where to take rejected
              product. I've taken hours in the past just to find a local dump.
              Thankfully I'm able to find a registered location and find it
              quickly."
              <br />
              <span>Jan Stewart, Rusty's Trucking</span>
            </h4>
          </div>
          <div class="carousel-item">
            <h4>
              "No more waiting for hours to hear back on an approved donation
              facility"
              <br />
              <span>John Bell, Dynamite Freight</span>
            </h4>
          </div>
          <div class="carousel-item">
            <h4>
              "We've partnered with Donate Freight Network so that we can reach
              our sustainability goals"
              <br />
              <span>Mike Grubb, Procter and Gamble</span>
            </h4>
          </div>
        </div>

        {/* <!-- Left and right controls --> */}
        <a
          class="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span>
            <i class="fas fa-chevron-left"></i>
          </span>
          {/* <span
            class="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span> */}
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <i class="fas fa-chevron-right"></i>
          {/* <span
            class="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span> */}
          <span class="sr-only">Next</span>
        </a>
        {/* <button
          class="left carousel-control"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="right carousel-control"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
};

export default CarrierQuotes;
