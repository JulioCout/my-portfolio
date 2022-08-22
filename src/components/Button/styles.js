import styled from "styled-components";

export const Container = styled.button`

  background-color: #fff;
  border: none;
  padding: 5px;
  position: relative;
  width: 7.2em;
  height: 2em;
  transition: 0.5s;
  font-size: 17px;
  border-radius: 0.4em;


p {
  position: absolute;
  top: 0.4em;
  left: 1.2em;
  margin: 0;
  padding: 0;
  transition: .5s;
  color: #0077b5;
  
  font-weight: 700;
}

svg {
  position: absolute;
  top: 0.45em;
  right: 0.5em;
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: 0.5s;
  height: 1em;
  fill: #fff
}

:hover p {
  left: 0.6em;
  color: #fff
}

:hover svg {
  opacity: 1;
}

:hover {
  background-color: #0077b5;
}

`