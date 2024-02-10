import styled from "styled-components";

export const Container = styled.div`
  .MaintenanceSection-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 100px 0 50px;
    background-color: #262626;
    width: 100vw;
    height: 100vh;
  }

  h1 {
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 30px;
    letter-spacing: -0.4px;
    word-spacing: 0px;
    color: #2A91D4;
    font-weight: 700;
  }

  p {
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: 18px;
    letter-spacing: -0.4px;
    word-spacing: 0px;
    color: #4F848C;
    font-weight: 400;
  }

  .port {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: row;
    gap: 15px;

    a {
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      font-size: 25px;
      letter-spacing: -0.4px;
      word-spacing: 0px;
      color: #2A91D4;
      font-weight: 500;
      text-decoration: none;
      font-style: normal;
      font-variant: normal;
      text-transform: none;
    }
    
  }
`;
