import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="text-center">
            <h1>Bootstrap + Strapi + Gatsby Starter</h1>
            <p>By Jeremy Lynch</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>Bootstrap + Strapi + Gatsby Starter</h1>
            <p>By Jeremy Lynch</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h1>Bootstrap + Strapi + Gatsby Starter</h1>
            <p>By Jeremy Lynch</p>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider
