import styled from "styled-components";

export const Container = styled.div`
    
    .aboutSection-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        background-color: #FFFFFF;
        padding: 60px 20px;
        gap: 40px;
    }

    .text-container {
        margin-bottom: 30px;
        max-width: 600px;
    }
    
    .about-title {
        color: #000000;
        font-weight: 600;
    }

    .about-text {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #000000;

        margin-top: 20px;
    }

    img {
        width: 250px;
        height: 250px;
    }

    @media screen and (min-width: 750px) {
        .aboutSection-body {
            flex-direction: row;
            gap: 70px
        }

        .text-container {
            margin: 0;
        }
        
        img {
            margin-top: 30px;
        }
    }

`