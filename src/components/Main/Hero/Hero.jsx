import React from 'react'
import { StyledHero, StyleInfo } from './StyleHero'
import Interactive from '../../../images/desktop/image-interactive.jpg'


export const Hero = () => {
  return (
    <StyledHero>
            <img src={Interactive} alt='Realidad Virtual'></img>
        <StyleInfo>
            <h5>THE LEADER IN INTERACTIVE VR</h5>
            <p>Founded in 2011, Loopsutdios has been producing world-class virtual reality projects for some of the best companies around the globle. Our award-winning creations have transformed bussinesses throught digital experiences that bind to their brand</p>
        </StyleInfo>
    </StyledHero>
  )
}
