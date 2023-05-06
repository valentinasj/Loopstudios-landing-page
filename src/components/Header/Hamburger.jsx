import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import butoncito from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';

const Hamburger = ({ open, onClick }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    onClick();
  };

  return (
    <Burguer active={active} onClick={handleClick}>
      <img src={ open ? close : butoncito} alt="hamburger" />
    </Burguer>
  )
}

export default Hamburger
const Burguer = styled.div`
  img {
    left: 75vw;
    width: 2rem;
    ${({ theme }) => css`
      @media (min-width: 375px) {
        display: none;
      }
    `}
  }
`
