import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #100300;
    color:#FFF;
    overflow-x: hidden;
  }
  a {
    text-decoration:none;
    color: inherit;
    cursor: pointer;
  }
  li {
    list-style:none;
  }
  button {
    cursor: pointer;
  }
`;

