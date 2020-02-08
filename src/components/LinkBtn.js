import React from "react";
import arrow from "../images/icons/test.svg";
import styled from "styled-components";

export default function LinkBtn({title}) {
  return (
    <StyledButton className="btn border-dark rounded-pill d-flex align-items-center">
      {title} <img src={arrow} alt="" className="align-self-end" id="img" />
    </StyledButton>
  );
}
LinkBtn.defaultProps = {
  title: 'Read more'
}

let StyledButton = styled.button`
  position: relative;
  font-size: 0.8rem;
  padding: 0.8em 3.5em 0.8em 2em;
  transition: 0.5s;
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 768px){
    margin: 0;
  }
  #img {
    width: 1rem;
    position: absolute;
    right: 1rem;
    transition: 0.5s;
  }

  &:hover {
    background: rgba(200, 200, 200);
  }
  &:hover #img {
    right: 0.5rem;
  }
`;
