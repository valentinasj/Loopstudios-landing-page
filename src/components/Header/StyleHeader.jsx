import styled, { css } from "styled-components";
import backgroundImage from "../../images/desktop/image-hero.jpg";
import backgroundImage2 from "../../images/mobile/image-hero.jpg";

 
export const StyleContainer = styled.div`
 padding: 90px 13.1vw;
 height: 100vh;
 width: 100% ;
 background-image: url("${backgroundImage}");
 background-repeat: no-repeat;
 background-size: cover;
 ${({ theme }) => css`
        @media (max-width: 375px) {
          background-size: cover;
          background-position: center top;
          padding:30px;
          background-image: url("${backgroundImage2}");
          img{
            width:170px;
            margin-top: -50px;
            position: absolute;
            top: -55px;
            z-index:2;
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
  li{
    &:hover{
      border-bottom:0.5px solid white;
      width:30%; 
      cursor:pointer;  
    }
  }

  .active{
    display:none;
    ${({ theme }) => css`
        @media (max-width: 375px) {        
        display:flex;
        flex-direction: column;
        position: absolute;
        top:-150px;
          left:-30px;
          background-color:black;
          width:100vw;
          height:800px;
          padding-top: 190px;
          font-size: 1.5rem;
          padding-left: 30px;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          line-height: 40px;
        }`
        }
      }


`;

export const StyleContainerIcons = styled.div`
display:flex;
.hamb img{
  left: 75vw;
  width: 2rem;
  ${({ theme }) => css`
        @media (min-width: 375px) {
        display:none;
        }`
    }
}

`

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




