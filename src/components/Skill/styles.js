import styled from "styled-components";

export const Container = styled.div`

  .card {
    display: flex;
    align-items: center;
    transition: all 0.3s ease-out;
}

.card:hover {
    transform: translateY(-5px);
}

.card .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    z-index: 2;
    background: #353535;
    background: #353535;
    box-shadow: inset 14px 14px 14px #282828,
            inset -14px -14px 14px #424242;
    border-radius: 50%;
}

.card .content {
    width: 250px;
    height: 110px;
    z-index: 1;
    margin-left: -55px;
    padding-right: 8px;
    border-radius: 0 15px 15px 0;
    display: flex;
    align-items: center;
    background: rgb(151,151,151);
    background: linear-gradient(28deg, rgba(151,151,151,1) 23%, rgba(188,188,188,1) 50%, rgba(151,151,151,1) 80%); 
}

.card .content p {
    margin-left: 60px;
    font-weight: 300;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #121212;
    text-align: center;
}

`
