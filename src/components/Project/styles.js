import styled from "styled-components";

export const Container = styled.div`
  /* From uiverse.io by @alexruix */
/*Card */
.card {
 width: 350px;
 height: 250px;
 background: #f5f5f5;
 position: relative;
 box-shadow: 0px 2px 5px rgba(35,35,35,0.3);
 transition: box-shadow .3s ease-in-out;
}

/*Image*/
.card-img {
 background: #00ff88;
 background: linear-gradient(to top, #00ff88 0%, #61efff 100%);
 height: 100%;
 width: 100%;
 position: absolute;
 transition: transform .3s ease-in-out;
 z-index: 2;
}

/*Buttons*/
.social-media {
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

.social-media li {
 background: #f5f5f5;
 padding: 10px 12px;
 border-radius: 50%;
 cursor: pointer;
 opacity: 0;
 transition: all .3s ease-in;
}

/*Text*/
ul {
 list-style: none;
}

svg {
 --size: 25px;
 width: var(--size);
 height: var(--size);
 fill: #252525;
}

h1 {
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #E2E2E5;
  margin: 12px 0 7px;
}

p {
  font-weight: 100;
  font-size: 16px;
  line-height: 24px;
  color: #E2E2E5;
}

/* Hover */
.card:hover {
 box-shadow: 1px 1px 15px rgb(224, 224, 224);
}

.card:hover .social-media li {
 transform: translateY(-5%);
 opacity: 1;
}

.card:hover .social-media li:nth-child(1) {
 transition-delay: 0s;
}

.card:hover .social-media li:nth-child(2) {
 transition-delay: .1s;
}
`