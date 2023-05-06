import styled, { css } from "styled-components";

export const StyledContainer = styled.section`
    width:auto;
    margin:2rem 2rem 6rem 2rem;
    margin-left: 12rem;
    margin-right:12rem;

    ${({ theme }) => css`
        @media (max-width: 375px) {
        margin:0px;

        }`
    }

    `

export const StyledTitleContent = styled.div`
    justify-content:space-between;
    display:flex;
    width:auto;
    
    margin-bottom: 4rem;
    ${({ theme }) => css`
        @media (max-width: 375px) {
            justify-content: center;
           
            
        }`
    }
    
    h6{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 2.5rem;
        color:hsl(0, 0%, 0%);

        ${({ theme }) => css`
        @media (max-width: 375px) {
            font-size: 2rem;
            
        }`
    }
        
    }
    button{
        background-color:transparent;
        padding:10px 45px;
        font-size: 1rem;
        border:1px solid hsl(0, 0%, 0%);
        border-radius: 2px;
        font-family: 'Alata', sans-serif;
        font-weight: 200;
        letter-spacing:5px;
        ${({ theme }) => css`
        @media (max-width: 375px) {
       display:none;
           
        }`
    }
       
    }

`

export const StyledContainerCard = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:10px;
    align-items: center;
    justify-content: space-between;
   div{
    position:relative; 
    width:260px;
   }

    img{
        height:auto;
        width:100%;
    }

    h1{
        position: absolute;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        color:#fff;
        bottom: 0;
        width:100%;
        padding: 2rem;
        font-size: 2rem;
        
    }

    ${({ theme }) => css`
        @media (max-width: 375px) {
       flex-direction: column;
       align-items:center;
       margin-bottom: 180px;
           
        }`
    }

`
