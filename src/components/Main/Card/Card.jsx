
import React from 'react';
import { StyledTitleContent, StyledContainerCard,  StyledContainer } from './StyleCard';
import grid from '../../../images/desktop/image-grid.jpg';
import arcade from '../../../images/desktop/image-night-arcade.jpg';
import soccer from '../../../images/desktop/image-soccer-team.jpg';
import earth from '../../../images/desktop/image-deep-earth.jpg';
import above from '../../../images/desktop/image-from-above.jpg';
import borealis from '../../../images/desktop/image-pocket-borealis.jpg';
import curiosity from '../../../images/desktop/image-curiosity.jpg';
import fisheye from '../../../images/desktop/image-fisheye.jpg';
import {CardItem} from './CardItem/CardItem';


const cardList = [
  {
    name: "DEEP EARTH",
    routes:`${earth}`
  },

  {
    name: "NIGHT ARCADE",
    routes: `${arcade}`
  },
  
  {
    name: "SOCCER TEAM VR",
    routes: `${soccer}`
  },

  {
    name: "THE GRID",
    routes: `${grid}`
  },
 
  {
    name: "FROM UP ABOVE VR",
    routes: `${above}`
  },

  {
    name: "POCKET BOREALIS",
    routes: `${borealis}`
  },

  {
    name: "THE CURIOSITY",
    routes: `${curiosity}`
  },

  {
    name: "MAKE IT FISHEYE",
    routes: `${fisheye}`
  }
]


export const Card = () => {
  return (
    <>
      <StyledContainer>
        <StyledTitleContent>
            <h6>OUR CREATIONS</h6>
            <button>SEE ALL</button>
        </StyledTitleContent>
        <StyledContainerCard>           
          {
            cardList.map((item, index)=> <CardItem imagen={item.routes} texto={item.name} /> )
          }
        </StyledContainerCard>
      </StyledContainer>  
    </>
  )
}