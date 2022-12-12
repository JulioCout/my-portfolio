import styled from "styled-components";

export const Container = styled.div`
/*Card*/
.card {
    width: 350px;
    height: 250px;
    border-radius: 10px;

    background-image: url(${props => props.thumbnail});
    background-size: cover;
    background-repeat: none;

    color: #ffffff;
}

.card-content {
    transition: all 0.3s ease-out;
    opacity: 0;
    padding: 15px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-content h2 {
  font-size: 22px;
  font-weight: 600;
}

.card-content p {
    font-size: 14px;
}

.card-content:hover {
    opacity: 100;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.8);
}

/* Button */

.buttons-wrapper {
    display: flex;
    justify-content: space-evenly;
}

.button {
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 0.5em 1em 0.5em 1em;
  color: #2196f3;
  background: none;
  border: 1px solid #2196f3;
  letter-spacing: 0.05em;
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s ease-in;
 }
   
/* Hover */
.button:hover {
  background: #0b81de;
  color: #FFFFFF;
}

@media screen and (min-width: 750px) {
 
.card {
    width: 582px;
    height: 317px;
}

.card-content {
    padding: 40px;
}

.card-content p {
    font-size: 16px;
}

}
`