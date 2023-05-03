
import React from 'react'
import { StyledContainer } from './StyleCard'
import { StyledTitleContent } from './StyleCard'
import earth from '../../../images/desktop/image-deep-earth.jpg';


export const Card = () => {
  return (
    <>
      <StyledContainer>
        <StyledTitleContent>
            <h6>OUR CREATIONS</h6>
            <button>SEE ALL</button>
        </StyledTitleContent>
        <div>
            <figure>
                <img src={earth} alt="" />
            </figure>
        </div>
      </StyledContainer>  
    </>
  )
}