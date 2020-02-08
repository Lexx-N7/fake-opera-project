import React,{useState} from "react";
import logo from "../images/logo.png";
import styled from "styled-components";
import red from "../images/icons/red.svg";
import facebook from '../images/icons/facebook.svg'
import twitter from '../images/icons/twitter.svg'
import youtube from '../images/icons/youtube.svg'
import instagram from '../images/icons/instagram.svg'
import win from '../images/win.svg'
import glob from '../images/icons/globus.svg'
import uuid from "uuid";



let languages = ['arm','us','rus']


export default function Footer() {
    // let [state,setState] = useState({
    //     li_1: false,
    //     li_2: false,
    //     li_3: false,
    //     li_4: false
    // })
    let [open,setOpen] = useState(false)

  return (
    <StyledSection open={open}>
              <button className='btn btn-primary'>
                 <img src={win} alt=""/> Download now
             </button>
      <div className="wrapper">
        <div className='footer-list'>
            <ul className='left-list'>
              <li>
                <a href="/#" className='logo-1'>
                  <img className='logo-1_img' src={logo} alt="" />
                </a>
              </li>
              <li className='font-weight-bold mb-3' >Opera Norway AS</li>
              <li className='d-flex align-items-center mb-4' id='oslo'>
                Gjerdrums vei 19<br/>
                 NO-0484 OSLO{" "}
                <span className='ml-3'>
                  <img src={red} alt="" />
                </span>
              </li>
              <li className='font-weight-bold mb-4 contact-us'>Contact us
               <a href="/#">press-team@opera.com</a></li>
              <li  className='social-medias '>
              <span className='medias_title'>Follow Opera</span>
                  <div className='medias_list '>
                      <a href="/#"><span><img src={facebook} alt=""/></span></a>
                      <a href="/#"><span><img src={twitter} alt=""/></span></a>
                      <a href="/#"><span><img src={youtube} alt=""/></span></a>
                      <a href="/#"><span><img src={instagram} alt=""/></span></a>
                  </div>
              </li>
            </ul>
            
            <ul className='right-list'>
                <li onClick = {()=>setOpen(open?false:true)}><span>Services</span> 
                <hr/>
                <div className='services-list'>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                </div>
                </li>
            
                <li onClick = {()=>setOpen(open?false:true)}><span>Services</span> 
                <hr/>
                <div className='services-list'>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                </div>
                </li>
            
                <li onClick = {()=>setOpen(open?false:true)}><span>Services</span> 
                <hr/>
                <div className='services-list'>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                </div>
                </li>
            
                <li onClick = {()=>setOpen(open?false:true)}><span>Services</span> 
                <hr/>
                <div className='services-list'>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                    <a href="/#">some link</a>
                </div>
                </li>
            </ul>
        </div>
        <hr/>
        <div className="languages">
            <span className='relative'>
            <img src={glob} alt=""/>
                <select name="" id="">
                    
                    {languages.map(language=>{
                        return <option key={uuid.v4()} value={language}>{language}</option>
                    })}
                </select>
            </span>
           <hr/>
           <p>
               © 1995-2020 Opera Norway<br/>
                All rights reserved
            </p>
        </div>
      </div>
    </StyledSection>
  );
}

let StyledSection = styled.section`

.right-list li  {
    transition: .3s;
}
.right-list li span {
    padding: 0.5em 0;
    display: block;
}
.services-list {
    display:${props=> props.open ? 'block':'none'};
    transition: .3s;
}

.wrapper {
    padding: 3rem 0;
    font-size: .8rem;
}
a {
    display: block;
}

.medias_title {
    font-weight: bold;
}
.btn {
    width: 100%;
    padding: 1rem 0;
    border-radius: 0;
}
ul {
    padding: 0;
    list-style: none;
}
.medias_list {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 1rem auto 0;
}

.medias_list a {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #f4f4f4;
}

.medias_list a:hover {
    background:  rgba(200,200,200);
}

.medias_list a img{
    transform: scale(1.1);
    width: 100%;
}

#oslo {
    justify-content: center;
}

.footer-list {
    display: flex;
    flex-direction: column-reverse;
}
.left-list {
    text-align: center;
}
.languages  {
    display: flex;
    text-align: center;
    flex-direction: column;
    position: relative;
}
.languages  .relative {
    position: relative;
}
.languages  img {
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
}

select {
    padding: 1em;
    padding-left: 3em;
    border-radius: 2em;
    outline: none;
    cursor: pointer;
    width: 100%;
}

.logo-1 {
    width: 20%;
    margin: 0 auto;
    display: block;
    margin-bottom: 2em;
}
.logo-1_img {
    width: 100%;
}
@media screen and (min-width: 920px) {
    .services-list {
        display: block;
    }
    .medias_list {
        margin: 1rem 0 0;
    }
    .logo-1 {
        width: 60%;
        margin: 0 0 2em;
    }
    .footer-list {
        flex-direction: row;
        justify-content: space-between;
    }
    .left-list {
        text-align: left;
    }
    .right-list {
        display: flex;
        width: 70%;
        justify-content: space-between;
    }
    .contact-us {
        font-weight: normal;
    }
    .contact-us a{
        font-weight: normal;
    }

    .right-list li span {
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 1em;
        display: block;
    }
    .right-list li a {
        font-weight: normal;
        color: #999;
        margin-bottom: 0.8em;
    }
    #oslo {
        justify-content: flex-start;
    }
    .right-list hr {
        display: none;
    }
    .languages {
        display: flex;
        text-align: left;
        flex-direction: row-reverse;
    }
    select {
        width: 15rem;
    }

}
`;
