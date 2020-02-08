import React from "react";
import img_1 from "../images/img-1.png";
import img_2 from "../images/img-2.png";
import img_3 from "../images/img-3.png";
import img_4 from "../images/img-4.png";
import styled from "styled-components";
import uuid from "uuid";
import arrow from "../images/icons/arrow-right-longer.svg";

let data = [
  {
    img: img_1,
    title: "Opera Mini",
    subtitle: "Lightweight & safe browser",
    stars: 4
  },
  {
    img: img_2,
    title: "Opera for Android",
    subtitle: "Browser with free VPN",
    stars: 5
  },
  {
    img: img_3,
    title: "Opera Touch",
    subtitle: "Light & fast browser",
    stars: 3
  },
  {
    img: img_4,
    title: "Opera News",
    subtitle: "Local news & trending videos",
    stars: 4
  }
];

export default function OperaItems() {
  let stars = [];
  return (
    <StyledSection>
      <div className="wrapper items-center">
        {data.map(item => {
          stars = [];
          for (let i = 0; i < item.stars; i++) {
            stars.push("full");
          }
          for(let i =0; i< 5 - item.stars;i++){
            stars.push('empty')
          } 
          return (
            <article key={uuid.v4()}>
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
              <h6>{item.subtitle}</h6>
              <span>
                {stars.map(star => {
                 return star === 'full'
                    ?(<i key={uuid.v4()} className="fas fa-star"></i>)
                    :(<i key={uuid.v4()} className="far fa-star"></i>)
                  }
                )}
              </span>
              <button type="button" className="btn btn-dark rounded-pill d-block">
                Get info <img src={arrow} alt="" />
              </button>
            </article>
          );
        })}
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`
article {
  margin-bottom: 3em;
}

button {
  margin: 0 auto;
}

  img {
    width: 20%;
    margin-bottom: 1em;
  }
  .items-center {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 2rem;
  }
  h5 {
    font-weight: bold;
    margin-bottom: 1em;
  }
  h6 {
    color: blue;
    margin-bottom: 1em;
  }
  i {
    color: red;
    transform: scale(0.8);
    margin-bottom: 1em;
  }
  .btn {
      white-space: nowrap;
      font-size: 0.8rem;
      padding: 0.5em 2.5em 0.5em 1.5em;
      position: relative;
      transition: .3s;
  }
  .btn img {
      position: absolute;
      transform: scale(0.7) translateY(-50%);
      transition: .3s;
      top: 50%;
  }
  .btn:hover img {
    // right: -0.1rem;
    transform:scale(0.7) translate(0.5rem, -50%);
}
  @media screen and (min-width: 576px) {
    .items-center {
      text-align: left;
    }
    button {
      margin: 0;
    }
  }
`;
