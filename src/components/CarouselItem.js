import React from 'react'
import styled from 'styled-components'

export default function CarouselItem({icon,title,text}) {

    return (
        <StyledDiv>
            <div id='wrap'>
                <img src={icon} alt="" className='img-fluid'/>
                <h4>{title}</h4>
            </div>
            <p>{text}</p>
        </StyledDiv>
    )
}

let StyledDiv = styled.div `
cursor: pointer;
transition: .3s;
    padding: 3em 2em;
    margin: 0 1em;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    width: 19rem;
    border-radius: 1rem;
    &:hover {
        box-shadow: 0 0 10px #333;
    }
    #wrap {
        display: flex;
        align-items: center;
    }

    img {
        width: 35%;
    }
    h4 {
        margin-left: 10px;
        font-size: 1.1rem;
        font-weight: bold;
    }
    p {
    // white-space: pre;
    }

`