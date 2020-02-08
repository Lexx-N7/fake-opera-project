import React from "react";
import { features } from "../data";
import CarouselItem from "./CarouselItem";
import uuid from "uuid";
import styled from "styled-components";
// import arrowLeft from "../images/icons/arrow-left.svg";
// import arrowRight from "../images/icons/arrow-right.svg";

export default function Carousel() {
  let handleScroll = e => {
    console.log(e.target.scrollTop);
  };

  let handleScrollLeft = increasement => {
    let scroll = document.querySelector("#scroll");
  
    increasement
      ? (scroll.scrollLeft -= scroll.offsetWidth)
      : (scroll.scrollLeft += scroll.offsetWidth);

    console.log(document.querySelector("#left-arrow"));
  };

  return (
    <StyledSection className="box">
      <div id="carousel">
        <span id="left-arrow" onClick={() => handleScrollLeft(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="38"
            viewBox="0 0 21 38"
          >
            <path
              fill="none"
              fillRule="evenodd"
              stroke="#000000 "
              strokeWidth="2"
              d="M20 37L2 18.772 20 1"
            />
          </svg>
        </span>
        <div id="scroll" onClick={handleScroll}>
          {features.map(item => {
            return <CarouselItem key={uuid.v4()} {...item} />;
          })}
        </div>
        <span id="right-arrow" onClick={() => handleScrollLeft(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="38"
            viewBox="0 0 21 38"
          >
            <path
              fill="none"
              fillRule="evenodd"
              stroke="#000000"
              strokeWidth="2"
              d="M1 37l18-18.228L1 1"
            />
          </svg>
        </span>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`
  padding: 0 8rem;
  #carousel {
    position: relative;
  }
  #scroll {
    scroll-behavior: smooth ;
    white-space: pre;
    overflow: auto;
    padding: 30px 0;
  }
  #scroll::-webkit-scrollbar {
    display: none;
  }
  #left-arrow,
  #right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-20%);
    cursor: pointer;
    padding: 10px;
  }
  #left-arrow {
    left: -2rem;
  }
  #right-arrow {
    right: -2rem;
  }
  #left-arrow:hover path,
  #right-arrow:hover path {
    stroke: #777;
  }
  // path,svg {
  //   pointer-events: all;
  // }

  //   object {
  //     pointer-events: none;
  // }
`;

// var box = document.querySelector('.box')
// var counter = 0

// function update() {
//     box.animate([{ opacity: '0' }, { opacity: '1' }], { duration: 1000, fill: 'forwards' })
// }
// update()
// document.querySelector('.btn2').addEventListener('click', () => {
//     if (counter == 2) {
//         counter = -1
//     }
//     counter++
//     update()
// })

// document.querySelector('.btn1').addEventListener('click', () => {
//     if (counter == 0) {
//         counter = 3
//     }
//     counter--
//     update()
// })

// var autoSlide = function() {
//     if (counter == 2) {
//         counter = -1
//     }
//     counter++
//     update()
// }
// setInterval(autoSlide, 3000)
