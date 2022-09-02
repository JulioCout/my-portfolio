import styled from "styled-components";

export const Container = styled.div`
.component {
    width: 85vw;
    display: flex;
    flex-direction: column;
    background-color: #202020;
    padding: 20px;
}


h1 {
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
    gap: 20px;
    align-self: center;
}

button {
 align-items: center;
 margin: 20px 0 20px;
 background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
 border: 0;
 border-radius: 8px;
 /* box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px; */
 box-sizing: border-box;
 color: #FFFFFF;
 display: flex;
 font-family: Phantomsans, sans-serif;
 font-size: 18px;
 justify-content: center;
 line-height: 0.5em;
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

button:active,
button:hover {
 outline: 0;
}

button span {
 background-color: rgb(5, 6, 45);
 padding: 16px 24px;
 border-radius: 6px;
 width: 100%;
 height: 100%;
 transition: 300ms;
}

button:hover span {
 background: none;
}

button:active {
 transform: scale(0.9);
}

button:focus {
  outline: none;
}
`