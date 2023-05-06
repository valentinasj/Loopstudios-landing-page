import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { StyleHeader, StyleContainer, StyleText, StyleContainerIcons } from "./StyleHeader";
import Hamburger from "./Hamburger";


const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

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
  ];

  return (
    <StyleContainer>
      <StyleText>
        <p>
          IMMERSIVE
          <br />
          EXPERIENCES
          <br />
          THAT DELIVER
        </p>
      </StyleText>
      <StyleHeader>
        <StyleContainerIcons>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <Hamburger open={clicked} onClick={handleClick} />
        </StyleContainerIcons>
        <ul className={clicked ? "active" : ""}>
          {links.map((item, index) => (
            <li key={`${item.name}-${index}`}>{item.name}</li>
          ))}
        </ul>
      </StyleHeader>
    </StyleContainer>
  );
};

export default Header;