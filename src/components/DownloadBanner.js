import React from "react";
import DownloadBtn from './DownloadBtn'
import styled from 'styled-components'

export default function DownloadBanner() {
  return (
    <StyledSection>
        <div className="wrapper">
          <div className='banner-inner'>
              <h2>You deserve a better browser</h2>
              <p>
                Free VPN, ad blocker and Flow - Just a few of the must-have features
                built into Opera for faster, smoother and distraction-free browsing.
              </p>
          </div>
          <div className="button-configs">
            <DownloadBtn color='btn-primary'/>
            <p>it's free</p>
          </div>
        </div>
    </StyledSection>
  );
}

let StyledSection = styled.section `
padding: 10rem 0;
.wrapper {
    text-align: center;
    padding: 2em 2em 0.2em;
    background: rgba(250,30,78);
    border-radius: 2rem;
    color: #fff;
}

.btn {
    padding: 1em 2.8em;
    font-size: 0.9rem;
    font-weight: bold;
  }
  p {
      padding: 1em 0;
  }

  @media screen and (min-width: 768px) {
      .wrapper {
          display: flex;
          align-items: center;
          padding: 5em 3em;
          text-align: left;
          justify-content: space-between;
      }
      .banner-inner {
          width: 65%;
      }
      p{
          padding: 0;
          margin: 0;
      }
      .btn {
          margin-top: 1em;
          font-size: 1.1rem;
          margin-bottom: 1.5em;
      }
      .button-configs {
          margin-left: 4em;
          text-align: center;
      }
  }
`