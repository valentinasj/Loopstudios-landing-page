import styled, { css } from 'styled-components';

export const colors = {
  black: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',
  gray: 'hsl(0, 0%, 41%)',
  blue: 'hsl(249, 94%, 34%)',
};

export const fonts = {
  alata: "'Alata', sans-serif",
  roboto: "'Roboto', sans-serif",
};

export const StyledFooter = styled.div`
  background-color: ${colors.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 12rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @media (max-width: 375px) {
    display:flex;
    flex-direction: column; 
    align-items: center;
    justify-content: space-between;
    padding: 0;
    }
`;

export const StyledLogo = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 375px) {
    justify-content:center;
  img {
    padding: 53px 53px 0px;
    width: 80%;
  }
  } 
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 467px;
  flex-basis: 50%;
  li {
    list-style: none;
    color: ${colors.white};
    font-family: ${fonts.alata};
    font-size: 15px;
    font-weight: 400;
  }

  li:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  @media (max-width: 375px) {
    padding: 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    height: 314px;
    margin-block-start: 24px;
    margin-bottom: 5px;
    li{
      height:30px;
    }
  }
`;

export const StyledList2 = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: 50%;
  justify-content: space-between;
  width: 170px;
  img{
    margin:0px 7px 0px 7px;
  }
  

  li {
    list-style: none;
  }

  li:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  @media (max-width: 375px) {
    padding-left: 0px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  
    height: 30px;
    width: 100vw;
    -webkit-box-align: baseline;
    align-items: baseline;
    margin-bottom: 30px;
    img {
      margin:0px 10px 0px 10px;
    }
   
    
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: ${colors.gray};
  font-family: ${fonts.alata};

  span:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  @media (max-width: 375px) {
    padding-bottom: 100px;
    width: max-content;
  }
`;

export const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 50%;

  @media (max-width: 375px) {
    flex-basis: auto;
  }
`;

export const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;