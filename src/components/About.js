import React from "react";
import styled from "styled-components";
import bg_1 from "../images/bg_1.png";
import StyledSmTitle from '../styledComponents/StyledSmTitle'

export default function About() {
  return (
    <StyledSection>
      <div id="scrollDown"></div>
      <div className="wrapper">
        <img src={bg_1} alt="" />
        <div id="wrapper-inner">
            <StyledSmTitle>benefits</StyledSmTitle>
          <h2 className="display-4 font-weight-bold mt-2 mb-5" id='present'>
            Here are a few things that you'll love about Opera
          </h2>
          <div className="items">
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb4"
                width="66"
                height="50"
                viewBox="0 0 66 50"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    stroke="#B3E0FF"
                    strokeWidth="1.7"
                    transform="translate(1 1)"
                  >
                    <rect width="64" height="41" rx="8"></rect>
                    <path d="M18 47.336h28M31.5 41.5l-.08 5.796"></path>
                  </g>
                  <g transform="translate(17 13)">
                    <circle
                      cx="16"
                      cy="9"
                      r="9"
                      stroke="#0060FE"
                      strokeWidth="1.125"
                    ></circle>
                    <g stroke="#0060FE">
                      <path d="M5 11.5H2M5 9.5H0M5 7.5H2"></path>
                    </g>
                    <path
                      fill="#0060FE"
                      d="M15 4h1.2v5.134l3.657 1.672-.507 1.067L15 9.883z"
                    ></path>
                  </g>
                </g>
              </svg>
              <h4>Browse faster</h4>
              <p>
                We use way less processing capacity than other browsers and have
                a built-in ad blocker that helps load webpages faster.
              </p>
            </div>

            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb4"
                width="66"
                height="50"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    stroke="#B3E0FF"
                    strokeWidth="1.7"
                    transform="translate(1 1)"
                  >
                    <rect width="64" height="41" rx="8"></rect>
                    <path d="M18 47.336h28M31.5 41.5l-.08 5.796"></path>
                  </g>
                  <g transform="translate(25 11)">
                    <path
                      fill="#0060FE"
                      fillRule="nonzero"
                      d="M7.053 12.02v2.203a.705.705 0 0 0 1.41 0V12.02a.705.705 0 1 0-1.41 0z"
                    ></path>
                    <path
                      stroke="#0060FE"
                      strokeWidth="1.2"
                      d="M9.169 0a2.821 2.821 0 0 1 2.82 2.821l.001 3.257a8.288 8.288 0 0 0-4.232-1.141c-1.561 0-3.015.42-4.232 1.141V2.821A2.821 2.821 0 0 1 6.347 0H9.17z"
                    ></path>
                    <circle
                      cx="7.758"
                      cy="12.695"
                      r="7.758"
                      stroke="#0060FE"
                      strokeWidth="1.2"
                    ></circle>
                  </g>
                </g>
              </svg>
              <h4>Secure your privacy</h4>
              <p>
                We've got you covered. Our free VPN reduces online tracking and
                shields your browsing.
              </p>
            </div>

            <div className="item">
              <svg
                width="66"
                className="mb4"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                  <rect
                    stroke="#B3E0FF"
                    strokeWidth="1.7"
                    width="64"
                    height="41"
                    rx="8"
                  ></rect>
                  <path
                    d="M36.782 15.72a6.818 6.818 0 0 1 6.392 9.193v3.174a.852.852 0 0 1-.746.845l-.107.007h-3.188a6.804 6.804 0 0 1-2.351.416 6.8 6.8 0 0 1-5.067-2.256 8.396 8.396 0 0 0 4.247-11.33c.268-.032.542-.05.82-.05z"
                    stroke="#0060FE"
                    strokeWidth="1.2"
                  ></path>
                  <path
                    d="M28.391 11a8.391 8.391 0 0 0-7.867 11.317v3.904c0 .579.47 1.048 1.05 1.048h3.923A8.391 8.391 0 1 0 28.39 11z"
                    stroke="#0060FE"
                    strokeWidth="1.2"
                  ></path>
                  <path
                    d="M25.507 18.867a.787.787 0 1 1 0 1.573.787.787 0 0 1 0-1.573zm2.622 0a.787.787 0 1 1 0 1.573.787.787 0 0 1 0-1.573zm2.622 0a.787.787 0 1 1 0 1.573.787.787 0 0 1 0-1.573z"
                    fill="#0060FE"
                  ></path>
                  <path
                    d="M18 47.336h28M31.5 41.5l-.08 5.796"
                    stroke="#B3E0FF"
                    strokeWidth="1.7"
                  ></path>
                </g>
              </svg>
              <h4>Stay in touch</h4>
              <p>
                Chat and browse at the same time with built-in messengers on the
                edge of your browser. There's no need to keep juggling tabs and
                apps.
              </p>
            </div>

            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb4"
                width="66"
                height="50"
                viewBox="0 0 66 50"
              >
                <g fill="none" fillRule="evenodd">
                  <g
                    stroke="#B3E0FF"
                    strokeWidth="1.7"
                    transform="translate(1 1)"
                  >
                    <rect width="64" height="41" rx="8"></rect>
                    <path d="M18 47.336h28M31.5 41.5l-.08 5.796"></path>
                  </g>
                  <path
                    fill="#0060FE"
                    fillRule="nonzero"
                    d="M33.59 11h9.414v7.06H33.59V11zm0 20.004V19.237h9.414v11.767H33.59zm-10.59 0v-7.06h9.414v7.06H23zm0-8.237V11h9.414v11.767H23zm1.177-10.59v9.413h7.06v-9.413h-7.06zm10.59 0v4.706h7.06v-4.706h-7.06zm0 8.237v9.413h7.06v-9.413h-7.06zm-10.59 4.706v4.707h7.06V25.12h-7.06z"
                  ></path>
                </g>
              </svg>
              <h4>You do you</h4>
              <p>
                Customize Opera with dark and light themes, keyboard shortcuts,
                your favorite bookmarks and tons of other options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`
position: relative;
  padding: 20vmax 0 0;
  text-align: center;
  .wrapper {
    position: relative;
    background: rgba(250,250,250);
    border-radius: 20px;
    padding: 24vmax 0 30px;
  }

  img {
    width: 90%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  #wrapper-inner {
    width: 90%;
    margin: 0 auto;
  }

  .items {
    display: grid;
    grid-gap: 35px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  h4 {
      font-size: 1.4rem;
      font-weight: bold;
  }

  svg {
      margin-bottom: 20px;
  }

  #present {
    font-size: 2rem;
  }

  #scrollDown{
    position: absolute;
    top: -5rem;
  }
  @media screen and (min-width: 768px) {
    .items {
      text-align: left;
    }
  }
`;
