import styled, { css } from "styled-components";
import backgroundImage from "../../images/desktop/image-hero.jpg";

 
export const StyleContainer = styled.div`
 padding: 90px 13.1vw;
 height: 100vh;
 width: 100% ;
 background-image: url("${backgroundImage}");
 background-repeat: no-repeat;
 background-size: cover;
 ${({ theme }) => css`
        @media (max-width: 375px) {
          background-size: fit;
          background-position: center;
          padding:30px;
          img{
            width:170px;
          }
        }`
    }
`;

export const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-position: center;
  background-size: cover;
  ${({ theme }) => css`
        @media (max-width: 375px) {
          position:absolute;
        }`
    }
  ul {
    font-family: 'Alata', sans-serif;
    color: #fff;
    list-style: none;
    display: flex;
    gap: 16px;
    ${({ theme }) => css`
        @media (max-width: 375px) {
        display:none;
        }`
    }
  }
  

`;

export const StyleText = styled.section`
  padding: 60px;
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  border: 2px solid white;
  top: 40%;
  line-height: 1;
  position: absolute;
  letter-spacing: 3px;
  font-size: 3.5rem;
  font-weight: 300;
  text-transform: uppercase;
  width:12.5em;
  ${({ theme }) => css`
        @media (max-width: 375px) {
        position:relative;
        width:5em;
        padding:20px;
        
        }`
    }
  p{
    font-size: 4.2rem;
    ${({ theme }) => css`
        @media (max-width: 375px) {
        font-size: 1.5rem;
        

        }`
    }
  }
`;




