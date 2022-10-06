import styled from "styled-components";

export const Container = styled.div`

  .card {
    display: flex;
  }

  .card .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    z-index: 2;
    background-color: #353535;
    border-radius: 50%;
  }

  .card .content {
    width: 250px;
    height: 110px;
    z-index: 1;
    background-color: #edededc5;
    margin-left: -55px;
    padding: 15px 10px;
    border-radius: 0 15px 15px 0;
  }

  .card .content p {
    margin-left: 60px;

    font-weight: 300;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #121212;
  }

`