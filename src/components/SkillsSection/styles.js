import styled from "styled-components";

export const Container = styled.div`
  .skillsSection-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 100px 0 50px;
    background-color: #161616;
    border-radius: 64px;
    width: 100vw;
  }

  .skills-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  h3 {
    text-align: center;
  }

  @media screen and (min-width: 750px) {
    .skillsSection-body {
      width: 85vw;
    }

    .skills-content {
      flex-direction: row;
      gap: 100px;
    }
  }
`