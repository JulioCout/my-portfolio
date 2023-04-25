import styled from "styled-components";

export const Container = styled.div`

/*Card*/
.card {
    width: 190px;
    height: 200px;
    border-radius: 18px;
    overflow: hidden;

    background-color: #fefefe;

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
    height: 100px;
    width: 100px;
    transition: all 0.3s ease-in-out;
}

p {
    display: none;
    transition: all 0.3s ease-in-out;
    color: #0f2f57;
    font-size: 14px;
}

h2 {
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
