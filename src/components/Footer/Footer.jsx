import React from 'react'
import Facebook from '../../images/icon-facebook.svg'
import Instagram from "../../images/icon-instagram.svg"
import Twitter from "../../images/icon-twitter.svg"
import Pinterest from "../../images/icon-pinterest.svg"
import LoopStudios from "../../images/logo.svg"
import { StyledFooter,StyledLogo,StyledList,StyledList2,StyledSpan,StyledDiv1,StyledDiv2} from './StyleFooter'

export const Footer = () => {

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
      name:"Products",
      route:""
    },
    {
      name: "Support",
      routes: ""
    }
  ]

  const imgsrc = [
    {
      name: "Facebook",
      source: Facebook
    },
    {
      name: "Instagram",
      source: Instagram
    },
    {
      name: "Twitter",
      source: Twitter
    },
    {
      name: "Pinterest",
      source: Pinterest
    }
  ]

  return (
    <StyledFooter>
      <StyledDiv1>
         <StyledLogo>
            <img src={LoopStudios} alt="Logo"></img>
        </StyledLogo>
        <StyledList>
        {
          links.map((item, index)=><li key={`${item.name}-${index}`}>{item.name}</li>)
        }
        </StyledList>
      </StyledDiv1>
       
        <StyledDiv2>
         <StyledList2>
          <li>
          {
          imgsrc.map((item, index)=><img key={`${item.name}-${index}`} src={item.source} alt={item.name}/>)
        }
            </li>
        </StyledList2> 
          <StyledSpan>© 2021 Loopstudios. All rights reserved.</StyledSpan>
        </StyledDiv2>

        
    </StyledFooter>
  )
}
