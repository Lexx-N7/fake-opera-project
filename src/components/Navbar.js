import React, { useState } from "react";
import logo from "../images/logo.png";
import DownloadBtn from "./DownloadBtn";
import styled from "styled-components";
import window from '../images/icons/window.svg'
import linux from '../images/linux.jpg'


export default function Navbar({os}) {
  let [isOpen, setIsOpen] = useState("");
  let [navHeight, setNavHeight] = useState("10vh");
  
  // window.onresize =()=>{
  //   if(window.innerWidth > 1000){
  //     setNavHeight('10vh')
  //   } else {
  //     setNavHeight('45vh')
  //   }
  // }
  return (
    <StyledNav 
    navHeight={navHeight}
    className="navbar navbar-expand-lg navbar-light bg-white setEffect"
    >
      <a className="navbar-brand" href="/#">
        <img src={logo} alt="" width="80"/>
      </a>
      <button
        onClick={() => {
          setIsOpen(isOpen ? "" : "show");
          setNavHeight(navHeight === '10vh'?'45vh':'10vh');
        }}
        className="navbar-toggler ml-auto"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen} `} id="navbarNav">
        <ul
          className="navbar-nav d-flex justify-content-between ml-5"
          style={{ width: "85%", fontWeight: 500 }}
          >
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              >
              Why Opera
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
            </div>
          </div>

          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              >
              Features
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
            </div>
          </div>

          <li className="nav-item">
            <a href="/#" className="nav-link">
              Switch to Opera
            </a>
          </li>

          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              >
              Computer Browsers
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
            </div>
          </div>

          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              >
              Mobile apps
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
            </div>
          </div>

          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
            >
              Downloads
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/#">
                Action
              </a>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
            </div>
          </div>
          <div id="overlay"></div>
        </ul>
      </div>
      <div className="d-none d-lg-block" id="btnWrapper">
        <DownloadBtn color="btn-outline-primary" />
      </div>
    </StyledNav>
  );
}

document.body.addEventListener("wheel", e => {
  let nav = document.querySelector(".navbar");
  if (e.deltaY < 0) {
    nav.classList.replace("unsetEffect", "setEffect");
  } else {
    nav.classList.replace("setEffect", "unsetEffect");
  }
});


let StyledNav = styled.nav`
font-size: 0.7rem;
transition: 0.5s;
width: 100%;
box-shadow: 0 2px 15px 0 rgba(0,0,0,.05);
  &.setEffect {
    z-index: 3;
    height: 10vh;
    position: fixed;
  }

  &.unsetEffect {
    height: 0px;
    position: sticky;
  }

  .btn {
    padding: 0.4em 0.8em;
    font-size: 0.7rem;
    font-weight: bold;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  #overlay {
    position: fixed;
    top: ${props => props.navHeight};
    left: 0;
    height: 90vh;
    width: 100%;
    transition: 0.5s;
    z-index: -2;
    pointer-events: none;
  }

  .dropdown:hover ~ #overlay {
    background: rgba(0, 0, 0, 0.6);
  }
`;

