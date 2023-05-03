import React from 'react'
import Facebook from '../../images/icon-facebook.svg'
import Instagram from "../../images/icon-instagram.svg"
import Twitter from "../../images/icon-twitter.svg"
import Pinterest from "../../images/icon-pinterest.svg"
import LoopStudios from "../../images/logo.svg"
import { StyledFooter,StyledLogo,StyledList,StyledList2,StyledSpan,StyledDiv1,StyledDiv2} from './StyleFooter'

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv1>
         <StyledLogo>
            <img src={LoopStudios}></img>
        </StyledLogo>
        <StyledList>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
        </StyledList>
      </StyledDiv1>
       
        <StyledDiv2>
         <StyledList2>
          <li>
          <img src={Facebook}></img>
            </li>
          <li>
          <img src={Twitter}></img>
            </li>
          <li>
          <img src={Pinterest}></img>
            </li>
          <li>
          <img src={Instagram}></img>
            </li>
        </StyledList2> 
          <StyledSpan>© 2021 Loopstudios. All rights reserved.</StyledSpan>
        </StyledDiv2>

        
    </StyledFooter>
  )
}
