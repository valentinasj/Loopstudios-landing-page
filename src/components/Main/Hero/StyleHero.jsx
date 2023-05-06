import styled, { css }  from "styled-components";


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
    
    ${({ theme }) => css`
        @media (max-width: 375px) {
        display:block;

        img {
            width: 100%;
            left: 0;
            padding:20px;
        }
        }`
    }
    `

export const StyleInfo = styled.div`
    position: absolute;
    top: 264px;
    left: 580px;
    padding: 5rem;
    background-color: white;
    width: 650px;
    
    ${({ theme }) => css`
        @media (max-width: 375px) {
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        }`
    }


    h5{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 3rem;
        margin-bottom: 30px;
        ${({ theme }) => css`
        @media (max-width: 375px) {
         font-size: 1.8rem;
         text-align: center;
         font-weight: medium;
         
        }`
    }
        
    }
    p{
        font-family: 'Alata', sans-serif;
        font-weight: 400;
        font-size: 15px;
        color:hsl(0, 0%, 55%);
        width:90%;
        text-align: justify;
        
    ${({ theme }) => css`
        @media (max-width: 375px) {
        text-align: center;
        line-height:25px

        }`
    }

    }

    ${({ theme }) => css`
        @media (max-width: 375px) {
        position: initial;
        width: 100%;
        
        }`
    }
`
