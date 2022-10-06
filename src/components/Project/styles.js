import styled from "styled-components";

export const Container = styled.div`
/*Card */
.card {
  width: 350px;
  height: 250px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0px 2px 5px rgba(35,35,35,0.3);
  transition: box-shadow .3s ease-in-out;
}
   
/*Image*/
.card-img {
  height: 100%;
  width: 100%;
  position: absolute;
  transition: transform .3s ease-in-out;
  z-index: 2;
  border-radius: 12px;
  overflow: hidden;
}

.card-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

   
/*Buttons*/
.button-list {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  padding: 0 1rem;
  transform: translateY(-200%);
  z-index: 3;
}
   
.button-list button {
  cursor: pointer;
  opacity: 0;
  transition: all .3s ease-in;
}

.cssbuttons {
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: black;
  background: #837f83;
  background: linear-gradient(315deg, #837f83 0%, #eeeeee 82%);
  border: none; 
  box-shadow: 0 0.7em 1.5em -0.5em #837f83;
  letter-spacing: 0.05em;
  border-radius: 20em;
 }

 .cssbuttons svg {
  margin-right: 6px;
 }
 
 .cssbuttons:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
 }
 
 .cssbuttons:active {
  box-shadow: 0 0.3em 1em -0.5em #14a73e98;
 }

 .cssbuttons:focus {
  outline: none;
 }
   
/*Text*/
ul {
  list-style: none;
}
   
h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #edededee;
  margin: 12px 0 7px;
}
  
p {
  width: 350px;
  font-weight: 100;
  font-size: 16px;
  line-height: 24px;
  color: #edededee;
}
   
/* Hover */
.card:hover {
  box-shadow:  -5px -5px 5px #0d0e10,
                5px 5px 5px #353a42;
      
}

.card:hover .button-list li button {
  transform: translateY(-5%);
  opacity: 1;
}
   
.card:hover .button-list li button:nth-child(1) {
  transition-delay: 0s;
}
   
.card:hover .button-list li button:nth-child(2) {
  transition-delay: .2s;
}
`