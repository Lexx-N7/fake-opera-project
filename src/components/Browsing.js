import React from "react";
import StyledSmTitle from "../styledComponents/StyledSmTitle";
import styled from "styled-components";
import img_1 from "../images/card-img-1.jpg";
import img_2 from "../images/card-img-2.jpg";
import LinkBtn from "./LinkBtn";

export default function Browsing() {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="text-center m">
          <StyledSmTitle>opera blogs</StyledSmTitle>
          <h2>Read more about browsing, with us specifically</h2>
        </div>

        <div className="card-items">
          <div className="card-item">
            <div className="img-wrapper">
              <img src={img_1} alt="" />
            </div>
            <h3>Latest desktop blog posts</h3>
            <p>
              Visit our blog for the latest updates and news about our desktop
              browsers, their features and the future of browsing. Read about
              Crypto Wallet, Web 3, the Opera GX gaming browser and what’s
              coming soon from Opera.
            </p>
            <LinkBtn title="Read articles" />
          </div>

          <div className="card-item">
            <div className="img-wrapper">
              <img src={img_2} alt="" />
            </div>
            <h3>Latest mobile blog posts</h3>
            <p>
              Read about our design award-winning mobile browsers,
              synchronization between devices and other improvements. Get the
              latest updates and news, and find out what’s in the works for
              mobile browsers at Opera.
            </p>
            <LinkBtn title="Read articles" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`
  padding: 10rem 0;

  h2 {
      font-size: 3.7rem;
      margin-bottom: 1em;
  }

  h3 {
      font-size: 1.4rem;
      margin: 1em 0;
  }
  p {
      font-size: 1rem;
  }
  .card-items {
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
}

.card-item {
    width: 100%;
      margin-bottom: 3em;
}

.img-wrapper {
    border-radius: 2.3rem;
    overflow: hidden;
    max-width: 100%;
    height: auto;
}

img {
    width: 100%;
}

@media screen and (min-width: 768px) {
    .card-items {
        justify-content: space-between;
        text-align: left;
        flex-direction: row;
    }
    .card-item {
        width: 48.5%;

    }
}
`;
