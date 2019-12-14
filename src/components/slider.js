import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const title = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Slider {...settings}>
      <div>
        <div className="text-center">
          <h1>{title.site.siteMetadata.title}</h1>
          <p>By Jeremy Lynch</p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1>{title.site.siteMetadata.title}</h1>
          <p>By Jeremy Lynch</p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1>{title.site.siteMetadata.title}</h1>
          <p>By Jeremy Lynch</p>
        </div>
      </div>
    </Slider>
  )
}
