import styled from "styled-components"

import bgImg from "../../assets/banner-bg.png"

export const Container = styled.div`
    .head-container {
        background-image: url(${bgImg});
        background-position: top left;
        background-size: auto;
        background-repeat: no-repeat;
        
        width: 100vw;

        padding: 100px 10px 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text-container {
        display: flex;
        gap: 30px;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .profile-pic {
        width: 200px;
        height: 200px;
    }

    .text-container h1 {
        font-weight: 700;
        font-size: 70px;
        line-height: 75px;
        color: #E2E2E5;
    }

    .buttons-wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    @media screen and (min-width: 750px) {
        .head-container {
            background-position: bottom right;
            flex-direction: row;
            gap: 100px;
            padding: 100px 0 100px;
            height: 100vh;
        }

        .buttons-wrapper {
            flex-direction: row;
            margin-top: 50px;

        }
    }
`