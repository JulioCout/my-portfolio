import styled from "styled-components";

export const Container = styled.div`
.component {
    width: 85vw;
    display: flex;
    flex-direction: column;
    background-color: #121212;
    padding: 20px;
    min-height: 600px;
}

h2 {
    align-self: center;
    font-weight: 500;
    font-size: 32px;
    line-height: 47px;
    color: #E2E2E5;
    
}

/* Buttons */
.buttons-container {
    display: flex;
    flex-direction: row;
    
    align-self: center;
    margin-bottom: 15px;
}

.buttons-container button {
    align-items: center;
    margin: 20px 0 20px;
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
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all .3s;
}

.buttons-container button:first-child, button:first-child span {
    border-radius: 8px 0 0 8px;
}

.buttons-container button:last-child, button:last-child span {
    border-radius: 0 8px 8px 0;
}

.buttons-container button:active,
.buttons-container button:hover {
 outline: 0;
}

.buttons-container button span {
 background-color: rgb(5, 6, 45);
 padding: 16px 24px;
 /* border-radius: 6px; */
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
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
}

.cards-container h1 {
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: #edededee;
    margin: 12px 0 7px;
}

`