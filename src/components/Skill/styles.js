import styled from "styled-components";

export const Container = styled.div`

/*Card*/
.card {
    width: 150px;
    height: 150px;
    border-radius: 7px;
    overflow: hidden;

    /* background-color: #021662;
    background-image: linear-gradient(225deg, #021662 0%, #0800d8 50%, #000781 100%); */

    background-color: #293350;
    background-image: linear-gradient(225deg, #293350 0%, #605e92 50%, #2d335e 100%);

    display: flex;
    flex-direction: column;

    padding: 10px;
    transition: all 0.3s ease-in-out;
}

.card-head {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease-in-out;
}

img {
    height: 75px;
    width: 75px;
    transition: all 0.3s ease-in-out;
}

p {
    display: none;
    transition: all 0.3s ease-in-out;
    color: beige;
    font-size: 12px;
}

h2 {
    color: beige;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
}

/*Hover*/
.card:hover .card-head {
    height: 20%;
    justify-content: flex-start;
    flex-direction: row;
}

.card:hover img {
    width: 30px;
    height: 30px;
}

.card:hover p {
    display: flex;
    margin-top: 15px;
}

`
