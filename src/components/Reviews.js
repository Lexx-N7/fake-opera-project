import React from "react";
import StyledSmTitle from "../styledComponents/StyledSmTitle";
import styled from "styled-components";
import img_1 from "../images/reviews/img-1.png";
import img_2 from "../images/reviews/img-2.png";
import img_3 from "../images/reviews/img-3.png";
import img_4 from "../images/reviews/img-4.png";
import uuid from "uuid";

let data = [
  {
    text:
      "“A lot of people use ad-blocking extensions in their browsers,\
         but now Opera has gone one better, by building the functionality into the browser itself.”",
    img: img_1,
    title: "fortune.com",
    data: "march 10,2016"
  },
  {
    text:
      "“Opera which seems determined to pack generations worth of improvements\
         into a few short months, boasts yet another reason for you to switch browsers:\
          a “low-power mode.”",
    img: img_2,
    title: "fortune.com",
    data: "march 10,2016"
  },
  {
    text:
      "“There are lots of sync tools out there to move content between desktop\
         and phone, but I have not found another that's as simple and easy to use as Opera's Flow.”",
    img: img_3,
    title: "fortune.com",
    data: "march 10,2016"
  },
  {
    text:
      "“Opera is still the minnow of the browser world, but it could be\
         about to have an outsized impact.”",
    img: img_4,
    title: "fortune.com",
    data: "march 10,2016"
  }
];

export default function Reviews() {
  return (
    <StyledSection>
      <div className="wrapper">
        <StyledSmTitle>reviews</StyledSmTitle>
        <h2>Nice stuff others have said about us</h2>
        <div className="reviews">
          {data.map(item => {
            let { text, img, title, data } = item;
            return (
              <article key={uuid.v4()}>
                <p>{text}</p>
                <div className="review-details">
                  <div className="circle">
                    <img src={img} alt={title} />
                  </div>
                  <div className="detail">
                    <code>{title}</code>
                    <>{data}</>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`
background: #fafafa;
  padding: 3.5em 0;
  .wrapper {
    text-align: center;
  }
  h2 {
    margin: 0.5em 0 1em;
  }
  p {
      font-size: 0.9rem;
      font-style: italic;
  }
  .reviews {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(23rem,1fr));
    grid-gap: 1.5em;
    text-align: center;
  }
  article {
    padding: 2em;
    border-radius: 2rem;
    background: #fff;F
    box-shadow:  0 0 6px #333;
  }

  .review-details {
    margin: 0 auto;
    display: flex;
    width: 10rem;
    justify-content: space-between;
  }
  .detail {
    display: flex;
    flex-direction: column;
  }

  .circle {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 0.2em;
    background: #fafafa;
  }

  img {
    width: 100%;
  }

   {
    font-size: 0.6rem;
    color: #999;
  }
  @media screen and (min-width: 768px) {
    .reviews {
      flex-direction: row;
      flex-wrap: wrap;
    }

    article {
        text-align: left;
    }
    h2 {
        font-size: 3.5rem;
    }
    .review-details {
        margin: 0;
    }
  }
`;
