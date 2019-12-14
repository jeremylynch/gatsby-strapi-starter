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
  const sideMetadata = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  let {title, author} = sideMetadata.site.siteMetadata
  return (
    <Slider {...settings}>
      <div>
        <div className="text-center">
          <h1>{title}</h1>
          <p>By {author}</p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1>{title}</h1>
          <p>By {author}</p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1>{title}</h1>
          <p>By {author}</p>
        </div>
      </div>
    </Slider>
  )
}
