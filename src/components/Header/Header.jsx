import React from "react";
import logo from "../../images/logo.svg";
import  {StyleHeader, StyleContainer, StyleText}  from "./StyleHeader";
import backgroundImage from "../../images/desktop/image-hero.jpg";



const Header = () => {
    const links = [
      {
        name: "About",
        route: ""
      },
      {
        name: "Careers",
        route: ""
      },
      {
        name: "Events",
        route: ""
      },
      {
        name: "Support",
        routes: ""
      }
    ]
  return (
    <StyleContainer>
      <StyleText>
        <p>
          IMMERSIVE
          <br/>
          EXPERIENCES
          <br/>
          THAT DELIVER
        </p>
      </StyleText>
      <StyleHeader>
      <figure>
        <img src= {logo}alt="logo" />
      </figure>
      <ul>
        {
          links.map((item, index)=><li key={`${item.name}-${index}`}>{item.name}</li>)
        }
      </ul>
    </StyleHeader>
    </StyleContainer>
  );
}

export default Header