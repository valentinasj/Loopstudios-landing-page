import styled from "styled-components";
import backgroundImage from "../../images/desktop/image-hero.jpg";
 
export const StyleContainer = styled.div`
 padding: 0;
 height: 100vh;
 background-image: url("${backgroundImage}");
`;

export const StyleHeader = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-position: center;
  background-size: cover;
  ul {
    padding: 20px;
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;

export const StyleText = styled.section`
  color: white;
  border: 1px solid white;
  top: 50%;
  position: absolute;
`;





