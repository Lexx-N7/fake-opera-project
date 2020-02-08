import React from "react";
import mainBg from "../images/mainBg.jpg";
import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";

export default function Header() {
  return (
    <StyledHeader>
      <div className=" bgWrapper"></div>
      <div className='wrapper'>
          <div className="  infoWrapper">
            <h1 className="display-4 mb-4">Browse the way you want</h1>
            <h5>Opera isn't just a browser. It's an awesome browser.</h5>
            <span className=" d-inline-block">
              <DownloadBtn color="btn-primary "  />
              <br />
              <span className="text-muted text-center d-block">it's free</span>
            </span>
          </div>
      </div>
          <a href='#scrollDown' id="start">icon</a>
    </StyledHeader>
  );
}

let StyledHeader = styled.header`
background-color: #fafafa;
overflow: hidden;
text-align: center;
padding: 10em 0 18em;
position: relative; 


.infoWrapper {
    width: 30rem;
    z-index: 2;
    position: absolute;
    left: 1rem;
    // top: 10rem;
}

h1 {
    font-weight: 700;
    font-size: 2rem;
}

.btn {
    padding: 1em 3em;
    font-weight: 700;
    margin: 30px auto 20px;
}

#start {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 1rem;
  transition:.3s;
}

#start:hover {
 transform: translate(-50%, 1rem);
}


@media screen and (min-width: 768px){
  text-align: left;
  padding-bottom: 40em;
  margin-bottom: 8em;
  
  .bgWrapper {
    background-image: url('${mainBg}');
    background-size:87%;
    background-position: 50% 0;
    // background-repeat: no-repeat;
    height: 60rem;
    width: 60rem;
    display: block;
    border-radius: 520px;
    position: absolute;
    right: -4em;
    top: -2em;
    z-index: 1;
  }
  .infoWrapper {
    left: 3rem;
  }

  h1 {
    font-size: 4rem;
  }

}

@media screen and (min-width: 1080px) {
  .infoWrapper {
    left: 7rem;
  }
}

@media screen and (min-width: 1920px) {
  .infoWrapper {
    width: 25rem;
  }
}
`;
