import styled from "styled-components";

export const Container = styled.div`

.card {
    width: 190px;
    height: 120px;
    transition: all .5s;
    box-shadow:  -5px -5px 5px #121417,
             5px 5px 5px #30343b;
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
  }
  
  .card:hover {
    height: 310px;
    background: linear-gradient(360deg, #edededc5 60%, hsla(0, 0%, 13%, 1) 70%);
  }
  
  .card .header {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(315deg, #23272c, #1e2025);
    margin-bottom: 16px;
  }
  
  .card .header .img-box {
    width: 50px;
    display: flex;
    justify-content: center;
  }
  
  .card .header .title {
    font-size: 1.1em;
    letter-spacing: .1em;
    font-weight: 500;
    text-transform: uppercase;
    padding: 4px 0 14px 0;
    transition: all .5s;
    color: #edededc5;
    margin-top: 5px;
  }
  
  .card:hover .card .header .title {
    padding: 0;
  }
  
  .card .content {
    display: block;
    text-align: center;
    color: #212121;
    margin: 0 10px;
  }
  
  .card .content p {
    transition: all .5s;
    font-size: 1em;
    margin-bottom: 8px;

  }
`