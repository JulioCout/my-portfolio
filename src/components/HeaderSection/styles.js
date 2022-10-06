import styled from "styled-components"

import bgImg from "../../assets/banner-bg.png"

export const Container = styled.div`
    .head-container {
        background-image: url(${bgImg});
        background-position: top left;
        background-size: auto;
        background-repeat: no-repeat;
        
        width: 100vw;

        padding: 50px 10px 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    .character {
        width: 450px;
        height: 450px;
        display: none;
        animation: updown 3s linear infinite;
    }

    @keyframes updown {
        0% {
            transform: translateY(-20px);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(-20px);
        }
    }

    @media screen and (min-width: 750px) {
        .head-container {
            background-position: top center;
            flex-direction: row;
            gap: 100px;
            padding: 100px 0 100px;
        }



        .character {
            display: flex;
        }
    }
`