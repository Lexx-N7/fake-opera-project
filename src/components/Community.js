import React from "react";
import StyledSmTitle from "../styledComponents/StyledSmTitle";
import styled from "styled-components";
import LinkBtn from "./LinkBtn";
import img from '../images/community.jpg'

let data = {
    img,
    title: "Join Opera's community",
    smTitle: "OPERA FORUMS",
    text: "We're always happy when you enjoy our products and we love to get feedback on them. With your help we can develop and adjust them to your needs and expectations.",
    reverse: false
  }

export default function Community() {
    let {img,title,smTitle,text,reverse} = data
  return (
    <StyledSection reverse={reverse}>
      <div
        className={`wrapper d-flex align-items-center flex-column justify-content-between ${
          reverse ? "flex-md-row-reverse" : "flex-md-row "
        }`}
      >
        <div id="circle">
          <img src={img} alt="" />
        </div>
        <div className="banner_info">
          <StyledSmTitle>{smTitle}</StyledSmTitle>
          <h2 className="my-4">{title}</h2>
          <p>{text}</p>
          <LinkBtn />
        </div>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`

  padding: 3rem 0;
  background: ${props => (props.reverse ? "#fafafa" : "#fff")};
  text-align: center;

  #circle {
    border-radius: 100%;
    overflow: hidden;
    width: 80%;
  }

  img {
    margin-bottom: 2em;
    width: 100%;
  }

  .banner_info {
    width: 80%;
  }

  h2 {
    font-weight: 500;
    line-height: 1;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    #circle {
      width: 40%;
    }
    h2 {
      font-size: 3rem;
    }
    .banner_info {
      width: 50%;
    }
  }
`;
