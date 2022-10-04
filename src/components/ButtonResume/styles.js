import styled from "styled-components";

export const Container = styled.button`

 background: #5cb85c;
 color: white;
 font-family: inherit;
 padding: 0.35em;
 padding-left: 1.2em;
 font-size: 17px;
 font-weight: 500;
 border-radius: 0.9em;
 border: none;
 letter-spacing: 0.05em;
 display: flex;
 align-items: center;
 box-shadow: inset 0 0 1.6em -0.6em #5cb85c;
 overflow: hidden;
 position: relative;
 height: 2.8em;
 padding-right: 3.3em;
 text-decoration: none;
 cursor: pointer;
 width: 160px;

.icon {
 background: white;
 margin-left: 1em;
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 height: 2.2em;
 width: 2.2em;
 border-radius: 0.7em;
 box-shadow: 0.1em 0.1em 0.6em 0.2em #5cb85c;
 right: 0.3em;
 transition: all 0.3s;
}

:hover .icon {
 width: calc(100% - 0.6em);
}

 .icon svg {
 width: 1.1em;
 transition: transform 0.3s;
 fill: #5cb85c;
}

:hover .icon svg {
 transform: translateX(0.1em);
}

:active .icon {
 transform: scale(0.95);
}

`