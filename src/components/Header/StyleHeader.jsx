import styled from "styled-components";
import backgroundImage from "../../images/desktop/image-hero.jpg";
 
export const StyleContainer = styled.div`
 padding: 90px;
 height: 100vh;
 width: 100vw ;
 background-image: url("${backgroundImage}");
 background-repeat: no-repeat;
 background-size: cover;
`;

export const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-position: center;
  background-size: cover;
  ul {
    font-family: 'Alata', sans-serif;
    color: #fff;
    list-style: none;
    display: flex;
    gap: 16px;
  }
  

`;

export const StyleText = styled.section`
  padding: 50px;
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  border: 1px solid white;
  top: 50%;
  line-height: 1;
  position: absolute;
  letter-spacing: 3px;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
`;




