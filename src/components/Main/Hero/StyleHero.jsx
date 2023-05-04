import styled from "styled-components";


export const StyledHero = styled.section`
    width: 100vw;
    max-width: 1300px;
    height: auto;
    padding-top: 6rem;
    padding-bottom: 6rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
      img{
        width:auto;
        height:auto;
        position:relative;
        left:-187px;
    }
    
   
    `

export const StyleInfo = styled.div`
    position: absolute;
    top: 264px;
    left: 580px;
    padding: 5rem;
    background-color: white;
    width: 650px;

    h5{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 3rem;
        margin-bottom: 30px;
        
    }
    p{
        font-family: 'Alata', sans-serif;
        font-weight: 400;
        font-size: 15px;
        color:hsl(0, 0%, 55%);
        width:90%;
        text-align: justify;
    }
`
