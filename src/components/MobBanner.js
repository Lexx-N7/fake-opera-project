import React from "react";
import StyledSmTitle from "../styledComponents/StyledSmTitle";
import styled from "styled-components";
import LinkBtn from "./LinkBtn";
import mobBg from "../images/mobBg.jpg";

export default function Banner() {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="banner_info">
          <StyledSmTitle>mobile apps</StyledSmTitle>
          <h2 className="my-4">Browse wherever you are</h2>
          <p>
            Opera’s mobile browsers and apps are fast, feature-packed, and
            provide the best web experience for Android and iOS.
          </p>
          <LinkBtn />
        </div>
        <div id="circle"></div>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`
  padding: 3rem 0;
  
  .wrapper {
      padding: 0;
      position: relative;
      overflow: hidden;
      text-align: center;
      
    }
    
    #circle {
        background: url('${mobBg}');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        height: 40rem;
        width: 40rem;
        border-radius: 100%;
        right: 0;
        top: 50%;
        transform: translatey(-50%);
        position: absolute;
        z-index: -1;
        display: none;
  }

  img {
    margin-bottom: 2em;
    width: 100%;
  }

  .banner_info {
    width: 50%;
    margin: 0 auto;
  }

  h2 {
    font-weight: 500;
    line-height: 1;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    .wrapper {
        text-align: left;
        padding: 13rem 0;
    }
    .banner_info {
        margin: 0;
    }
    #circle {
      display: block;
    }
    h2 {
      font-size: 3rem;
    }
  }
`;
