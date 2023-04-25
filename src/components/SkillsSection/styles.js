import styled from "styled-components";

export const Container = styled.div`
  .skillsSection-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 100px 0 50px;
    background-color: #f2f2f2;
    width: 100vw;
  }

  .cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h3 {
    text-align: center;
  }

  @media screen and (min-width: 750px) {

    .cards-wrapper {
      margin-top: 30px;

      padding: 0px 100px 100px;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
`;
