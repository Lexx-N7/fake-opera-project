import React from "react";
import StyledSmTitle from "../styledComponents/StyledSmTitle";
import mainImage from "../images/main-image.png";
import secondImage_1 from "../images/second-image_1.png";
import secondImage_2 from "../images/second-image_2.png";
import secondImage_3 from "../images/second-image_3.png";
import secondImage_4 from "../images/second-image_4.png";
import arrowRightLonger from "../images/icons/arrow-right-longer.svg";
import styled from "styled-components";

let data = {
  title: "It's time to switch to Opera",
  text:
    "You know when you don't want to do something,\
 like go out, but a friend makes you and then you're really \
 glad you did. This is one of those situations."
};

export default function AltBanner() {
  let { title, text } = data;
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="banner-info">
          <StyledSmTitle>how to switch</StyledSmTitle>
          <h2 className="my-4">{title}</h2>
          <p>{text}</p>
          <button className="btn btn-lg btn-danger rounded-pill">
            Let's switch{" "}
            <img className="arrowRightLonger" src={arrowRightLonger} alt="" />
          </button>
        </div>

        <div className="image-container">
          <div className='handle-circle'>
            <img className="mainImage" src={mainImage} alt="" />
          </div>
          <div className='handle-circle'>
            <img className="hide secondImage_1" src={secondImage_1} alt="" />
          </div>
          <div className='handle-circle'>
            <img className="hide secondImage_2" src={secondImage_2} alt="" />
          </div>
          <div className='handle-circle'>
            <img className="hide secondImage_3" src={secondImage_3} alt="" />
          </div>
          <div className='handle-circle'>
            <img className="hide secondImage_4" src={secondImage_4} alt="" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`
  background: #fafafa;
  padding: 0 0 2rem;
  text-align: center;
  .wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 4rem 0;
  }
  .image-container {
    position: relative;
    width: 55vmax;
    margin-bottom: 1rem;
  }
  .banner-info {
    width: 80%;
    position: relative;
  }
  .btn {
    font-size: 1rem;
    padding: 0.8em 3em 0.8em 2.5em;
    position: relative;
  }
  .arrowRightLonger {
    position: absolute;
    right: 18%;
    top: 50%;
    transition: 0.3s;
    transform: scale(1.2);
  }

  .btn:hover .arrowRightLonger {
    right: 15%;
  }
  .mainImage {
    position: relative;
    width: 25%;
    right: 0;
  }

  .mainImage {
    width: 100%;
  }

  .hide {
    display: none;
    width: 100%;
  }

  h2 {
    font-weight: 500;
    line-height: 1;
    font-size: 1.5rem;
  }
  .secondImage_1 {
    position: absolute;
    width: 30%;
    right: 0;
    bottom: -4rem;
  }
  .secondImage_2 {
    position: absolute;
    right: -6rem;
    bottom: 10rem;
    width: 30%;
  }
  .secondImage_3 {
    position: absolute;
    right: 0;
    bottom: 15rem;
    width: 40%;
  }
  .secondImage_4 {
    position: absolute;
    right: 15rem;;
    width: 40%;
    bottom: 10rem;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    .wrapper {
      flex-direction: row;
      justify-content: space-between;
      padding: 6rem 0 ;
    }
    .image-container {
      width: 25%;
      margin: 0;
      bottom: 0;
    }
    h2 {
      font-size: 3rem;
    }
    .mainImage {
    }
    .banner-info {
      width: 50%;
    }
    .banner-info h2 {
      font-size: 3.5rem;
    }
    .banner-info p {
      font-size: 1.1rem;
    }
    .hide {
      display: block;
    }
  }
`;
