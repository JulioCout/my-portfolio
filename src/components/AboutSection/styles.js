import styled from "styled-components";

export const Container = styled.div`
    
    .aboutSection-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        background-color: #0294b7;
        background-image: linear-gradient(19deg, #4A2FBD 20%, #0294b7 100%);
    }

    .text-container {
        margin-bottom: 30px;
        padding: 60px 20px;
        max-width: 600px;
    }

    .about-text {
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #edededee;

        margin-top: 30px;
    }

    img {
        width: 375px;
        height: 375px;
    }

    @media screen and (min-width: 750px) {
        .aboutSection-body {
            flex-direction: row;
            gap: 30px
        }

        .text-container {
            margin: 0;
        }
        
        img {
            margin-top: 30px;
        }
    }

`