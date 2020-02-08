import React from "react";
import styled from "styled-components";
import windows from "../images/win.svg";
import { os } from "../App";
import linux from "../images/linux.jpg";

export default function DownloadBtn(props) {
  return (
    <button
      className={`btn ${props.color} rounded-pill`}
      style={{ whiteSpace: "nowrap" }}
    >
      <StyledImg src={os === "windows" ? windows : linux} alt="" /> Download now
    </button>
  );
}

let StyledImg = styled.img`
  fill: red !important;
  width: 10%;
`;
