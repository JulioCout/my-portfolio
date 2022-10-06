import styled from "styled-components";

export const Container = styled.div`
    .projectSection-body {
        display: flex;
        flex-direction: column;
        background-color: #121212;
        padding: 60px 0 60px;
        align-items: center;
    }

    /* Buttons */
    .buttons-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px 0 30px;
        width: 375px;
    }

    .buttons-container button {
        align-items: center;
        background-image: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
        border: 0;
        border-radius: 0;
        box-sizing: border-box;
        color: #FFFFFF;
        display: flex;
        font-family: Phantomsans, sans-serif;
        font-size: 18px;
        justify-content: center;
        line-height: 0.3em;
        max-width: 100%;
        min-width: 140px;
        padding: 1.5px;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        cursor: pointer;
        transition: all .3s;
    }

    .buttons-container button:nth-child(1), button:nth-child(1) span {
        border-radius: 8px 0 0 0;
    }

    .buttons-container button:nth-child(2), button:nth-child(2) span {
        border-radius: 0 8px 0 0;
    }

    .buttons-container button:nth-child(3), button:nth-child(3) span {
        border-radius: 0 0 0 8px;
    }
    
    .buttons-container button:nth-child(4), button:nth-child(4) span {
        border-radius: 0 0 8px 0;
    }

    .buttons-container button:active,
    .buttons-container button:hover {
    outline: 0;
    }

    .buttons-container button span {
        background-color: rgb(5, 6, 45);
        padding: 16px 24px;
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

    .buttons-container .active {
        background: none;
    }

    .buttons-container button:active {
        transform: scale(0.9);
    }

    .buttons-container button:focus {
        outline: none;
    }


    /* Cards */
    .cards-container {
        display: flex;
        flex-direction: column;
        gap: 60px;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 750px) {
        .buttons-container {
            width: 560px;
        }

        .buttons-container button:nth-child(1), button:nth-child(1) span {
            border-radius: 8px 0 0 8px;
        }

        .buttons-container button:nth-child(2), button:nth-child(2) span {
            border-radius: 0 0 0 0;
        }

        .buttons-container button:nth-child(3), button:nth-child(3) span {
            border-radius: 0 0 0 0;
        }
        
        .buttons-container button:nth-child(4), button:nth-child(4) span {
            border-radius: 0 8px 8px 0;
        }

        .cards-container {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: start
        }
    }

`