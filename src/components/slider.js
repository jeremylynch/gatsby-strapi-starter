import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  background: linear-gradient(210deg,#943cff 0%,#dd45d3 40.13%,#fc9a57 90%);
  color: white;
  padding: 10rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
`

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
    <SliderContainer>
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
    </SliderContainer>
  )
}
