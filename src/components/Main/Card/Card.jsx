
import React from 'react';
import { useState, useEffect } from 'react';
import { StyledTitleContent, StyledContainerCard,  StyledContainer } from './StyleCard';
import {CardItem} from './CardItem/CardItem';
import grid from '../../../images/desktop/image-grid.jpg';
import arcade from '../../../images/desktop/image-night-arcade.jpg';
import soccer from '../../../images/desktop/image-soccer-team.jpg';
import earth from '../../../images/desktop/image-deep-earth.jpg';
import above from '../../../images/desktop/image-from-above.jpg';
import borealis from '../../../images/desktop/image-pocket-borealis.jpg';
import curiosity from '../../../images/desktop/image-curiosity.jpg';
import fisheye from '../../../images/desktop/image-fisheye.jpg';
import grid2 from '../../../images/mobile/image-grid.jpg'
import arcade2 from '../../../images/mobile/image-night-arcade.jpg'
import soccer2 from '../../../images/mobile/image-soccer-team.jpg'
import earth2 from '../../../images/mobile/image-deep-earth.jpg'
import above2 from '../../../images/mobile/image-from-above.jpg'
import borealis2 from '../../../images/mobile/image-curiosity.jpg'
import curiosity2 from '../../../images/mobile/image-curiosity.jpg'
import fisheye2 from '../../../images/mobile/image-fisheye.jpg'

const listMobile=[
  {
    name: "DEEP EARTH",
    routes:`${earth2}`
    
  },

  {
    name: "NIGHT ARCADE",
    routes: `${arcade2}`
  },
  
  {
    name: "SOCCER TEAM VR",
    routes: `${soccer2}`
  },

  {
    name: "THE GRID",
    routes: `${grid2}`
  },
 
  {
    name: "FROM UP ABOVE VR",
    routes: `${above2}`
  },

  {
    name: "POCKET BOREALIS",
    routes: `${borealis2}`
  },

  {
    name: "THE CURIOSITY",
    routes: `${curiosity2}`
  },

  {
    name: "MAKE IT FISHEYE",
    routes: `${fisheye2}`
  }
  
]


const listDesktop = [
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
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    const updateCardList = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 375) {
        setCardList(listMobile);
      } else {
        setCardList(listDesktop);
      }
    };
    updateCardList();
    window.addEventListener('resize', updateCardList);
    return () => {
      window.removeEventListener('resize', updateCardList);
    };
  }, []);
  

  return (
    <>
      <StyledContainer>
        <StyledTitleContent>
          <h6>OUR CREATIONS</h6>
          <button>SEE ALL</button>
        </StyledTitleContent>
        <StyledContainerCard>           
          {cardList.map((item, index)=> <CardItem imagen={item.routes} texto={item.name} key={index}/> )}
        </StyledContainerCard>
      </StyledContainer>  
    </>
  )
};